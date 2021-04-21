<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\AssignacioBall;
use App\Models\Persona;
use App\Models\TipusBall;

class AssignacioBallController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getAssignacioBalls()
    {
        return AssignacioBall::all();
    }
    function assignacioBall(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $tipusball = TipusBall::find($request->ball_id);
        $assignacioBall = new AssignacioBall();
        
        
        $assignacioBall->persona()->associate($persona);
        $assignacioBall->ball()->associate($tipusball);

        $assignacioBall->save();
        
        return $assignacioBall;
    }
}
