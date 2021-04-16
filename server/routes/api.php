<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('usuaris', [ApiController::class, "getUsuaris"]);
Route::get('usuari/{id}', [ApiController::class, "getUsuari"]);
Route::put('usuari/{id}', [ApiController::class, "updateUsuari"]);
Route::post('usuari/', [ApiController::class, "crearUsuari"]);
Route::delete('usuari/{id}', [ApiController::class, "eliminarUsuari"]);


Route::get('personas', [ApiController::class, "getPersonas"]);
Route::get('persona/{id}', [ApiController::class, "getPersona"]);
Route::put('persona/{id}', [ApiController::class, "updatePersona"]);
Route::post('persona/', [ApiController::class, "crearPersona"]);
Route::delete('persona/{id}', [ApiController::class, "eliminarPersona"]);


Route::get('entitats', [ApiController::class, "getEntitats"]);
Route::get('entitat/{id}', [ApiController::class, "getEntitat"]);
Route::put('entitat/{id}', [ApiController::class, "updateEntitat"]);
Route::post('entitat/', [ApiController::class, "crearEntitat"]);
Route::delete('entitat/{id}', [ApiController::class, "eliminarEntitat"]);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
