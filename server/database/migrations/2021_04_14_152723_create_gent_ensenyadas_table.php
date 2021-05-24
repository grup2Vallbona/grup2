<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGentEnsenyadasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gent_ensenyadas', function (Blueprint $table) {
            $table->unsignedBigInteger('ballari_id');
            $table->foreign('ballari_id')->references('id')->on('personas');
            $table->unsignedBigInteger('professor_id');
            $table->foreign('professor_id')->references('id')->on('personas');
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
        Schema::dropIfExists('gent_ensenyadas');
    }
}
