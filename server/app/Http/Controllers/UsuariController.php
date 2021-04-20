<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Usuari;
use App\Models\Persona;
use App\Models\Entitat;
use Illuminate\Http\Request;

class UsuariController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;



    // -------- USUARIS --------


    function getUsuaris()
    {
        return Usuari::all();
    }
    function getUsuari(Request $request, $id)
    {
        $usuari = Usuari::all();
        $usuari = $usuari->firstWhere('id', $id);
        return $usuari;
    }
    function updateUsuari(Request $request, $id)
    {
        $usuari = Usuari::find($id);
        $usuari->update($request->all());

        return $usuari;
    }

    function crearUsuari(Request $request)
    {
        $usuari = new Usuari;
        $usuari->titol = $request->titol;
        $usuari->data_public = $request->data_public;
        $usuari->autor_id = $request->autor_id;
        $usuari->save();

        return $usuari;
    }
    function eliminarUsuari($id)
    {
        $usuari = Usuari::find($id);
        $usuari->delete();
        return $usuari;
    }


    


}
