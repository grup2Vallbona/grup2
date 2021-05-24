<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssignacioBall extends Model
{
    use HasFactory;
    protected $fillable=[
         'persona_id', 'ball_id'
    ];
        /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'assignacio_balls';

    function __construct() {

    }

    public function persona()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(Persona::class);
    }

    public function ball()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(TipusBall::class);
    }
}
