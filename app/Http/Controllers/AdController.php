<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdStoreRequest;
use App\Models\Ad;
use App\Models\AdImage;
use App\Models\Attribute;
use App\Models\Category;
use Illuminate\Http\Request;

class AdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $ad = Ad::create(array_merge($request->all(), ['car_model_id' => $request->model[1]['id'], 'user_id' => $request->user()->id]));

        $attributes = Attribute::getAttributeIdsFromRequest($request->attributesArr);
        $ad->attributesarr()->sync($attributes);

        foreach ($request->images as $item) {
            AdImage::create(['path' => $item, 'ad_id' => $ad->id])->id;
        }

        $request->session()->flash('message', 'Your listing has been posted!');

        return redirect()->route('homepage');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function show(Ad $ad)
    {
        $suggestions = Ad::with('images:id,path,ad_id', 'carModel.car')->where('id', '!=', $ad->id)->where('active', true)->orderByDesc('featured')->get()->shuffle();
        $suggestions = $suggestions->count() >= 8 ? $suggestions->random(8) : $suggestions;

        return inertia('Cars/Show', [
            'car' => $ad->load('images:id,path,ad_id', 'tags', 'specs.category', 'carModel.car'),
            'suggestions' => $suggestions,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ad  $ad
     * @return \Illuminate\Http\Response
     */
    public function edit(Ad $ad)
    {
        //
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
