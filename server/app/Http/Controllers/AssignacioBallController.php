<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\AssignacioBall;
use App\Models\Persona;
use App\Models\TipusBall;

class AssignacioBallController extends BaseController
{
  
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
        /**
     * @OA\Get(
     *     path="/api/assignacioballs",
     *     tags={"Assignacions Ball"},
     *     summary="Veure totes les assignacions",
     *     description="",
     *
     *     @OA\Response(
     *         response=200,
     *         description="Assignacio mostrada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getAssignacioBalls()
    {
        return AssignacioBall::all();
    }
    /**
    * @OA\Post(
    *   path="/api/persona/ball",
    *   tags={"Assignacions Ball"},
    *   summary="Assignar un ball a una persona.",
    *   @OA\Parameter(
    *     name="persona_id",
    *     description="Id de la persona",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="ball_id",
    *     description="id del ball",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el ball asignat.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function assignacioBall(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $tipusball = TipusBall::find($request->ball_id);
        $assignacioBall = new AssignacioBall();
        
        
        $assignacioBall->persona()->associate($persona);
        $assignacioBall->ball()->associate($tipusball);

        $assignacioBall->save();
        
        return $assignacioBall;
    }
}
