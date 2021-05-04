<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assistent extends Model
{
    use HasFactory;
    protected $fillable=[
        'posicio'
    ];
    public function usuari()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Usuari::class);
    }

    public function event()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Event::class);
    }
    
}
