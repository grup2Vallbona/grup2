<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePertanyGrupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pertany_grups', function (Blueprint $table) {
            $table->integer('agrupacio_id');
            $table->foreign('agrupacio_id')->references('id')->on('agrupacios');
            $table->integer('usuari_id');
            $table->foreign('usuari_id')->references('id')->on('usuaris');
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
        Schema::dropIfExists('pertany_grups');
    }
}
