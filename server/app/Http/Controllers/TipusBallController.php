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
    //
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function getTipusBalls()
    {
        return TipusBall::all();
    }
    function getTipusBall(Request $request, $id)
    {
        $tipusB = TipusBall::all();
        $tipusB = $tipusB->firstWhere('id', $id);
        return $tipusB;
    }
    function updateTipusBall(Request $request, $id)
    {
        $tipusB = TipusBall::find($id);
        $tipusB->update($request->all());

        return $tipusB;
    }
    function crearTipusBall(Request $request)
    {
        $tipusB = new TipusBall;
        $tipusB->nom = $request->nom;
        $tipusB->save();

        return $tipusB;
    }
    function eliminarTipusBall($id)
    {
        $tipusB = TipusBall::find($id);
        $tipusB->delete();
        return $tipusB;
    }
}
