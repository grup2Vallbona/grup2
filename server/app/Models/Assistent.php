<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assistent extends Model
{
    use HasFactory;
    public function persona()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Persona::class);
    }

    public function event()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Event::class);
    }
    
}
