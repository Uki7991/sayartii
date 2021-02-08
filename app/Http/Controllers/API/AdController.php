<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Ad;
use App\Models\Car;
use App\Models\CarModel;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class AdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $car = $request->get('car');
        $model = $request->get('model');
        $yearFrom = $request->get('yearFrom');
        $yearTo = $request->get('yearTo');
        $priceFrom = $request->get('priceFrom');
        $priceTo = $request->get('priceTo');
        $mileageFrom = $request->get('mileageFrom');
        $mileageTo = $request->get('mileageTo');

        $attributes = json_decode($request->get('attributesArr'));
        $attrIds = [];
        if ($attributes) {
            foreach ($attributes as $attribute) {
                if (!is_object($attribute) && $attribute !== '') {
                    $attrIds[] = $attribute;
                }
            }
        }

        $ads = Ad::with('images:id,path,ad_id', 'attributesarr', 'carModel.car');
        if ($car || $car === 0) {
            $car = Car::find($car);
            $ads = $ads->whereIn('car_model_id', $car->models->pluck('id')->toArray());
        } else if ($model) {
            $ads = $ads->where('car_model_id', $model);
        }

        if (!empty($attrIds)) {
            $ads = $ads->whereHas('attributesarr', function (Builder $query) use ($attrIds) {
                $query->whereIn('attribute_id', $attrIds);
            }, count($attrIds));
        }

        if ($yearFrom) {
            $ads = $ads->where('year', '>=', $yearFrom);
        }
        if ($yearTo) {
            $ads = $ads->where('year', '<', $yearTo);
        }

        if ($priceFrom) {
            $ads = $ads->where('price', '>=', $priceFrom);
        }
        if ($priceTo) {
            $ads = $ads->where('price', '<', $priceTo);
        }

        if ($mileageFrom) {
            $ads = $ads->where('mileage', '>=', $mileageFrom);
        }
        if ($mileageTo) {
            $ads = $ads->where('mileage', '<', $mileageTo);
        }

        $ads = $ads->get();

        return $ads;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
