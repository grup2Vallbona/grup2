<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Usuari;

use App\Models\Persona;
use Illuminate\Support\Facades\Hash;
use App\Models\Entitat;
use Illuminate\Http\Request;

class UsuariController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * @OA\Get(
     *   path="/api/usuaris",
     *   tags={"Usuaris"},
     *   summary="Veure tots els usuaris.",
     *   @OA\Response(
     *     response=200,
     *     description="Retorna tots els usuaris.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function getUsuaris()
    {
        return Usuari::all();
    }

    /**
     * @OA\Get(
     *     path="/api/usuari/{correo}",
     *     tags={"Usuaris"},
     *     summary="Veure l'usuari desitjat.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="usuari per correu",
     *         in="path",
     *         name="email",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *           format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Usuari amb email seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getUsuariCorreo(Request $request, $email)
    {
        $usuari = Usuari::all();
        $usuari = $usuari->firstWhere('email', $email);
        return $usuari;
    }
    /**
     * @OA\Post(
     *     path="/api/usuari/{id}",
     *     tags={"Usuaris"},
     *     operationId="updateUsuari",
     *     summary="Actualitza l'usuari ja existent",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Id usuari a modificar",
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *           format="int64"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id de l'entitat",
     *         in="query",
     *         name="entitat_id",
     *         required=false,
     *         @OA\Schema(
     *           type="integer"
     *         )
     *     ),
     *   @OA\Parameter(
     *         description="Id de la persona",
     *         in="query",
     *         name="persona_id",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Nickname",
     *         in="query",
     *         name="nickname",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Contrasenya",
     *         in="query",
     *         name="contrasenya",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Email",
     *         in="query",
     *         name="email",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Data de Naixement",
     *         in="query",
     *         name="dataNaixement",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Descripcio",
     *         in="query",
     *         name="descripcio",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Imatge",
     *         in="query",
     *         name="imagen",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Idioma",
     *         in="query",
     *         name="idioma",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *  @OA\Parameter(
     *         description="Idioma",
     *         in="query",
     *         name="idioma",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *  @OA\Parameter(
     *         description="Genere",
     *         in="query",
     *         name="genere",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Pais",
     *         in="query",
     *         name="pais",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Vacuna Covid-19",
     *         in="query",
     *         name="vacunaCovid",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Usuari modificat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function updateUsuari(Request $request, $id)
    {
        $usuari = Usuari::find($id);
        $usuari->update($request->all());

        return $usuari;
    }
    /**
     * @OA\Post(
     *   path="/api/usuari",
     *   tags={"Usuaris"},
     *   summary="Inserir un nou usuari.",
     *   @OA\Parameter(
     *     name="enitat_id",
     *     description="Id de l'entitat",
     *     required=false,
     *     in="query",
     *     @OA\Schema(
     *       type="integer"
     *     )
     *   ),
     *  @OA\Parameter(
     *         description="Id de la persona",
     *         in="query",
     *         name="persona_id",
     *         required=false,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Nickname",
     *         in="query",
     *         name="nickname",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Contrasenya",
     *         in="query",
     *         name="contrasenya",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Email",
     *         in="query",
     *         name="email",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Data de Naixement",
     *         in="query",
     *         name="dataNaixement",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Descripcio",
     *         in="query",
     *         name="descripcio",
     *         required=false,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Imatge",
     *         in="query",
     *         name="imagen",
     *         required=true,
     *         @OA\Schema(
     *           type="string",
     *         )
     *     ),
     *    @OA\Parameter(
     *         description="Idioma",
     *         in="query",
     *         name="idioma",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *  @OA\Parameter(
     *         description="Idioma",
     *         in="query",
     *         name="idioma",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *  @OA\Parameter(
     *         description="Genere",
     *         in="query",
     *         name="genere",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Pais",
     *         in="query",
     *         name="pais",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     * @OA\Parameter(
     *         description="Vacuna Covid-19",
     *         in="query",
     *         name="vacunaCovid",
     *         required=true,
     *         @OA\Schema(
     *           type="integer",
     *         )
     *     ),
     *   @OA\Response(
     *     response=200,
     *     description="Retorna l'usuari que hem inserit.",
     *   ),
     *   @OA\Response(
     *     response="default",
     *     description="S'ha produit un error.",
     *   )
     * )
     */
    function crearUsuari(Request $request)
    {

        $usuari = new Usuari;
        $usuari->entitat_id = $request->entitat_id;
        $usuari->persona_id = $request->persona_id;
        $usuari->nickname = $request->nickname;
        $usuari->contrasenya = Hash::make($request->contrasenya);
        $usuari->email = $request->email;
        $usuari->dataNaixement = $request->dataNaixement;
        $usuari->descripcio = $request->descripcio;
        $usuari->imagen = $request->imagen;
        $usuari->idioma = $request->idioma;
        $usuari->genere = $request->genere;
        $usuari->pais = $request->pais;
        $usuari->vacunaCovid = $request->vacunaCovid;
        $usuari->save();

        return $usuari;
    }

    /**
     * @OA\Delete(
     *     path="/api/usuari/{id}",
     *     tags={"Usuaris"},
     *     summary="Eliminar un usuari.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Usuari a eliminar",
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
     *         description="Usuari eliminat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function eliminarUsuari($id)
    {
        $usuari = Usuari::find($id);
        $usuari->delete();
        return $usuari;
    }

     /**
     * @OA\Get(
     *     path="/api/usuariId/{id}",
     *     tags={"Usuaris"},
     *     summary="Veure l'usuari desitjat.",
     *     description="",
     *
     *   @OA\Parameter(
     *         description="Usuari per id",
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
     *         description="Usuari amb id seleccionat",
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="S'ha produit un error",
     *     )
     * )
     */
    function getUsuari($id)
    {
        $usuari = Usuari::all();
        $usuari = $usuari->firstWhere('id', $id);
        return $usuari;
    }
}
