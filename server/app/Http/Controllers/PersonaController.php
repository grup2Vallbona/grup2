<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Persona;
use App\Models\AssignacioBall;
use App\Models\TipusBall;

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

    function getPersonaUltima()
    {
        $persona = Persona::all();
        $persona = $persona->last();
        return $persona;
        //return Persona::all();
        // return ['hola'];
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
        $persona->ballari = $request->ballari;
        $persona->music = $request->music;
        $persona->professor = $request->professor;
        $persona->especialitatsProfessor = $request->especialitatsProfessor;
        $persona->rol = $request->rol;
        $persona->instrument = $request->instrument;
        $persona->dataNaixementBallari = $request->dataNaixementBallari;
        $persona->iniciProfessorat = $request->iniciProfessorat;
        $persona->save();

        return $persona;
    }
    function eliminarPersona($id)
    {
        $persona = Persona::find($id);
        $persona->delete();
        return $persona;
    }
    
}
