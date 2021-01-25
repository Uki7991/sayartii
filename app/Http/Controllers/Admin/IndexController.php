<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    public function login()
    {
        return inertia('Admin/Login');
    }

    public function index()
    {
        return inertia('Admin/Dashboard');
    }
}
