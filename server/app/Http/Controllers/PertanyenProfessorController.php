<?php

namespace App\Http\Controllers;

use App\Models\Entitat;
use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Pertanyen_professor;

class PertanyenProfessorController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getPertanyen_professors()
    {
        return Pertanyen_professor::all();
    }
    function pertanyen_professor(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $entitat = Entitat::find($request->entitat_id);
        $pertanyP = new Pertanyen_professor();
          
        $pertanyP->persona()->associate($persona);
        $pertanyP->entitat()->associate($entitat);
        $pertanyP->save();
        
        return $pertanyP;
    }
}
