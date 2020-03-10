<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlumnosDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumnos_data', function (Blueprint $table) {
            $table->char("alumno_id", 10)->charset('utf8');
            $table->integer("alumno_n_lista");
            $table->boolean("alumno_horario_status");
            $table->boolean("alumno_nota_status");
            $table->char("alumno_curso", 10);
            $table->primary("alumno_id");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alumnos_data');
    }
}
