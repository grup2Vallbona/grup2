<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    use HasFactory;
    protected $fillable=[
      'tipus'  
    ];
    protected $table = 'administradors';
    public function persona()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Persona::class);
    }

    public function entitat()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Entitat::class);
    }
}
