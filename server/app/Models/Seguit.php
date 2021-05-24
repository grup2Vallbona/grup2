<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Usuari;
class Seguit extends Model
{
    use HasFactory;
    protected $table = 'seguits';
    public function seguit()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Usuari::class);
    }
    public function seguidor()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Usuari::class);
    }
}
