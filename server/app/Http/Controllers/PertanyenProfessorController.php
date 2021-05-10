<?php

namespace App\Http\Controllers;

use App\Models\Entitat;
use App\Models\Persona;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Pertanyen_professor;

class PertanyenProfessorController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *   path="/api/pertanyenprofessors",
     *   tags={"Professors"},
     *   summary="Veure totes els professors.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna tots els professors.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getPertanyen_professors()
    {
        return Pertanyen_professor::all();
    }
    /**
    * @OA\Post(
    *   path="/api/pertanyenprofessor",
    *   tags={"Professors"},
    *   summary="Inserir una nou professor.",
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
    *     name="professor_id",
    *     description="Id del professor",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el professor que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function pertanyen_professor(Request $request)
    {
        $professor = Persona::find($request->professor_id);
        $entitat = Entitat::find($request->entitat_id);
        $pertanyP = new Pertanyen_professor();
          
        $pertanyP->professor()->associate($professor);
        $pertanyP->entitat()->associate($entitat);
        $pertanyP->save();
        
        return $pertanyP;
    }
}
