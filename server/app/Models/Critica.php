<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Critica extends Model
{
    use HasFactory;
    protected $fillable=[
        'terra',
        'espai',
        'musica',
        'opinio',
        'estrelles'
    ];
}
