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
            $table->integer('ballari')->nullable();
            $table->integer('music')->nullable();
            $table->integer('professor')->nullable();
            $table->integer('especialitatsProfessor')->nullable();
            $table->string('rol', 100)->nullable();
            $table->string('instrument', 100)->nullable();
            $table->date('dataNaixementBallari')->nullable();
            $table->date('iniciProfessorat')->nullable();
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
