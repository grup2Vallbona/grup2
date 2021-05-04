<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Critica;

class CriticaController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *   path="/api/criticas",
     *   tags={"Critiques"},
     *   summary="Veure totes les critiques.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna totes les critiques.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getCriticas()
    {
        return Critica::all();
    }
    /**
     * @OA\Get(
     *     path="/api/critica/{id}",
     *     tags={"Critiques"},
     *     summary="Veure la critica desitjada.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Critica per id",
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
     *         description="Critica amb id seleccionada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getCritica(Request $request, $id)
    {
        $critica = Critica::all();
        $critica = $critica->firstWhere('id', $id);
        return $critica;
    }
    /**
     * @OA\Put(
     *     path="/api/critica/{id}",
     *     tags={"Critiques"},
     *     operationId="updateCritica",
     *     summary="Actualitza la critica ja existent",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Id agrupacio a modificar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *           format="int64"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id del event",
     *         in="query",
     *         name="event_id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id del usuari",
     *         in="query",
     *         name="usuari_id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Terra",
     *         in="query",
     *         name="terra",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Espai",
     *         in="query",
     *         name="espai",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *     @OA\Parameter(
     *         description="Musica",
     *         in="query",
     *         name="musica",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *  @OA\Parameter(
     *         description="Opinio",
     *         in="query",
     *         name="opinio",
     *         required=true,
     *         @OA\Schema(
     *         )
     *     ),
     *  @OA\Parameter(
     *         description="Estrellas",
     *         in="query",
     *         name="estrellas",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
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
    function updateCritica(Request $request, $id)
    {
        $critica = Critica::find($id);
        $critica->update($request->all());

        return $critica;
    }
        /**
    * @OA\Post(
    *   path="/api/critica",
    *   tags={"Critiques"},
    *   summary="Inserir una nova critica.",
    *   @OA\Parameter(
    *     name="event_id",
    *     description="",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="usuari_id",
    *     description="",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="terra",
    *     description="",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="espai",
    *     description="",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="musica",
    *     description="",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="opinio",
    *     description="",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="estrellas",
    *     description="",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna la critica que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearCritica(Request $request)
    {
        $critica = new Critica;
        $critica->event_id = $request->event_id;
        $critica->usuari_id = $request->usuari_id;
        $critica->terra = $request->terra;
        $critica->espai = $request->espai;
        $critica->musica = $request->musica;
        $critica->opinio = $request->opinio;
        $critica->estrelles = $request->estrelles;
        $critica->save();

        return $critica;
    }
          /**
     * @OA\Delete(
     *     path="/api/critica/{id}",
     *     tags={"Critiques"},
     *     summary="Eliminar una critica.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Critica a eliminar",
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
     *         description="Critica eliminada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarCritica($id)
    {
        $critica = Critica::find($id);
        $critica->delete();
        return $critica;
    }
}
