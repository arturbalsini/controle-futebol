<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJogadorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jogadors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nome', 150);
            $table->integer('ataque');
            $table->integer('defesa');
            $table->integer('fisico');
            $table->integer('drible');
            $table->integer('chute');
            $table->integer('passe');
            $table->bigInteger('id_time')->nullable()->unsigned();
            $table->bigInteger('id_posicao')->unsigned();
            $table->foreign('id_time')->references('id')->on('times');
            $table->foreign('id_posicao')->references('id')->on('posicaos');
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
        Schema::dropIfExists('jogadors');
    }
}
