<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdministradorController;
use App\Http\Controllers\AgrupacioController;
use App\Http\Controllers\AssignacioBallController;
use App\Http\Controllers\AssistentController;
use App\Http\Controllers\BloquejatController;
use App\Http\Controllers\CriticaController;
use App\Http\Controllers\DiplomaController;
use App\Http\Controllers\EnsenyançaEventController;
use App\Http\Controllers\EntitatController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FotografiaController;
use App\Http\Controllers\GentEnsenyadaController;
use App\Http\Controllers\MusicEventController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\PertanyenBallariController;
use App\Http\Controllers\PertanyenProfessorController;
use App\Http\Controllers\PertanyGrupController;
use App\Http\Controllers\PremiController;
use App\Http\Controllers\SeguitController;
use App\Http\Controllers\TipusBallController;
use App\Http\Controllers\UsuariController;

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
// ----------------- ADMINISTRADOR  -----------------
Route::get('administradors', [AdministradorController::class, "getAdministradors"]);

// ----------------- AGRUPACIONS -----------------
Route::get('agrupacions', [AgrupacioController::class, "getAgrupacions"]);

// ----------------- ASSIGNACIO BALL -----------------
Route::get('assignacioballs', [AssignacioBallController::class, "getAssignacioBalls"]);

// ----------------- ASSISTENT -----------------
Route::get('assistents', [AssistentController::class, "getAssistents"]);

// ----------------- BLOQUEJAT -----------------
Route::get('bloquejats', [BloquejatController::class, "getBloquejats"]);

// ----------------- CRITICA -----------------
Route::get('criticas', [CriticaController::class, "getCriticas"]);

// ----------------- DIPLOMA -----------------
Route::get('diplomas', [DiplomaController::class, "getDiplomas"]);

// ----------------- ENSENYANÇA EVENT -----------------
Route::get('ensenyançaevents', [EnsenyançaEventController::class, "getEnsenyança_events"]);

// ----------------- EVENT ----------------- 
Route::get('events', [EventController::class, "getUsuaris"]);
Route::get('event/{id}', [EventController::class, "getUsuari"]);
Route::put('event/{id}', [EventController::class, "updateUsuari"]);
Route::post('event', [EventController::class, "crearUsuari"]);
Route::delete('event/{id}', [EventController::class, "eliminarUsuari"]);

// ----------------- FOTOGRAFIA -----------------
Route::get('fotografias', [FotografiaController::class, "getFotografias"]);

// ----------------- GENT ENSENYADA -----------------
Route::get('gentensenyadas', [GentEnsenyadaController::class, "getGent_ensenyadas"]);

// ----------------- MUSIC EVENT -----------------
Route::get('musicevents', [MusicEventController::class, "getMusic_events"]);

// ----------------- PERTANYEN BALLARI -----------------
Route::get('pertanyenballarins', [PertanyenBallariController::class, "getPertanyen_ballarins"]);

// ----------------- PERTANYEN PROFESSOR -----------------
Route::get('pertanyenprofessors', [PertanyenProfessorController::class, "getPertanyen_professors"]);

// ----------------- PERTANY GRUP -----------------
Route::get('pertanygrups', [PertanyGrupController::class, "getPertany_grups"]);

// ----------------- PREMI -----------------
Route::get('premis', [PremiController::class, "getPremis"]);

// ----------------- SEGUIT -----------------
Route::get('seguits', [SeguitController::class, "getSeguits"]);

// ----------------- TIPUS BALL -----------------
Route::get('tipusballs', [TipusBallController::class, "getTipusBalls"]);

// ----------------- USUARIS -----------------
Route::get('usuaris', [UsuariController::class, "getUsuaris"]);
Route::get('usuari/{id}', [UsuariController::class, "getUsuari"]);
Route::put('usuari/{id}', [UsuariController::class, "updateUsuari"]);
Route::post('usuari', [UsuariController::class, "crearUsuari"]);
Route::delete('usuari/{id}', [UsuariController::class, "eliminarUsuari"]);

 // ----------------- PERSONAS -----------------
Route::get('personas', [PersonaController::class, "getPersonas"]);
Route::get('persona/{id}', [PersonaController::class, "getPersona"]);
Route::put('persona/{id}', [PersonaController::class, "updatePersona"]);
Route::post('persona', [PersonaController::class, "crearPersona"]);
Route::delete('persona/{id}', [PersonaController::class, "eliminarPersona"]);

// ----------------- ENTITATS -----------------
Route::get('entitats', [EntitatController::class, "getEntitats"]);
Route::get('entitat/{id}', [EntitatController::class, "getEntitat"]);
Route::put('entitat/{id}', [EntitatController::class, "updateEntitat"]);
Route::post('entitat', [EntitatController::class, "crearEntitat"]);
Route::delete('entitat/{id}', [EntitatController::class, "eliminarEntitat"]);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
