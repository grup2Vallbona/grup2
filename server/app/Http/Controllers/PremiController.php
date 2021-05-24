<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Premi;

class PremiController extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *   path="/api/premis",
     *   tags={"Premis"},
     *   summary="Veure tots els premis.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna tots els premis.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getPremis()
    {
        return Premi::all();
    }
     /**
     * @OA\Get(
     *     path="/api/premi/{id}",
     *     tags={"Premis"},
     *     summary="Veure el premi desitjat.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Premi per id",
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
     *         description="Premi amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getPremi(Request $request, $id)
    {
        $premi = Premi::all();
        $premi = $premi->firstWhere('id', $id);
        return $premi;
    }
     /**
     * @OA\Get(
     *     path="/api/premis/usuari/{id}",
     *     tags={"Premis"},
     *     summary="Veure el creador d'un premi.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Creador per id",
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
     *         description="Creador del premi",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getPremisUsuari(Request $request, $id)
    {
        $premi = Premi::all();
        $premi = $premi->where('creador_id','=', $id);
        return $premi;
    }
     /**
     * @OA\Post(
     *     path="/api/premi/{id}",
     *     tags={"Premis"},
     *     operationId="updatePremi",
     *     summary="Actualitza el premi ja existent",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Id del premi a modificar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *           format="int64"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id del guanyador",
     *         in="query",
     *         name="guanyador_id",
     *         required=false,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id del creador",
     *         in="query",
     *         name="creador_id",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Titol",
     *         in="query",
     *         name="titol",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Maxims guanyadors",
     *         in="query",
     *         name="maxGuanyador",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Categoria",
     *         in="query",
     *         name="categoria",
     *         required=false,
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
    function updatePremi(Request $request, $id)
    {
        $premi = Premi::find($id);
        $premi->update($request->all());

        return $premi;
    }
    /**
    * @OA\Post(
    *   path="/api/premi",
    *   tags={"Premis"},
    *   summary="Inserir un nou premi.",
    *   @OA\Parameter(
    *     name="guanyador_id",
    *     description="Id del guanyador",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="creador_id",
    *     description="Id del creador",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="titol",
    *     description="Titol del premi",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="maxGuanyadors",
    *     description="Nombre maxim de guanyadors",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="categoria",
    *     description="Categoria",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el premi que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearPremi(Request $request)
    {
        $premi = new Premi;
        $premi->titol = $request->titol;
        $premi->guanyador_id = $request->guanyador_id;
        $premi->creador_id = $request->creador_id;
        $premi->maxGuanyadors = $request->maxGuanyadors;
        $premi->categoria = $request->categoria;
        $premi->save();

        return $premi;
    }
    /**
     * @OA\Delete(
     *     path="/api/premi/{id}",
     *     tags={"Premis"},
     *     summary="Eliminar un premi.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Premi a eliminar",
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
     *         description="Premi eliminat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarPremi($id)
    {
        $premi = Premi::find($id);
        $premi->delete();
        return $premi;
    }
    /**
     * @OA\Get(
     *     path="/api/premis/ultim",
     *     tags={"Premis"},
     *     summary="Veure l'ultim premi inserit.",
     *     description="",
     *
     *     @OA\Response(
     *         response=200,
     *         description="Ultim premi inserit.",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getPremiUltim()
    {
        $premi = Premi::all();
        $premi = $premi->last();
        return $premi;
    }
}
