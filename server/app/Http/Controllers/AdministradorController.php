<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Administrador;
use App\Models\AssignacioBall;
use App\Models\Entitat;
use App\Models\Persona;
/**
 * @OA\Info(title="API WeSwing", version="1.0")
 *
 * @OA\Server(url="http://localhost/M14/Projecte_Final/grup2/server/public/index.php")
 */
class AdministradorController extends BaseController
{
    
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
     /**
    * @OA\Get(
    *   path="/api/administradors",
    *   tags={"Administradors"},
    *   summary="Veure tots els administradors.",
    *   @OA\Response(
    *     response=200,
    *     description="Retorna tots els administradors.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function getAdministradors()
    {
        return Administrador::all();
    }

    /**
    * @OA\Post(
    *   path="/api/administrador",
    *   tags={"Administradors"},
    *   summary="Inserir un nou administrador.",
    *   @OA\Parameter(
    *     name="entitat_id",
    *     description="id de l'entitat",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="persona_id",
    *     description="id de la persona",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
     *   @OA\Parameter(
    *     name="tipus",
    *     description="tipus d'administrador",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna l'administrador que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function administrador(Request $request)
    {
        $persona = Persona::find($request->persona_id);
        $entitat = Entitat::find($request->entitat_id);
        $administrador = new Administrador();
        
        $administrador->tipus=$request->tipus;        
        $administrador->persona()->associate($persona);
        $administrador->entitat()->associate($entitat);
        $administrador->save();
        
        return $administrador;
    }
}
