<?php

namespace Database\Seeders;

use App\Models\Attribute;
use App\Models\Category;
use App\Services\FileUploader;
use App\Services\ImageUploader;
use Illuminate\Database\Seeder;
use Intervention\Image\Facades\Image;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Attribute::truncate();
        Category::truncate();
        $cats = $this->categories();

        foreach ($cats as $cat) {
            $category = new Category(['title' => $cat['title'], 'type' => $cat['type']]);
            $category->save();
            foreach ($cat['values'] as $value) {
                $attr = new Attribute(['title' => isset($value['title']) && $value['title'] != '' ? $value['title'] : null, 'image' => isset($value['image']) && $value['image'] != '' ? FileUploader::upload($value['image'], 'attribute_icons', 'icon') : null, 'category_id' => $category->id]);
                $attr->save();
            }
        }
    }

    private function categories()
    {
        return [
            [
                'title' => 'Body type',
                'type' => 'radio',
                'values' => [
                    [
                        'title' => 'Sedan',
                        'image' => public_path('assets/icons/sedan.svg'),
                    ],
                    [
                        'title' => 'Coupe',
                        'image' => public_path('assets/icons/coupe.svg'),
                    ],
                    [
                        'title' => 'SUV',
                        'image' => public_path('assets/icons/suv.svg'),
                    ],
                    [
                        'title' => 'Hatch',
                        'image' => public_path('assets/icons/hatch.svg'),
                    ],
                    [
                        'title' => 'Wagon',
                        'image' => public_path('assets/icons/wagon.svg'),
                    ],
                    [
                        'title' => 'Pickup',
                        'image' => public_path('assets/icons/pickup.svg'),
                    ],
                    [
                        'title' => 'Minivan',
                        'image' => public_path('assets/icons/minivan.svg'),
                    ],
                    [
                        'title' => 'Commercial',
                        'image' => public_path('assets/icons/commercial.svg'),
                    ],
                    [
                        'title' => 'Other',
                        'image' => public_path('assets/icons/other.svg'),
                    ],
                ],
            ],
            [
                'title' => 'Doors',
                'type' => 'radio',
                'values' => [
                    ['title' => '2'],
                    ['title' => '3'],
                    ['title' => '4'],
                    ['title' => '5'],
                ],
            ],
            [
                'title' => 'Cylinders',
                'type' => 'radio',
                'values' => [
                    ['title' => '', 'image' => public_path('assets/icons/electric.svg')],
                    ['title' => '2'],
                    ['title' => '3'],
                    ['title' => '4'],
                    ['title' => '5'],
                    ['title' => '6'],
                    ['title' => '8'],
                    ['title' => '10'],
                    ['title' => '12'],
                    ['title' => '16'],
                ],
            ],
            [
                'title' => 'Transmission',
                'type' => 'radio',
                'values' => [
                    ['title' => 'automatic'],
                    ['title' => 'manual'],
                ],
            ],
            [
                'title' => 'Fuel',
                'type' => 'radio',
                'values' => [
                    ['title' => 'diesel'],
                    ['title' => 'petrol'],
                    ['title' => 'electric'],
                    ['title' => 'hybrid'],
                    ['title' => 'other'],
                ],
            ],
            [
                'title' => 'Color',
                'type' => 'radio',
                'values' => [
                    ['title' => 'black'],
                    ['title' => 'blue'],
                    ['title' => 'brown'],
                    ['title' => 'gold'],
                    ['title' => 'gray'],
                    ['title' => 'orange'],
                    ['title' => 'green'],
                    ['title' => 'purple'],
                    ['title' => 'red'],
                    ['title' => 'silver'],
                    ['title' => 'white'],
                    ['title' => 'yellow'],
                    ['title' => 'beige'],
                    ['title' => 'other'],
                ],
            ],
            [
                'title' => 'Tags',
                'type' => 'checkbox',
                'values' => [
                    ['title' => 'US spec'],
                    ['title' => 'Japanese spec'],
                    ['title' => 'Full option'],
                    ['title' => 'Warranty'],
                    ['title' => 'GCC spec'],
                    ['title' => 'Supercharger'],
                    ['title' => 'Brand New'],
                    ['title' => 'Convertible'],
                ],
            ],
        ];
    }
}
