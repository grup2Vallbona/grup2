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
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getFotografias()
    {
        return Fotografia::all();
    }
    function getFotografia(Request $request, $id)
    {
        $foto = Fotografia::all();
        $foto = $foto->firstWhere('id', $id);
        return $foto;
    }
    function updateFotografia(Request $request, $id)
    {
        $foto = Fotografia::find($id);
        $foto->update($request->all());

        return $foto;
    }
    function crearFotografia(Request $request)
    {
        $foto = new Fotografia;
        $foto->nom = $request->titol;
        $foto->event_id = $request->event_id;
        $foto->save();

        return $foto;
    }
    function eliminarFotografia($id)
    {
        $foto = Fotografia::find($id);
        $foto->delete();
        return $foto;
    }
}
