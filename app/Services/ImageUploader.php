<?php


namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ImageUploader
{
    const DIRS = [
        'small',
        'large',
        'medium',
    ];

    public static function upload($file, $dir, $prefix, $quality = 90, $params = [])
    {
        if (!file_exists(storage_path('app/public/small'))) {
            mkdir(storage_path('app/public/small'), 0777);
            mkdir(storage_path('app/public/large'), 0777);
            mkdir(storage_path('app/public/medium'), 0777);
        }
        if (!file_exists(storage_path('app/public/small/'.$dir))) {
            mkdir(storage_path('app/public/small/'.$dir), 0777);
            mkdir(storage_path('app/public/medium/'.$dir), 0777);
            mkdir(storage_path('app/public/large/'.$dir), 0777);
        }

        $filename = $dir.'/'.uniqid($prefix . '_') . '.' . mb_strtolower($file->getClientOriginalExtension());
        $img = Image::make($file);
        if (array_key_exists('width', $params) && array_key_exists('height', $params)) {
            $img->resize($params['width'], $params['height']);
        }
        $img->stream($file->getClientOriginalExtension(), $quality);
        Storage::disk('local')->put('public/large/'.$filename, $img);
        $img = self::resize($img, (int)$img->width() * 0.7);
        $img->stream($file->getClientOriginalExtension(), $quality);
        Storage::disk('local')->put('public/medium/'.$filename, $img);
        $img = self::resize($img, (int)$img->width() * 0.5);
        $img->stream($file->getClientOriginalExtension(), $quality);
        Storage::disk('local')->put('public/small/'.$filename, $img);
        return $filename;

    }

    public static function resize($img, $width)
    {
        /**
         * @var Image $img
         */
        return $img->resize($width, null, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    public static function delete($image_path)
    {
        foreach (self::DIRS as $DIR) {
            Storage::disk('local')->delete('public/'.$DIR.'/'.$image_path);
        }
    }
}
