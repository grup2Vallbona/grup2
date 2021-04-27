<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Music_event;
use App\Models\Persona;

class MusicEventController extends BaseController
{
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getMusic_events()
    {
        return Music_event::all();
    }
    function music_event(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $event = Event::find($request->event_id);
        $musicEv = new Music_event();
             
        $musicEv->persona()->associate($persona);
        $musicEv->event()->associate($event);
        $musicEv->save();
        
        return $musicEv;
    }
}
