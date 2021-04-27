<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable=[
      'titol',
      'subtitol',
      'data',
      'pais',
      'provincia',
      'municipi',
      'carrer',
      'descripcio',
      'tipusMusica',
      'participacioTipus'  
    ];
}