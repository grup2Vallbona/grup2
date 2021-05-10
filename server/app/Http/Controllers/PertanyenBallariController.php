<?php

namespace App\Http\Controllers;

use App\Models\Entitat;
use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Pertanyen_ballari;
use Faker\Provider\ar_JO\Person;

class PertanyenBallariController extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *   path="/api/pertanyenballarins",
     *   tags={"Ballarins"},
     *   summary="Veure totes els ballarins.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna tots els ballarins.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getPertanyen_ballarins()
    {
        return Pertanyen_ballari::all();
    }
    /**
    * @OA\Post(
    *   path="/api/pertanyenballari",
    *   tags={"Ballarins"},
    *   summary="Inserir una nou ballari.",
    *   @OA\Parameter(
    *     name="entitat_id",
    *     description="Id de l'entitat",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="ballari_id",
    *     description="Id del ballari",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el ballari que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function pertanyen_ballari(Request $request)
    {
        $ballari = Persona::find($request->ballari_id);
        $entitat = Entitat::find($request->entitat_id);
        $pertanyB = new Pertanyen_ballari();
            
        $pertanyB->ballari()->associate($ballari);
        $pertanyB->entitat()->associate($entitat);
        $pertanyB->save();
        
        return $pertanyB;
    }
}
