<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Administrador;
use App\Models\AssignacioBall;
use App\Models\Entitat;
use App\Models\Persona;

class AdministradorController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getAdministradors()
    {
        return Administrador::all();
    }
    function administrador(Request $request)
    {
        $persona = Persona::find(1);
        $entitat = Entitat::find(1);
        $administrador = new Administrador();
        
        $administrador->tipus=$request->tipus;        
        $administrador->persona()->associate($persona);
        $administrador->entitat()->associate($entitat);
        $administrador->save();
        
        return $administrador;
    }
}
