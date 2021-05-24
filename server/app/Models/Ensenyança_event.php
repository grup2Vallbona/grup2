<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ensenyança_event extends Model
{
    use HasFactory;
    protected $table = 'ensenyança_events';
    public function professor()
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
