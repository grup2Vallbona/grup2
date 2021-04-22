<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Assistent;
use App\Models\Event;
use App\Models\Persona;

class AssistentController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getAssistents()
    {
        return Assistent::all();
    }
    function assistent(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $event = Event::find($request->event_id);
        $assist = new Assistent();
        
        $assist->tipus=$request->tipus;        
        $assist->persona()->associate($persona);
        $assist->event()->associate($event);
        $assist->save();
        
        return $assist;
    }
}
