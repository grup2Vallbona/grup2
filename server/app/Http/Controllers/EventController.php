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
        $event->usuari_id = $request->usuari_id;
        $event->ball_id = $request->ball_id;
        $event->premi_id = $request->premi_id;
        $event->titol = $request->titol;
        $event->subtitol = $request->subtitol;
        $event->data = $request->data;
        $event->pais = $request->pais;
        $event->provincia = $request->provincia;
        $event->municipi = $request->municipi;
        $event->carrer = $request->carrer;
        $event->descripcio = $request->descripcio;
        $event->participacioTipus = $request->participacioTipus;
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
