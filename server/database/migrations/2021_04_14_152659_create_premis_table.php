<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePremisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('premis', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('usuari_id')->nullable();
            $table->foreign('usuari_id')->references('id')->on('usuaris');
            $table->string('titol', 100);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('premis');
    }
}
