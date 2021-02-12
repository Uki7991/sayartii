<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'image'];

    public function models()
    {
        return $this->hasMany(CarModel::class);
    }

    public function ads()
    {
        return $this->belongsToMany(Ad::class);
    }
}
