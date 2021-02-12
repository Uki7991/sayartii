<?php

use App\Http\Controllers\ImageUploadController;
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

Route::get('/', [\App\Http\Controllers\IndexController::class, 'index'])->name('homepage');

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

Route::resource('announcements', \App\Http\Controllers\AdController::class)->parameters(['announcements' => 'ad']);

Route::get('/car/show', function () {
    return \inertia('Cars/Show');
})->name('car.show');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::post('/images/post-image', [ImageUploadController::class, 'postImage'])->name('images.post-image');
Route::delete('/images/delete-image', [ImageUploadController::class, 'deleteImage'])->name('images.delete-image');
Route::get('/images/get-image', [ImageUploadController::class, 'getImage'])->name('images.get-image');
Route::put('/users/{user}', [\App\Http\Controllers\UserController::class, 'update'])->middleware('auth')->name('users.update');
Route::name('admin.')->prefix('admin')->group(function () {

    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('/', function () {
            return redirect()->intended('/admin/dashboard');
        });
        Route::get('/dashboard', [\App\Http\Controllers\Admin\IndexController::class, 'index'])->name('index');
        Route::post('/announcements/{ad}/active', [\App\Http\Controllers\Admin\AdController::class, 'active'])->name('announcements.active');
        Route::post('/announcements/{ad}/featured', [\App\Http\Controllers\Admin\AdController::class, 'featured'])->name('announcements.featured');
        Route::resource('announcements', \App\Http\Controllers\Admin\AdController::class)->parameters(['announcements' => 'ad']);
        Route::put('/cars/{id}/detach', [\App\Http\Controllers\Admin\CarController::class, 'detach'])->name('cars.detach');
        Route::resource('cars', \App\Http\Controllers\Admin\CarController::class);
        Route::put('/attributes/{id}/detach', [\App\Http\Controllers\Admin\AttributeController::class, 'detach'])->name('attribute.detach');
        Route::resource('attributes', \App\Http\Controllers\Admin\AttributeController::class)->parameters(['attributes' => 'category']);
        Route::resource('settings', \App\Http\Controllers\Admin\SettingController::class);
    });
});
