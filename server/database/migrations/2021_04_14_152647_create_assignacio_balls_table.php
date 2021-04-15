<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssignacioBallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assignacio_balls', function (Blueprint $table) {
            $table->integer('persona_id');
            $table->foreign('persona_id')->references('id')->on('personas');
            $table->integer('ball_id');
            $table->foreign('ball_id')->references('id')->on('tipus_balls');
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
        Schema::dropIfExists('assignacio_balls');
    }
}
