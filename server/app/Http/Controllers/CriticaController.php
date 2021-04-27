<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Critica;
class CriticaController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getCriticas()
    {
        return Critica::all();
    }
    function getCritica(Request $request, $id)
    {
        $critica = Critica::all();
        $critica = $critica->firstWhere('id', $id);
        return $critica;
    }
    function updateCritica(Request $request, $id)
    {
        $critica = Critica::find($id);
        $critica->update($request->all());

        return $critica;
    }
    function crearCritica(Request $request)
    {
        $critica = new Critica;
        $critica->event_id = $request->event_id;
        $critica->usuari_id = $request->usuari_id;
        $critica->terra = $request->terra;
        $critica->espai = $request->espai;
        $critica->musica = $request->musica;
        $critica->opinio = $request->opinio;
        $critica->estrelles = $request->estrelles;
        $critica->save();

        return $critica;
    }
    function eliminarCritica($id)
    {
        $critica = Critica::find($id);
        $critica->delete();
        return $critica;
    }
}
