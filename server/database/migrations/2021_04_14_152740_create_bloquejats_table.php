<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBloquejatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bloquejats', function (Blueprint $table) {
            
            $table->timestamps();
            $table->integer('bloquejat_id');
            $table->foreign('bloquejat_id')->references('id')->on('usuaris');
            $table->integer('bloquejador_id');
            $table->foreign('bloquejador_id')->references('id')->on('usuaris');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bloquejats');
    }
}
