<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Event;
use App\Models\Premi;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class EventController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
         /**
    * @OA\Get(
    *   path="/api/events",
    *   tags={"Events"},
    *   summary="Veure tots els events.",
    *   @OA\Response(
    *     response=200,
    *     description="Retorna tots els events.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function getEvents()
    {
        $data = new DateTime();
        $event = Event::select('*')->where('data','>=',$data)->orderBy('data', 'asc')->get();
        return $event;
    }
           /**
     * @OA\Get(
     *     path="/api/event/{id}",
     *     tags={"Events"},
     *     summary="Veure l'event desitjat.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Event per id",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *           format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Event amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getEvent(Request $request, $id)
    {
        $event = Event::all();
        $event = $event->firstWhere('id', $id);
        return $event;
    }
    /**
     * @OA\Post(
     *     path="/api/event/{id}",
     *     tags={"Events"},
     *     operationId="updateEvent",
     *     summary="Actualitza l'event ja existent",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Id del event a modificar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *           format="int64"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id del usuari",
     *         in="query",
     *         name="usuari_id",
     *         required=false,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id del ball",
     *         in="query",
     *         name="ball_id",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *        @OA\Parameter(
     *         description="Id del premi",
     *         in="query",
     *         name="premi_id",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Pais",
     *         in="query",
     *         name="pais",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Provincia",
     *         in="query",
     *         name="provincia",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Municipi",
     *         in="query",
     *         name="municipi",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Tipus de participacio",
     *         in="query",
     *         name="participacioTipus",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Titols",
     *         in="query",
     *         name="titol",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Subtitol",
     *         in="query",
     *         name="subtitol",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Carrer",
     *         in="query",
     *         name="carrer",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Descripcio",
     *         in="query",
     *         name="descripcio",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Data",
     *         in="query",
     *         name="data",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Agrupacio modificada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function updateEvent(Request $request, $id)
    {
        //cal posar en la peticio PUT el Header field:
        //Content-Type = application/x-www-form-urlencodeda va
        $event = Event::find($id);
        $event->update($request->all());

        return $event;
    }
        /**
    * @OA\Post(
    *   path="/api/event",
    *   tags={"Events"},
    *   summary="Inserir una nou event.",
    *  @OA\Parameter(
     *         description="Id del usuari",
     *         in="query",
     *         name="usuari_id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id del ball",
     *         in="query",
     *         name="ball_id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
    *        @OA\Parameter(
     *         description="Id del premi",
     *         in="query",
     *         name="premi_id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Pais",
     *         in="query",
     *         name="pais",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Provincia",
     *         in="query",
     *         name="provincia",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Municipi",
     *         in="query",
     *         name="municipi",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Tipus de participacio",
     *         in="query",
     *         name="participacioTipus",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Titols",
     *         in="query",
     *         name="titol",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Subtitol",
     *         in="query",
     *         name="subtitol",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Carrer",
     *         in="query",
     *         name="carrer",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Descripcio",
     *         in="query",
     *         name="descripcio",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Data",
     *         in="query",
     *         name="data",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna l'event que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearEvent(Request $request)
    {
        $event = new Event;
        $event->usuari_id = $request->usuari_id;
        $event->ball_id = $request->ball_id;
        $event->premi_id = $request->premi_id;
        $event->titol = $request->titol;
        $event->subtitol = $request->subtitol;
        $event->data = $request->data;
        $event->longitud = $request->longitud;
        $event->latitud = $request->latitud;
        $event->descripcio = $request->descripcio;
        $event->participacioTipus = $request->participacioTipus;
        $event->save();

        return $event;
    }
    function crearEventPremi(Request $request)
    {
        $premi = new Premi;
        $premi->titol = $request->titol;
        $premi->guanyador_id = $request->guanyador_id;
        $premi->creador_id = $request->creador_id;
        $premi->maxGuanyadors = $request->maxGuanyadors;
        $premi->categoria = $request->categoria;
        $premi->save();

        $premi = Premi::all();
        $premi = $premi->last();

        $event = new Event;
        $event->usuari_id = $request->usuari_id;
        $event->ball_id = $request->ball_id;
        $event->premi_id = $premi->id;
        $event->titol = $request->titol;
        $event->subtitol = $request->subtitol;
        $event->data = $request->data;
        $event->longitud = $request->longitud;
        $event->latitud = $request->latitud;
        $event->descripcio = $request->descripcio;
        $event->participacioTipus = $premi->categoria;
        $event->save();

        return $event;
    }
         /**
     * @OA\Delete(
     *     path="/api/event/{id}",
     *     tags={"Events"},
     *     summary="Eliminar un event.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Event a eliminar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *           format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Event eliminadt",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarEvent($id)
    {
        $event = Event::find($id);
        $event->delete();
        return $event;
    }
}
