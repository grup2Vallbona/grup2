<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\TipusBall;
use Illuminate\Http\Request;

class TipusBallController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *   path="/api/tipusballs",
     *   tags={"Tipus de Bll"},
     *   summary="Veure tots els tipus de ball.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna tots els tipus de ball.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getTipusBalls()
    {
        return TipusBall::all();
    }
    /**
     * @OA\Get(
     *     path="/api/tipusball/{id}}",
     *     tags={"Tipus de Bll"},
     *     summary="Veure el tipus de ball desitjat.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Tipus de ball per id",
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
     *         description="ATipus de ball amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getTipusBall(Request $request, $id)
    {
        $tipusB = TipusBall::all();
        $tipusB = $tipusB->firstWhere('id', $id);
        return $tipusB;
    }
     /**
     * @OA\Post(
     *     path="/api/tipusball/{id}",
     *     tags={"Tipus de Bll"},
     *     operationId="updateTipusBall",
     *     summary="Actualitza el tipus de ball ja existent",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Id tipus de ball a modificar",
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
     *         required=false,
     *         @OA\Schema(
     *           type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Tipus de ball modificat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function updateTipusBall(Request $request, $id)
    {
        $tipusB = TipusBall::find($id);
        $tipusB->update($request->all());

        return $tipusB;
    }
    /**
    * @OA\Post(
    *   path="/api/tipusball",
    *   tags={"Tipus de Bll"},
    *   summary="Inserir un nou tipus de ball.",
    *   @OA\Parameter(
    *     name="nom",
    *     description="Nom del tipus de ball",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el tipus de ball que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearTipusBall(Request $request)
    {
        $tipusB = new TipusBall;
        $tipusB->nom = $request->nom;
        $tipusB->save();

        return $tipusB;
    }
    /**
     * @OA\Delete(
     *     path="/api/tipusball/{id}",
     *     tags={"Agrupacions"},
     *     summary="Eliminar un tipus de ball.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Tipus de ball a eliminar",
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
     *         description="Tipus de ball eliminat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarTipusBall($id)
    {
        $tipusB = TipusBall::find($id);
        $tipusB->delete();
        return $tipusB;
    }
}
