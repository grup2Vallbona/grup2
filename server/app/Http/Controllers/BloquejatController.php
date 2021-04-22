<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Bloquejat;
use App\Models\Persona;

class BloquejatController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getBloquejats()
    {
        return Bloquejat::all();
    }
    function bloquejar(Request $request)
    {
        $pBloquejada = Persona::find($request->bloquejat_id);
        $pBloquejadora = Persona::find($request->bloquejador_id);
        $block = new Bloquejat();
        
        $block->tipus=$request->tipus;        
        $block->persona()->associate($pBloquejada);
        $block->persona()->associate($pBloquejadora);
        $block->save();
        
        return $block;
    }
}
