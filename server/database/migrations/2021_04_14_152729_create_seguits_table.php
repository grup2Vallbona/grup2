<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeguitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seguits', function (Blueprint $table) {
            $table->integer('seguit_id');
            $table->foreign('seguit_id')->references('id')->on('usuaris');
            $table->integer('seguidor_id');
            $table->foreign('seguidor_id')->references('id')->on('usuaris');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seguits');
    }
}
