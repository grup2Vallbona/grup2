<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('usuari_id');
            $table->foreign('usuari_id')->references('id')->on('usuaris');
            $table->integer('ball_id');
            $table->foreign('ball_id')->references('id')->on('tipus_balls');
            $table->integer('premi_id');
            $table->foreign('premi_id')->references('id')->on('premis');
            $table->integer('pais');
            $table->integer('provincia');
            $table->integer('municipi');
            $table->integer('participacioTipus');
            $table->string('titol', 100);
            $table->string('subtitol', 100);
            $table->string('carrer', 100);
            $table->string('descripcio', 100);
            $table->string('tipusMusica', 100);
            $table->date('data');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
