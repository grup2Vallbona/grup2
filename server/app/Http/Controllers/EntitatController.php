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
    function getEntitat(Request $request, $id)
    {
        $entitat = Entitat::all();
        $entitat = $entitat->firstWhere('id', $id);
        return $entitat;
    }
    function getEntitatUltima(){
        $entitat = Entitat::all();
        $entitat = $entitat->last();
        return $entitat;
       
    }
    function updateEntitat(Request $request, $id)
    {
        $entitat = Entitat::find($id);
        $entitat->update($request->all());

        return $entitat;
    }
    function crearEntitat(Request $request)
    {
        $entitat = new Entitat;
        $entitat->escola = $request->escola;
        $entitat->marca = $request->marca;
        $entitat->nom = $request->nom;
        $entitat->save();

        return $entitat;
    }
    function eliminarEntitat($id)
    {
        $entitat = Entitat::find($id);
        $entitat->delete();
        return $entitat;
    }

  
}
