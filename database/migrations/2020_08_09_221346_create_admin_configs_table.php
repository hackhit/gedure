<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminConfigsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('admin_configs', function (Blueprint $table) {
			$table->id();
			$table->bigInteger('user_id');
			$table->boolean('registros_ver')->default(0);
			$table->boolean('user_ver')->default(0);
			$table->boolean('user_modify')->default(0);
			$table->boolean('gedure_control')->default(0);
			$table->boolean('upload_boletas')->default(0);
			$table->boolean('upload_matricula')->default(0);
			$table->boolean('post_modify')->default(0);
			$table->boolean('post_delete_other')->default(0);
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
		Schema::dropIfExists('admin_configs');
	}
}
