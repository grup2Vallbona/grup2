<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePertanyenBallarisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pertanyen_ballaris', function (Blueprint $table) {
            $table->integer('entitat_id');
            $table->foreign('entitat_id')->references('id')->on('entitats');
            $table->integer('ballari_id');
            $table->foreign('ballari_id')->references('id')->on('personas');
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
        Schema::dropIfExists('pertanyen_ballaris');
    }
}
