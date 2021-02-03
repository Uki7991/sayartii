<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use App\Models\Car;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(Request $request)
    {
        $ads = Ad::with('images:id,path,ad_id', 'carModel.car')->where('active', true)->orderByDesc('featured')->get();

        return inertia('Welcome', [
            'announcements' => $ads,
        ]);
    }
}
