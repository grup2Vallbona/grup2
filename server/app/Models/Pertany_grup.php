<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pertany_grup extends Model
{
    use HasFactory;
    protected $table = 'pertany_grups';
    public function usuari()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Persona::class);
    }

    public function agrupacio()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Agrupacio::class);
    }
}
