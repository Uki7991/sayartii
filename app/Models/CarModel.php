<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarModel extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'car_id'];

    public function brand()
    {
        return $this->belongsTo(Car::class);
    }
}
