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
use App\Models\Usuari;
use Illuminate\Support\Facades\DB;

class AssistentController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *     path="/api/assistents",
     *     tags={"Assistents"},
     *     summary="Veure tots els assistents",
     *     description="",
     *
     *     @OA\Response(
     *         response=200,
     *         description="",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getAssistents()
    {
        return Assistent::all();
    }

    /**
     * @OA\Post(
     *   path="/api/assistent",
     *   tags={"Assistents"},
     *   summary="Inserir un nou assitent.",
     *   @OA\Parameter(
     *     name="event_id",
     *     description="id de l'event",
     *     required=true,
     *     in="query",
     *     @OA\Schema(
     *       type="integer"
     *     )
     *   ),
     *   @OA\Parameter(
     *     name="usuari_id",
     *     description="id de l'usuari",
     *     required=true,
     *     in="query",
     *     @OA\Schema(
     *       type="integer"
     *     )
     *   ),
     *
     *     @OA\Parameter(
     *     name="posicio",
     *     description="posicio de l'assitent",
     *     required=false,
     *     in="query",
     *     @OA\Schema(
     *       type="integer"
     *     )
     *   ),

     *   @OA\Response(
     *     response=200,
     *     description="Retorna l'assitent que hem inserit.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function assistent(Request $request)
    {
        $usuari = Usuari::find($request->usuari_id);
        $event = Event::find($request->event_id);
        $assist = new Assistent();

        $assist->posicio = $request->posicio;
        $assist->usuari()->associate($usuari);
        $assist->event()->associate($event);
        $assist->save();

        return $assist;
    }

    function getAssistentsId($id)
    {
        $assistents = Assistent::select('assistents.*', 'usuaris.*')
            ->join('usuaris', 'assistents.usuari_id', '=', 'usuaris.id')
            ->where('assistents.event_id', $id)
            ->get();

        return $assistents;
    }

    function countAssistentsEvent($idevento)
    {
        $count = Assistent::where('event_id', $idevento)
            ->count();
        return $count;
    }

    function deleteAssistent($idevento, $idassistent)
    {
        $assistent = Assistent::where('event_id', $idevento)
            ->where('usuari_id', $idassistent)
            ->delete();
        return $assistent;
    }
}
