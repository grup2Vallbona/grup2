<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Entitat;
use App\Models\Persona;
class Pertanyen_professor extends Model
{
    use HasFactory;
    protected $table = 'pertanyen_professors';
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
