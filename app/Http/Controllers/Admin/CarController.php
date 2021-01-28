<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CarStoreRequest;
use App\Models\Car;
use App\Models\CarModel;
use Illuminate\Http\Request;

class CarController extends Controller
{
    const LINK = 'Admin/Cars/';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia(self::LINK.'Index', [
            'collection' => Car::with('models')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia(self::LINK.'Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CarStoreRequest $request)
    {
        $request->validated();
        $car = Car::create($request->all());
        foreach ($request->get('models') as $item) {
            $model = CarModel::create(['title' => $item['title'], 'car_id' => $car->id]);
        }

        $request->session()->flash('message', 'Car make created successfully!');

        return redirect()->route('admin.cars.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Car $car)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Car $car)
    {
        return inertia(self::LINK.'Edit', [
            'car' => $car->load('models'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Car $car)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Car $car)
    {
        $car->delete();

        $request->session()->flash('message', 'Car make successfully deleted!');

        return redirect()->route('admin.cars.index');
    }
}
