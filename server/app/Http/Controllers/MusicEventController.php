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

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
        /**
     * @OA\Get(
     *   path="/api/musicevents",
     *   tags={"Musics a events"},
     *   summary="Veure tots els musics que van a un event.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna tots els musics que van a un event.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getMusic_events()
    {
        return Music_event::all();
    }
        /**
    * @OA\Post(
    *   path="/api/musicevent",
    *   tags={"Musics a events"},
    *   summary="Inserir un nou music que assitira a un event.",
    *   @OA\Parameter(
    *     name="music_id",
    *     description="Id del music",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
   *  @OA\Parameter(
    *     name="event_id",
    *     description="Id del event",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el nou music que assitira a un event inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function music_event(Request $request)
    {
        $music = Persona::find($request->music_id);
        $event = Event::find($request->event_id);
        $musicEv = new Music_event();
             
        $musicEv->music()->associate($music);
        $musicEv->event()->associate($event);
        $musicEv->save();
        
        return $musicEv;
    }
}
