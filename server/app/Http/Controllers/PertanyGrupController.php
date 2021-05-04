<?php

namespace App\Http\Controllers;

use App\Models\Agrupacio;
use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Pertany_grup;

class PertanyGrupController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getPertany_grups()
    {
        return Pertany_grup::all();
    }
    function pertany_grup(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $agrupacio = Agrupacio::find($request->agrupacio_id);
        $pertanyG = new Pertany_grup();
           
        $pertanyG->persona()->associate($persona);
        $pertanyG->agrupacio()->associate($pertanyG);
        $pertanyG->save();
        
        return $pertanyG;
    }
}
