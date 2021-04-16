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


    // -------- PERSONA --------


    function getPersonas()
    {
        return Persona::all();
    }


    function getPersona(Request $request, $id)
    {
        $persona = Persona::all();
        $persona = $persona->firstWhere('id', $id);
        return $persona;
    }
    function updatePersona(Request $request, $id)
    {
        $persona = Persona::find($id);
        $persona->update($request->all());

        return $persona;
    }
    function crearPersona(Request $request)
    {
        $persona = new Persona;
        $persona->titol = $request->titol;
        $persona->data_public = $request->data_public;
        $persona->autor_id = $request->autor_id;
        $persona->save();

        return $persona;
    }
    function eliminarPersona($id)
    {
        $persona = Persona::find($id);
        $persona->delete();
        return $persona;
    }


    // -------- ENTITAT --------

    function getEntitats()
    {
        return Entitat::all();
    }
    function getEntitat(Request $request, $id)
    {
        $entitat = Entitat::all();
        $entitat = $entitat->firstWhere('id', $id);
        return $entitat;
    }
    function updateEntitat(Request $request, $id)
    {
        $entitat = Entitat::find($id);
        $entitat->update($request->all());

        return $entitat;
    }
    function crearEntitat(Request $request)
    {
        $entitat = new Entitat;
        $entitat->titol = $request->titol;
        $entitat->data_public = $request->data_public;
        $entitat->autor_id = $request->autor_id;
        $entitat->save();

        return $entitat;
    }
    function eliminarEntitat($id)
    {
        $entitat = Entitat::find($id);
        $entitat->delete();
        return $entitat;
    }
}
