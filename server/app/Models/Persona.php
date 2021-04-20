<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    use HasFactory;
    protected $fillable=[
      'ballari',
      'music',
      'professor',
      'rol',
      'instrument',
      'dataNaixamentBallari',
      'iniciProfessorat',
      'especialitatsProfessor' 
    ];
/*    public function assignacioballs()
    {
        //return $this->hasMany(AssignacioBall::class);
        return $this->belongsTo(AssignacioBall::class);
    }*/
}
