<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Premi extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom',
        'maxGuanyadors',
        'categoria'
    ];
}
