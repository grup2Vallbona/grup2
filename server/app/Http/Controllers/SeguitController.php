<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Seguit;

class SeguitController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getSeguits()
    {
        return Seguit::all();
    }

    function getSeguidoresId($id){
        $seguit = Seguit::all();
        $seguit = $seguit->where('seguit_id', $id);
        return $seguit;
    }
    
    function getSeguitsId($id)
    {        
        $seguit = Seguit::all();
        $seguit = $seguit->where('seguidor_id', $id);
        return $seguit;
    }

    function seguir(Request $request)
    {
        $pSeguida = Persona::find($request->seguit_id);
        $pSeguidor = Persona::find($request->seguidor_id);
        $seguir = new Seguit();
            
        $seguir->persona()->associate($pSeguida);
        $seguir->persona()->associate($pSeguidor);
        $seguir->save();
        
        return $seguir;
    }
}
