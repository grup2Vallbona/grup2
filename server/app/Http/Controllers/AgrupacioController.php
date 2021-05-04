<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Agrupacio;


class AgrupacioController extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *   path="/api/agrupacions",
     *   tags={"Agrupacions"},
     *   summary="Veure totes les agrupacions.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna totes les agrupacions.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getAgrupacions()
    {
        return Agrupacio::all();
    }
       /**
     * @OA\Get(
     *     path="/api/agrupacio/{id}",
     *     tags={"Agrupacions"},
     *     summary="Veure l'agrupacio desitjada.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Agrupacio per id",
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
     *         description="Agrupacio amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getAgrupacio(Request $request, $id)
    {
        $agrup = Agrupacio::all();
        $agrup = $agrup->firstWhere('id', $id);
        return $agrup;
    }

/**
     * @OA\Post(
     *     path="/api/agrupacio/{id}",
     *     tags={"Agrupacions"},
     *     operationId="updateAgrupacio",
     *     summary="Actualitza agrupacio ja existent",
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
     *         description="Nom",
     *         in="query",
     *         name="nom",
     *         required=true,
     *         @OA\Schema(
     *           type="string"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Descripcio",
     *         in="query",
     *         name="descripcio",
     *         required=true,
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
    function updateAgrupacio(Request $request, $id)
    {
        $agrup = Agrupacio::find($id);
        $agrup->update($request->all());

        return $agrup;
    }
    /**
    * @OA\Post(
    *   path="/api/agrupacio",
    *   tags={"Agrupacions"},
    *   summary="Inserir una nova agrupacio.",
    *   @OA\Parameter(
    *     name="nom",
    *     description="Nom de l'agrupacio",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="descripcio",
    *     description="Descripcio de l'agrupacio",
        *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna l'agrupacio que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearAgrupacio(Request $request)
    {
        $agrup = new Agrupacio;
        $agrup->nom = $request->nom;
        $agrup->descripcio = $request->descripcio;
        $agrup->save();

        return $agrup;
    }
      /**
     * @OA\Delete(
     *     path="/api/agrupacio/{id}",
     *     tags={"Agrupacions"},
     *     summary="Eliminar una agrupacio.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Arupacio a eliminar",
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
     *         description="Agrupacio eliminada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarAgrupacio($id)
    {
        $agrup = Agrupacio::find($id);
        $agrup->delete();
        return $agrup;
    }
}
