<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Gent_ensenyada;
use App\Models\Persona;

class GentEnsenyadaController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getGent_ensenyadas()
    {
        return Gent_ensenyada::all();
    }
    function gent_ensenyada(Request $request)
    {
        $pBallari = Persona::find($request->ballari_id);
        $pProfessor = Persona::find($request->professor_id);
        $gentEns = new Gent_ensenyada();
        
        $gentEns->persona()->associate($pBallari);
        $gentEns->persona()->associate($pProfessor);
        $gentEns->save();
        
        return $gentEns;
    }
}
