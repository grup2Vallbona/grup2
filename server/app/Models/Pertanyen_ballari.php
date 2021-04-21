<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Entitat;
use App\Models\Persona;
class Pertanyen_ballari extends Model
{
    use HasFactory;
    protected $table = 'pertanyen_ballaris';
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
