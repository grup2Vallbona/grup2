<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Seguit;
use App\Models\Usuari;

class SeguitController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
     /**
     * @OA\Get(
     *     path="/api/seguits",
     *     tags={"Seguidors"},
     *     summary="Veure tots els usuaris seguits",
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
    function getSeguits()
    {
        return Seguit::all();
    }
     /**
     * @OA\Get(
     *     path="/api/seguit/{id}",
     *     tags={"Seguidors"},
     *     summary="Veure el seguidor desitjada.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Seguidor per id",
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
     *         description="Seguidor amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getSeguitsId($id)
    {
        $seguit = Seguit::all();
        $seguit = $seguit->where('seguidor_id', $id);
        return $seguit;
    }
    /**
    * @OA\Post(
    *   path="/api/seguir",
    *   tags={"Seguidors"},
    *   summary="Inserir un nou seguidor.",
    *   @OA\Parameter(
    *     name="seguit_id",
    *     description="id del seguit",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="seguidor_id",
    *     description="id de la persona",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna l'usuari que hem seguit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function seguir(Request $request)
    {
        $pSeguida = Usuari::find($request->seguit_id);
        $pSeguidor = Usuari::find($request->seguidor_id);
        //  $pSeguida = Persona::find(2);
        $follow = new Seguit();
        // return $pSeguida;  
        $follow->seguit()->associate($pSeguida);
        $follow->seguidor()->associate($pSeguidor);
        $follow->save();
       
         return $follow;
    }
}
