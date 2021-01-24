<?php


namespace App\Services;


use Illuminate\Support\Facades\File;

class FileUploader
{
    public static function upload($file, $dir, $prefix)
    {
        if (!file_exists(storage_path('app/public/files/'))) {
            mkdir(storage_path('app/public/files/'), 0777);
        }
        if (!file_exists(storage_path('app/public/files/' . $dir))) {
            mkdir(storage_path('app/public/files/' . $dir), 0777);
        }
        $extension = is_string($file) ? File::extension($file) : mb_strtolower($file->getClientOriginalExtension());
        $filename = $dir . '/' . uniqid($prefix . '_') . '.' . $extension;
        is_string($file) ? copy($file, storage_path('app/public/files/'.$filename)) : move_uploaded_file($file, storage_path('app/public/files/'.$filename));
        return $filename;
    }
}
