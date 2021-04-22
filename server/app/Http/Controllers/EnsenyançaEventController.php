<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Ensenyança_event;
use App\Models\Event;
use App\Models\Persona; 

class EnsenyançaEventController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getEnsenyança_events()
    {
        return Ensenyança_event::all();
    }
    function ensenyança_event(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $event = Event::find($request->event_id);
        $ensenyançaEv = new Ensenyança_event();
        
        $ensenyançaEv->tipus=$request->tipus;        
        $ensenyançaEv->persona()->associate($persona);
        $ensenyançaEv->event()->associate($event);
        $ensenyançaEv->save();
        
        return $ensenyançaEv;
    }
}
