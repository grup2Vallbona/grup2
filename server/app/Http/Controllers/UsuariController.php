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
    function getUsuariCorreo(Request $request, $email)
    {
        $usuari = Usuari::all();
        $usuari = $usuari->firstWhere('email', $email);
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
        $usuari->entitat_id = $request->entitat_id;
        $usuari->persona_id = $request->persona_id;
        $usuari->nickname = $request->nickname;
        $usuari->contrasenya = $request->contrasenya;
        $usuari->email = $request->email;
        $usuari->descripcio = $request->descripcio;
        $usuari->imagen = $request->imagen;
        $usuari->idioma = $request->idioma;
        $usuari->genere = $request->genere;
        $usuari->pais = $request->pais;
        $usuari->vacunaCovid = $request->vacunaCovid;
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
