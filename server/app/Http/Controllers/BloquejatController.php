<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Bloquejat;
use App\Models\Persona;
use App\Models\Usuari;

class BloquejatController extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
     /**
     * @OA\Get(
     *     path="/api/bloquejats",
     *     tags={"Bloquejats"},
     *     summary="Veure tots els usuaris bloquejats",
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
    function getBloquejats()
    {
        return Bloquejat::all();
    }
    /**
    * @OA\Post(
    *   path="/api/bloquejar",
    *   tags={"Bloquejats"},
    *   summary="Inserir un nou bloquejat.",
    *   @OA\Parameter(
    *     name="bloquejat_id",
    *     description="id del bloquejat",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="bloquejador_id",
    *     description="id de la persona",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna l'usuari que hem bloquejat.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function bloquejar(Request $request)
    {
        $pBloquejada = Usuari::find($request->bloquejat_id);
        $pBloquejadora = Usuari::find($request->bloquejador_id);
        $block = new Bloquejat();
             
        $block->bloquejat()->associate($pBloquejada);
        $block->bloquejador()->associate($pBloquejadora);
        $block->save();
        
        return $block;
    }

    function getBloquejatsId($id){
        $bloquejat = Bloquejat::select('bloquejats.*', 'usuaris.*')
                                ->join('usuaris', 'bloquejats.bloquejat_id', '=', 'usuaris.id')
                                ->where('bloquejador_id', $id)
                                ->get();
        return $bloquejat;


      

    }


    function getBloquejadorsId($id){
        $bloquejador = Bloquejat::select('bloquejats.*', 'usuaris.*')
                                ->join('usuaris', 'bloquejats.bloquejador_id', '=', 'usuaris.id')
                                ->where('bloquejat_id', $id)
                                ->get();
        return $bloquejador;


      

    }

    function deleteBloquejador($idseguit, $idseguidor){
        $bloquejatBloquejador = Bloquejat::where('bloquejat_id', '=', $idseguit)
                                        ->where('bloquejador_id', '=', $idseguidor)
                                        ->delete();
        
        return $bloquejatBloquejador;
    }
}
