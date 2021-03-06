<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuari extends Model
{
    use HasFactory;
    protected $fillable=[
        'nickname',
        'idioma',
        'genere',
        'pais',
        'dataNaixement',
        'contrasenya',
        'email',
        'descripcio',
        'vacunaCovid',
        'imagen'
    ];
}
