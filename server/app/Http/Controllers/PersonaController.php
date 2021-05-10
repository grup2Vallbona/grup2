<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Persona;
use App\Models\AssignacioBall;
use App\Models\TipusBall;

class PersonaController extends BaseController
{
    /**
     * @OA\Get(
     *   path="/api/personas",
     *   tags={"Persones"},
     *   summary="Veure totes les persones.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna totes les persones.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getPersonas()
    {
        return Persona::all();
    }

    /**
     * @OA\Get(
     *     path="/api/persona/{id}",
     *     tags={"Persones"},
     *     summary="Veure la persona desitjada.",
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
    function getPersona(Request $request, $id)
    {
        $persona = Persona::all();
        $persona = $persona->firstWhere('id', $id);
        return $persona;
    }
    /**
     * @OA\Get(
     *     path="/api/persona/ultima",
     *     tags={"Persones"},
     *     summary="Veure l'ultima persona inserida.",
     *     description="",
     *
     *     @OA\Response(
     *         response=200,
     *         description="Ultima persona inserida",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getPersonaUltima()
    {
        $persona = Persona::all();
        $persona = $persona->last();
        return $persona;
    }

    /**
     * @OA\Post(
     *     path="/api/persona/{id}",
     *     tags={"Persones"},
     *     operationId="updatePersona",
     *     summary="Actualitza la pesona ja existent",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Id persona a modificar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *           format="int64"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Ballari",
     *         in="query",
     *         name="ballari",
     *         required=false,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Music",
     *         in="query",
     *         name="music",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="professor",
     *         in="query",
     *         name="professor",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *      @OA\Parameter(
     *         description="Rol",
     *         in="query",
     *         name="rol",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *      *   @OA\Parameter(
     *         description="Instrument",
     *         in="query",
     *         name="instrument",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *      *   @OA\Parameter(
     *         description="Data Naixement Ballari",
     *         in="query",
     *         name=" dataNaixementBallari ",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *      *   @OA\Parameter(
     *         description="Inici Professorat",
     *         in="query",
     *         name="iniciProfessorat",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Persona modificada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function updatePersona(Request $request, $id)
    {
        $persona = Persona::find($id);
        $persona->update($request->all());

        return $persona;
    }
    /**
    * @OA\Post(
    *   path="/api/persona",
    *   tags={"Persones"},
    *   summary="Inserir una nova persona.",
    *   @OA\Parameter(
    *     name="ballari",
    *     description="ballari",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="music",
    *     description="music",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="professor",
    *     description="professor",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="rol",
    *     description="rol",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="instrument",
    *     description="instrument",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="dataNaixementBallari",
    *     description="dataNaixementBallari",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="iniciProfessorat",
    *     description="iniciProfessorat",
    *     required=false,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna la persona que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function crearPersona(Request $request)
    {
        $persona = new Persona;
        $persona->ballari = $request->ballari;
        $persona->music = $request->music;
        $persona->professor = $request->professor;
        $persona->rol = $request->rol;
        $persona->instrument = $request->instrument;
        $persona->dataNaixementBallari = $request->dataNaixementBallari;
        $persona->iniciProfessorat = $request->iniciProfessorat;
        $persona->save();

        return $persona;
    }
        /**
     * @OA\Delete(
     *     path="/api/persona/{id}",
     *     tags={"Persones"},
     *     summary="Eliminar una persona.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Persona a eliminar",
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
     *         description="Persona eliminada",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarPersona($id)
    {
        $persona = Persona::find($id);
        $persona->delete();
        return $persona;
    }
}
