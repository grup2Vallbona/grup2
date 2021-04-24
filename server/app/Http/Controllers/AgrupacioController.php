<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Agrupacio;
class AgrupacioController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getAgrupacions()
    {
        return Agrupacio::all();
    }
    function getAgrupacio(Request $request, $id)
    {
        $agrup = Agrupacio::all();
        $agrup = $agrup->firstWhere('id', $id);
        return $agrup;
    }
    function updateAgrupacio(Request $request, $id)
    {
        $agrup = Agrupacio::find($id);
        $agrup->update($request->all());

        return $agrup;
    }
    function crearAgrupacio(Request $request)
    {
        $agrup = new Agrupacio;
        $agrup->nom = $request->nom;
        $agrup->descripcio = $request->descripcio;
        $agrup->save();

        return $agrup;
    }
    function eliminarAgrupacio($id)
    {
        $agrup = Agrupacio::find($id);
        $agrup->delete();
        return $agrup;
    }
}
