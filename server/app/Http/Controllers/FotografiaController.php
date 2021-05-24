<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Fotografia;

class FotografiaController extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
        /**
     * @OA\Get(
     *   path="/api/fotografias",
     *   tags={"Fotografies"},
     *   summary="Veure totes les fotgrafies.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna totes les fotografies.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getFotografias()
    {
        return Fotografia::all();
    }
           /**
     * @OA\Get(
     *     path="/api/fotografia/{id}",
     *     tags={"Fotografies"},
     *     summary="Veure la fotografia desitjada.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Fotografia per id",
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
     *         description="Fotografia amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getFotografia(Request $request, $id)
    {
        $foto = Fotografia::all();
        $foto = $foto->firstWhere('id', $id);
        return $foto;
    }
    /**
     * @OA\Post(
     *     path="/api/fotografia/{id}",
     *     tags={"Fotografies"},
     *     operationId="updateFotografia",
     *     summary="Actualitza la fotografia ja existent",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Id fotografia a modificar",
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
     *         required=false,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Nom",
     *         in="query",
     *         name="nom",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Fotografia modificada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function updateFotografia(Request $request, $id)
    {
        $foto = Fotografia::find($id);
        $foto->update($request->all());

        return $foto;
    }
        /**
    * @OA\Post(
    *   path="/api/fotografia",
    *   tags={"Fotografies"},
    *   summary="Inserir una nova fotografia.",
    *   @OA\Parameter(
    *     name="event_id",
    *     description="Id del event",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="nom",
    *     description="nom de la fotografia",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna la fotografia que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearFotografia(Request $request)
    {
        $foto = new Fotografia;
        $foto->nom = $request->nom;
        $foto->event_id = $request->event_id;
        $foto->save();

        return $foto;
    }
          /**
     * @OA\Delete(
     *     path="/api/fotografia/{id}",
     *     tags={"Fotografies"},
     *     summary="Eliminar una fotografia.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Fotografia a eliminar",
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
     *         description="Fotografia eliminada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarFotografia($id)
    {
        $foto = Fotografia::find($id);
        $foto->delete();
        return $foto;
    }
}
