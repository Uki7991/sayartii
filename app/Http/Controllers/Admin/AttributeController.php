<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AttributeStoreRequest;
use App\Models\Attribute;
use App\Models\Category;
use Illuminate\Http\Request;

class AttributeController extends Controller
{
    const LINK = 'Admin/Attributes/';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia(self::LINK.'Index', [
            'collection' => Category::with('attributes')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia(self::LINK.'Create', [
            'nullableOptions' => Attribute::whereNull('category_id')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AttributeStoreRequest $request)
    {
        $request->validated();

        $cat = Category::create($request->all());

        foreach ($request->attributesarr as $item) {
            $attribute = Attribute::create(['title' => $item['title'], 'category_id' => $cat->id]);
        }

        $request->session()->flash('message', 'Attributes created successfully');

        return redirect()->route('admin.attributes.index');
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return inertia(self::LINK.'Edit', [
            'attribute' => Category::with('attributes')->find($id),
            'nullableOptions' => Attribute::whereNull('category_id')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AttributeStoreRequest $request, $id)
    {
        $cat = Category::find($id);
        $cat->update($request->all());

        foreach ($request->attributesarr as $item) {
            $attribute = Attribute::updateOrCreate(['title' => $item['title']], ['category_id' => $cat->id]);
        }

        $request->session()->flash('message', 'Attributes updated successfully');

        return redirect()->route('admin.attributes.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Category $category)
    {
        $category->delete();

        $request->session()->flash('message', 'Attributes deleted successfully!');

        return redirect()->back();
    }

    public function detach(Request $request, $id)
    {
        $attribute = Attribute::find($id);

        $attribute->category_id = null;
        $attribute->save();

        return response()->json('success');
    }
}
