<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipusBall extends Model
{
    use HasFactory;
    protected $fillable=[
        'nom'
    ];

/*    public function assignacioballs()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(AssignacioBall::class);
    }*/
}
