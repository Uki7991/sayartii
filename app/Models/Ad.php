<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'year', 'mileage', 'price', 'phone', 'whatsapp', 'model_id'];

    public function model()
    {
        return $this->belongsTo(CarModel::class);
    }

    public function attributes()
    {
        return $this->belongsToMany(Attribute::class);
    }

    public function images()
    {
        return $this->hasMany(AdImage::class);
    }
}
