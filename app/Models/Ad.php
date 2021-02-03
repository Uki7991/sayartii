<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'year', 'mileage', 'price', 'phone', 'whatsapp', 'car_model_id', 'user_id'];

    public function carModel()
    {
        return $this->belongsTo(CarModel::class);
    }

    public function attributesarr()
    {
        return $this->belongsToMany(Attribute::class);
    }

    public function tags()
    {
        $ids = collect(Category::select('id')->where('type', 'checkbox')->get()->toArray())->flatten();
        return $this->belongsToMany(Attribute::class)->whereIn('category_id', $ids);
    }

    public function specs()
    {
        $ids = collect(Category::select('id')->where('type', 'radio')->get()->toArray())->flatten();
        return $this->belongsToMany(Attribute::class)->whereIn('category_id', $ids);
    }

    public function images()
    {
        return $this->hasMany(AdImage::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getPriceAttribute($value)
    {
        return floor($value / 1000) ? number_format($value, 0, '.', ',') : $value;
    }

    public function getFeaturedAttribute($value)
    {
        return $value ? true : false;
    }

    public function getActiveAttribute($value)
    {
        return $value ? true : false;
    }

    public function getMileageCardAttribute() {
        return floor($this->mileage / 1000) ? $this->mileage / 1000 : $this->mileage;
    }
}
