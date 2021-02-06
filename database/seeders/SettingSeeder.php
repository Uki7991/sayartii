<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Setting::truncate();
        $setting = [
            'logo' => 'Azzaba.com',
            'title' => 'Car announcements azzaba.com',
            'description' => 'Car announcements azzaba.com - Many cars in one place',
        ];

        Setting::create($setting);
    }
}
