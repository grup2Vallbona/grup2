<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Diploma;
use Illuminate\Http\Request;

class DiplomaController extends BaseController
{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
        /**
     * @OA\Get(
     *   path="/api/diplomas",
     *   tags={"Diplomas"},
     *   summary="Veure tots els diplomas.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna tots els diplomes.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getDiplomas()
    {
        return Diploma::all();
    }
        /**
     * @OA\Get(
     *     path="/api/diploma/{id}",
     *     tags={"Diplomas"},
     *     summary="Veure el diploma desitjat.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Diploma per id",
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
     *         description="Diploma amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getDiploma(Request $request, $id)
    {
        $diploma = Diploma::all();
        $diploma = $diploma->firstWhere('id', $id);
        return $diploma;
    }
    /**
     * @OA\Put(
     *     path="/api/diploma/{id}",
     *     tags={"Diplomas"},
     *     operationId="updateDiploma",
     *     summary="Actualitza el diploma ja existent",
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
     *         description="Id de l'usuari",
     *         in="query",
     *         name="usuari_id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Titol",
     *         in="query",
     *         name="titol",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Diploma modificatsk",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function updateDiploma(Request $request, $id)
    {
        $diploma = Diploma::find($id);
        $diploma->update($request->all());

        return $diploma;
    }
  /**
    * @OA\Post(
    *   path="/api/diploma",
    *   tags={"Diplomas"},
    *   summary="Inserir un nou diploma.",
    *   @OA\Parameter(
    *     name="usuari_id",
    *     description="Id del usuari",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="titol",
    *     description="Titol del diploma",
        *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el diploma que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearDiploma(Request $request)
    {
        $diploma = new Diploma;
        $diploma->titol = $request->titol;
        $diploma->usuari_id = $request->usuari_id;
        $diploma->save();

        return $diploma;
    }
      /**
     * @OA\Delete(
     *     path="/api/diploma/{id}",
     *     tags={"Diplomas"},
     *     summary="Eliminar un diploma.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Diploma a eliminar",
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
     *         description="Diploma eliminat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarDiploma($id)
    {
        $diploma = Diploma::find($id);
        $diploma->delete();
        return $diploma;
    }
}
