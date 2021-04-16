<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuaris', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('entitat_id');
            $table->foreign('entitat_id')->references('id')->on('entitats');
            $table->integer('persona_id');
            $table->foreign('persona_id')->references('id')->on('personas');
            $table->string('nickname', 100);
            $table->string('contrasenya', 100);
            $table->string('email', 100);
            $table->string('descripcio', 100)->nullable();
            $table->string('imagen', 100);
            $table->integer('idioma');
            $table->integer('genere');
            $table->integer('pais');
            $table->integer('vacunaCovid');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuaris');
    }
}
