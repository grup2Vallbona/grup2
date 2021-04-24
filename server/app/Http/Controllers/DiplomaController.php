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
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getDiplomas()
    {
        return Diploma::all();
    }
    function getDiploma(Request $request, $id)
    {
        $diploma = Diploma::all();
        $diploma = $diploma->firstWhere('id', $id);
        return $diploma;
    }
    function updateDiploma(Request $request, $id)
    {
        $diploma = Diploma::find($id);
        $diploma->update($request->all());

        return $diploma;
    }
    function crearDiploma(Request $request)
    {
        $diploma = new Diploma;
        $diploma->titol = $request->titol;
        $diploma->usuari_id = $request->usuari_id;
        $diploma->save();

        return $diploma;
    }
    function eliminarDiploma($id)
    {
        $diploma = Diploma::find($id);
        $diploma->delete();
        return $diploma;
    }
}
