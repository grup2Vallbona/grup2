<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('ballari');
            $table->integer('music');
            $table->integer('professor');
            $table->integer('especialitatsProfessor');
            $table->string('rol', 100);
            $table->string('instrument', 100);
            $table->date('dataNaixementBallari');
            $table->date('iniciProfessorat');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personas');
    }
}
