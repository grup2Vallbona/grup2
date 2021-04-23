<?php

namespace App\Http\Controllers;

use App\Models\Entitat;
use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Pertanyen_ballari;
use Faker\Provider\ar_JO\Person;

class PertanyenBallariController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getPertanyen_ballarins()
    {
        return Pertanyen_ballari::all();
    }
    function pertanyen_ballari(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $entitat = Entitat::find($request->entitat_id);
        $pertanyB = new Pertanyen_ballari();
            
        $pertanyB->persona()->associate($persona);
        $pertanyB->entitat()->associate($entitat);
        $pertanyB->save();
        
        return $pertanyB;
    }
}
