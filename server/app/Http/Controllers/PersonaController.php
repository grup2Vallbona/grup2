<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Persona;
class PersonaController extends BaseController
{
    //
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
    function assignacioBall(Request $request)
    {
        $persona = Persona::find($request->id);
        $persona->relacio()->attach($request->idBall);
        return $persona;
    }
}
