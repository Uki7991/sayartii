<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'image', 'category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function ads()
    {
        return $this->belongsToMany(Ad::class);
    }

    public static function getAttributeIdsFromRequest($array)
    {
        $attributes = [];
        foreach ($array as $attribute) {
            if (is_array($attribute)) {
                foreach ($attribute as $key => $tag) {
                    if ($tag) {
                        $attributes[] = $key;
                    }
                }
            } else {
                $attributes[] = $attribute;
            }
        }
        return $attributes;
    }
}
