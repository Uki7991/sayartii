<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/login', [\App\Http\Controllers\Admin\IndexController::class, 'login'])->middleware('guest');

Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'login'])->middleware('guest')->name('login');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/email/verify', function () {
    return \inertia('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/dashboard');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::resource('ads', \App\Http\Controllers\AdController::class);

Route::get('/car/show', function () {
    return \inertia('Cars/Show');
})->name('car.show');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::name('admin.')->prefix('admin')->group(function () {

    Route::middleware('auth')->group(function () {
        Route::get('/', function () {
            return redirect()->intended('/admin/dashboard');
        });
        Route::get('/dashboard', [\App\Http\Controllers\Admin\IndexController::class, 'index'])->name('index');
    });
});
