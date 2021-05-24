<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Entitat;
use Illuminate\Http\Request;

class EntitatController extends BaseController
{
      /**
     * @OA\Get(
     *   path="/api/entitats",
     *   tags={"Entitats"},
     *   summary="Veure totes les entitats.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna totes les entitats.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getEntitats()
    {
        return Entitat::all();
    }

    /**
     * @OA\Get(
     *     path="/api/entitat/{id}",
     *     tags={"Entitats"},
     *     summary="Veure l'entitat desitjada.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Entitat per id",
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
     *         description="Entitat amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getEntitat(Request $request, $id)
    {
        $entitat = Entitat::all();
        $entitat = $entitat->firstWhere('id', $id);
        return $entitat;
    }
     /**
     * @OA\Get(
     *     path="/api/entitats/ultima",
     *     tags={"Entitats"},
     *     summary="Veure l'ultima entitat inserida.",
     *     description="",
     *
     *     @OA\Response(
     *         response=200,
     *         description="Ultima entitat inserida",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getEntitatUltima(){
        $entitat = Entitat::all();
        $entitat = $entitat->last();
        return $entitat;
       
    }
    /**
     * @OA\Post(
     *     path="/api/entitat/{id}",
     *     tags={"Entitats"},
     *     operationId="updateEntitat",
     *     summary="Actualitza l'entitat ja existent",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Id entitat a modificar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *           format="int64"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Escola",
     *         in="query",
     *         name="escola",
     *         required=false,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Marca",
     *         in="query",
     *         name="marca",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
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
     *         description="Entitat modificada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function updateEntitat(Request $request, $id)
    {
        $entitat = Entitat::find($id);
        $entitat->update($request->all());

        return $entitat;
    }
    /**
    * @OA\Post(
    *   path="/api/entitat",
    *   tags={"Entitats"},
    *   summary="Inserir una nova entitat.",
    *   @OA\Parameter(
    *     name="escola",
    *     description="",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="marca",
    *     description="",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="nom",
    *     description="",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna l'entitat que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearEntitat(Request $request)
    {
        $entitat = new Entitat;
        $entitat->escola = $request->escola;
        $entitat->marca = $request->marca;
        $entitat->nom = $request->nom;
        $entitat->save();

        return $entitat;
    }
    /**
     * @OA\Delete(
     *     path="/api/entitat/{id}",
     *     tags={"Entitats"},
     *     summary="Eliminar una entitat.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Entitat a eliminar",
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
     *         description="Entitat eliminada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarEntitat($id)
    {
        $entitat = Entitat::find($id);
        $entitat->delete();
        return $entitat;
    }

  
}
