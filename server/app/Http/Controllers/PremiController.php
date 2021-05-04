<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Premi;

class PremiController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getPremis()
    {
        return Premi::all();
    }
    function getPremi(Request $request, $id)
    {
        $premi = Premi::all();
        $premi = $premi->firstWhere('id', $id);
        return $premi;
    }
    function getPremisUsuari(Request $request, $id)
    {
        $premi = Premi::all();
        $premi = $premi->where('creador_id','=', $id);
        return $premi;
    }
    function updatePremi(Request $request, $id)
    {
        $premi = Premi::find($id);
        $premi->update($request->all());

        return $premi;
    }
    function crearPremi(Request $request)
    {
        $premi = new Premi;
        $premi->nom = $request->nom;
        $premi->guanyador_id = $request->guanyador_id;
        $premi->creador_id = $request->creador_id;
        $premi->maxGuanyador = $request->maxGuanyador;
        $premi->categoria = $request->categoria;
        $premi->save();

        return $premi;
    }
    function eliminarPremi($id)
    {
        $premi = Premi::find($id);
        $premi->delete();
        return $premi;
    }
    function getPremiUltim()
    {
        $premi = Premi::all();
        $premi = $premi->last();
        return $premi;
    }
}
