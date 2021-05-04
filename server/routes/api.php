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
use App\Models\Administrador;
use App\Models\AssignacioBall;
use Illuminate\Support\Facades\Auth;

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
Route::post('administrador', [AdministradorController::class, "administrador"]);
// ----------------- AGRUPACIONS -----------------
Route::get('agrupacions', [AgrupacioController::class, "getAgrupacions"]);
Route::get('agrupacio/{id}', [AgrupacioController::class, "getAgrupacio"]);
Route::put('agrupacio/{id}', [AgrupacioController::class, "updateAgrupacio"]);
Route::post('agrupacio', [AgrupacioController::class, "crearAgrupacio"]);
Route::delete('agrupacio/{id}', [AgrupacioController::class, "eliminarAgrupacio"]);

// ----------------- ASSIGNACIO BALL -----------------
Route::get('assignacioballs', [AssignacioBallController::class, "getAssignacioBalls"]);
Route::post('persona/ball', [AssignacioBallController::class, "assignacioBall"]);

// ----------------- ASSISTENT -----------------
Route::get('assistents', [AssistentController::class, "getAssistents"]);
Route::post('assistent', [AssistentController::class, "assistent"]);

// ----------------- BLOQUEJAT -----------------
Route::get('bloquejats', [BloquejatController::class, "getBloquejats"]);
Route::post('bloquejar', [BloquejatController::class, "bloquejar"]);

// ----------------- CRITICA -----------------
Route::get('criticas', [CriticaController::class, "getCriticas"]);
Route::get('critica/{id}', [CriticaController::class, "getCritica"]);
Route::put('critica/{id}', [CriticaController::class, "updateCritica"]);
Route::post('critica', [CriticaController::class, "crearCritica"]);
Route::delete('critica/{id}', [CriticaController::class, "eliminarCritica"]);

// ----------------- DIPLOMA -----------------
Route::get('diplomas', [DiplomaController::class, "getDiplomas"]);
Route::get('diploma/{id}', [DiplomaController::class, "getDiploma"]);
Route::put('diploma/{id}', [DiplomaController::class, "updateDiploma"]);
Route::post('diploma', [DiplomaController::class, "crearDiploma"]);
Route::delete('diploma/{id}', [DiplomaController::class, "eliminarDiploma"]);

// ----------------- ENSENYANÇA EVENT -----------------
Route::get('ensenyançaevents', [EnsenyançaEventController::class, "getEnsenyança_events"]);
Route::post('ensenyançaevent', [EnsenyançaEventController::class, "ensenyança_event"]);

// ----------------- EVENT ----------------- 
Route::get('events', [EventController::class, "getEvents"]);
Route::get('event/{id}', [EventController::class, "getEvent"]);
Route::put('event/{id}', [EventController::class, "updateEvent"]);
Route::post('event', [EventController::class, "crearEvent"]);
Route::delete('event/{id}', [EventController::class, "eliminarEvent"]);

// ----------------- FOTOGRAFIA -----------------
Route::get('fotografias', [FotografiaController::class, "getFotografias"]);
Route::get('fotografia/{id}', [FotografiaController::class, "getFotografia"]);
Route::put('fotografia/{id}', [FotografiaController::class, "updateFotografia"]);
Route::post('fotografia', [FotografiaController::class, "crearFotografia"]);
Route::delete('fotografia/{id}', [FotografiaController::class, "eliminarFotografia"]);

// ----------------- GENT ENSENYADA -----------------
Route::get('getGentensenyadas', [GentEnsenyadaController::class, "getGent_ensenyadas"]);
Route::post('gentensenyada', [GentEnsenyadaController::class, "gent_ensenyada"]);

// ----------------- MUSIC EVENT -----------------
Route::get('musicevents', [MusicEventController::class, "getMusic_events"]);
Route::post('musicevent', [MusicEventController::class, "music_event"]);

// ----------------- PERTANYEN BALLARI -----------------
Route::get('pertanyenballarins', [PertanyenBallariController::class, "getPertanyen_ballarins"]);
Route::post('pertanyenballari', [PertanyenBallariController::class, "pertanyen_ballari"]);

// ----------------- PERTANYEN PROFESSOR -----------------
Route::get('pertanyenprofessors', [PertanyenProfessorController::class, "getPertanyen_professors"]);
Route::post('pertanyenprofessor', [PertanyenProfessorController::class, "pertanyen_professor"]);

// ----------------- PERTANY GRUP -----------------
Route::get('pertanygrups', [PertanyGrupController::class, "getPertany_grups"]);
Route::post('pertanygrup', [PertanyGrupController::class, "pertany_grup"]);

// ----------------- PREMI -----------------
Route::get('premis', [PremiController::class, "getPremis"]);
Route::get('premi/{id}', [PremiController::class, "getPremi"]);
Route::get('premis/usuari/{id}', [PremiController::class, "getPremisUsuari"]);
Route::put('premi/{id}', [PremiController::class, "updatePremi"]);
Route::post('premi', [PremiController::class, "crearPremi"]);
Route::delete('premi/{id}', [PremiController::class, "eliminarPremi"]);
Route::get('premi/ultim', [PremiController::class, "getPremiUltim"]);

// ----------------- SEGUIT -----------------
Route::get('seguits', [SeguitController::class, "getSeguits"]);
Route::post('seguir', [SeguitController::class, "seguir"]);

// ----------------- TIPUS BALL -----------------
Route::get('tipusballs', [TipusBallController::class, "getTipusBalls"]);
Route::get('tipusball/{id}', [TipusBallController::class, "getTipusBall"]);
Route::put('tipusball/{id}', [TipusBallController::class, "updateTipusBall"]);
Route::post('tipusball', [TipusBallController::class, "crearTipusBall"]);
Route::delete('tipusball/{id}', [TipusBallController::class, "eliminarTipusBall"]);

// ----------------- USUARIS -----------------
Route::get('usuaris', [UsuariController::class, "getUsuaris"]);
// Route::get('usuari/{id}', [UsuariController::class, "getUsuari"]);
Route::get('usuari/{correo}', [UsuariController::class, "getUsuariCorreo"]);
Route::put('usuari/{id}', [UsuariController::class, "updateUsuari"]);
Route::post('usuari', [UsuariController::class, "crearUsuari"]);
Route::delete('usuari/{id}', [UsuariController::class, "eliminarUsuari"]);

 // ----------------- PERSONAS -----------------
Route::get('personas', [PersonaController::class, "getPersonas"]);
Route::get('persona/ultima', [PersonaController::class, "getPersonaUltima"]);
Route::get('persona/{id}', [PersonaController::class, "getPersona"]);
Route::put('persona/{id}', [PersonaController::class, "updatePersona"]);
Route::post('persona', [PersonaController::class, "crearPersona"]);
Route::delete('persona/{id}', [PersonaController::class, "eliminarPersona"]);
Route::get('persona/ultima', [PersonaController::class, "getPersonaUltima"]);


// ----------------- ENTITATS -----------------
Route::get('entitats', [EntitatController::class, "getEntitats"]);
Route::get('entitat/{id}', [EntitatController::class, "getEntitat"]);
Route::put('entitat/{id}', [EntitatController::class, "updateEntitat"]);
Route::post('entitat', [EntitatController::class, "crearEntitat"]);
Route::delete('entitat/{id}', [EntitatController::class, "eliminarEntitat"]);
Route::get('entitats/ultima', [EntitatController::class, "getEntitatUltima"]);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
