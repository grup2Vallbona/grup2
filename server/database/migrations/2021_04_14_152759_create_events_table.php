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
            $table->unsignedBigInteger('usuari_id');
            $table->foreign('usuari_id')->references('id')->on('usuaris');
            $table->unsignedBigInteger('ball_id');
            $table->foreign('ball_id')->references('id')->on('tipus_balls');
            $table->unsignedBigInteger('premi_id');
            $table->foreign('premi_id')->references('id')->on('premis');
            $table->string('latitud',50);
            $table->string('longitud',50);
            $table->integer('participacioTipus');
            $table->string('titol', 100);
            $table->string('subtitol', 100);
            $table->string('descripcio', 100);
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
