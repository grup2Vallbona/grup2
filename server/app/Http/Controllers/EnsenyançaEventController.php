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
    
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
        /**
     * @OA\Get(
     *   path="/api/ensenyançaevents",
     *   tags={"Ensenyança Events"},
     *   summary="Veure tots els ensenymanets dins dels events.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna totes les ensenyances.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getEnsenyança_events()
    {
        return Ensenyança_event::all();
    }

    /**
     * @OA\Post(
     *     path="/api/ensenyançaevent",
     *     tags={"Ensenyança Events"},
     *   summary="Inserir una nova ensenyança.",
    *   @OA\Parameter(
    *     name="professor_id",
    *     description="Id del professor",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
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
    *     description="Retorna l'ensenyament que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function ensenyança_event(Request $request)
    {
        $persona = Persona::find($request->professor_id);
        $event = Event::find($request->event_id);
        $ensenyançaEv = new Ensenyança_event();
     
        $ensenyançaEv->professor()->associate($persona);
        $ensenyançaEv->event()->associate($event);
        $ensenyançaEv->save();
        
        return $ensenyançaEv;
    }
}
