<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Gent_ensenyada;
use App\Models\Persona;

class GentEnsenyadaController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
        /**
     * @OA\Get(
     *   path="/api/getGentensenyadas",
     *   tags={"Gent Ensenyada"},
     *   summary="Veure totes les persones ensenyades.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna totes les persones ensenyades.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getGent_ensenyadas()
    {
        return Gent_ensenyada::all();
    }
        /**
    * @OA\Post(
    *   path="/api/gentensenyada",
    *   tags={"Gent Ensenyada"},
    *   summary="Inserir gent que ha estat ensenyada.",
    *   @OA\Parameter(
    *     name="ballari_id",
    *     description="Id del ballari",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="professor_id",
    *     description="Id del  professor",
        *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna la gent ensenyada que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    
    function gent_ensenyada(Request $request)
    {
        $pBallari = Persona::find($request->ballari_id);
        $pProfessor = Persona::find($request->professor_id);
        $gentEns = new Gent_ensenyada();
        
        $gentEns->ballari()->associate($pBallari);
        $gentEns->professor()->associate($pProfessor);
        $gentEns->save();
        
        return $gentEns;
    }
}
