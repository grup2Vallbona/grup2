<?php

namespace App\Http\Controllers;

use App\Models\Agrupacio;
use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Pertany_grup;

class PertanyGrupController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *   path="/api/pertanygrups",
     *   tags={"Pertany Grups"},
     *   summary="Veure qui pertany a un grup.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna qui pertany a un grup.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    
    function getPertany_grups()
    {
        return Pertany_grup::all();
    }
    /**
    * @OA\Post(
    *   path="/api/pertanygrup",
    *   tags={"Pertany Grups"},
    *   summary="Inserir una nova persona a un grup.",
    *   @OA\Parameter(
    *     name="agrupacio_id",
    *     description="Id de l'agrupacio",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="usuari_id",
    *     description="Id del usuari",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna la persona que hem inserit al grup.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function pertany_grup(Request $request)
    {
        $usuari = Persona::find($request->usuari_id);
        $agrupacio = Agrupacio::find($request->agrupacio_id);
        $pertanyG = new Pertany_grup();
           
        $pertanyG->usuari()->associate($usuari);
        $pertanyG->agrupacio()->associate($agrupacio);
        $pertanyG->save();
        
        return $pertanyG;
    }
}
