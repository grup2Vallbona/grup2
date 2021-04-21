<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Persona;
class Seguit extends Model
{
    use HasFactory;
    protected $table = 'seguits';
    public function persona()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Persona::class);
    }
}
