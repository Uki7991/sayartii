<?php

namespace App\Http\Controllers;

use App\Services\FileUploader;
use App\Services\ImageUploader;
use Illuminate\Http\Request;

class ImageUploadController extends Controller
{
    public function postImage(Request $request)
    {
        if ($request->files->get('test')->getClientOriginalExtension() === 'svg') {
            $filename = FileUploader::upload($request->files->get('test'), 'svg', 'advantage');
        } else {
            $filename = ImageUploader::upload($request->files->get('test'), $request->dir, $request->prefix);
        }

        return \response()->json($filename);
    }

    public function deleteImage(Request $request)
    {
        $fileName = $request->filename;
        $re = '/^.*\.(jpg|jpeg|png|gif|webp)$/i';

        preg_match($re, $fileName, $matches, PREG_OFFSET_CAPTURE, 0);

        if (isset($matches[1][0])) {
            ImageUploader::delete($fileName);
        } else {
            FileUploader::delete($fileName);
        }

        return \response()->json();
    }

    public function getImage(Request $request)
    {
        $filename = $request->get('filename');

        $img_path = public_path('/storage/small/'.$filename);

        return response()->file($img_path, [
            'Content-Disposition' => 'inline; filename="'.$filename.'"',
        ]);
    }
}
