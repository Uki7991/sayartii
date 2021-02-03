<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Ad;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    public function login()
    {
        return inertia('Admin/Login');
    }

    public function index()
    {
        $firstOfMotnth = now()->firstOfMonth();
        $lastOfMotnth = now()->lastOfMonth();
        $usersCurrent = User::count();
        $registrations = User::where('created_at', '>', $firstOfMotnth)->where('created_at', '<', $lastOfMotnth)->count();

        $allAds = Ad::count();
        $newAds = Ad::where('created_at', '>', $firstOfMotnth)->where('created_at', '<', $lastOfMotnth)->count();

        return inertia('Admin/Dashboard', [
            'usersCurrentCount' => $usersCurrent,
            'registrationsCount' => $registrations,
            'allAnnouncementsCount' => $allAds,
            'newAnnouncementsCount' => $newAds,
        ]);
    }
}
