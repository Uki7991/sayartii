<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdStoreRequest;
use App\Models\Ad;
use App\Models\AdImage;
use App\Models\Attribute;
use App\Models\Car;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AdController extends Controller
{
    const LINK = 'Admin/Ads/';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia(self::LINK.'Index', [
            'ads' => Ad::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::with('attributes')->get()->keyBy(function ($item) {
            return Str::camel($item['title']);
        })->map(function($item) {
            $item->attributesArr = $item->attributes->keyBy('id');
            $item->attributesArr->map(function ($i) {
                $i->status = false;
                return $i;
            });
            return $item;
        });

        return inertia(self::LINK.'Create', [
            'categories' => $categories,
            'cars' => Car::with('models')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdStoreRequest $request)
    {
        $validated = $request->validated();
        $ad = Ad::create($request->all());

        $attributes = Attribute::getAttributeIdsFromRequest($request->attributesArr);
        $ad->attributesarr()->sync($attributes);

        foreach ($request->images as $item) {
            AdImage::create(['path' => $item, 'ad_id' => $ad->id])->id;
        }

        return redirect()->route('admin.announcements.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function show(Ad $ad)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function edit(Ad $ad)
    {
        $ad->load('attributesarr:id');

        return inertia(self::LINK.'Edit', [
            'announcement' => $ad,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ad $ad)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ad $ad)
    {
        //
    }
}
