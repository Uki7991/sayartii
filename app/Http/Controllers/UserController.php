<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(UserUpdateRequest $request, User $user) {
        try {
            $user->update($request->all());
        } catch (\Exception $exception) {
            $request->session()->flash('message', 'Sorry! We can`t update your profile!');

            return redirect()->back();
        }

        $request->session()->flash('message', 'Your profile updated successfully!');

        return redirect()->back();
    }
}
