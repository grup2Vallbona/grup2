<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Event;

use Illuminate\Http\Request;

class EventController extends BaseController
{
    //-------- EVENTS --------
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getEvents()
    {
        return Event::all();
    }
    function getEvent(Request $request, $id)
    {
        $event = Event::all();
        $event = $event->firstWhere('id', $id);
        return $event;
    }
    function updateEvent(Request $request, $id)
    {
        //cal posar en la peticio PUT el Header field:
        //Content-Type = application/x-www-form-urlencodeda va
        $event = Event::find($id);
        $event->update($request->all());

        return $event;
    }
    function crearEvent(Request $request)
    {
        $event = new Event;
        $event->titol = $request->titol;
        $event->data_public = $request->data_public;
        $event->autor_id = $request->autor_id;
        $event->save();

        return $event;
    }
    function eliminarEvent($id)
    {
        $event = Event::find($id);
        $event->delete();
        return $event;
    }
}
