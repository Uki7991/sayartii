<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(Request $request)
    {
        $ads = Ad::with('images:id,path,ad_id')->get();

        return inertia('Welcome', [
            'announcements' => $ads,
        ]);
    }
}
