<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('nip_nim')->nullable()->unique()->comment('NIP for staff/lecturer, NIM for student');
            $table->string('phone')->nullable()->comment('Phone number');
            $table->text('address')->nullable()->comment('Full address');
            $table->date('birth_date')->nullable()->comment('Date of birth');
            $table->enum('gender', ['male', 'female'])->nullable()->comment('Gender');
            $table->string('academic_year')->nullable()->comment('Academic year for students');
            $table->string('faculty')->nullable()->comment('Faculty name');
            $table->string('program_study')->nullable()->comment('Program of study');
            $table->boolean('is_active')->default(true)->comment('User active status');
            
            // Add indexes for performance
            $table->index('nip_nim');
            $table->index('faculty');
            $table->index('program_study');
            $table->index(['is_active', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['users_nip_nim_index']);
            $table->dropIndex(['users_faculty_index']);
            $table->dropIndex(['users_program_study_index']);
            $table->dropIndex(['users_is_active_created_at_index']);
            
            $table->dropColumn([
                'nip_nim',
                'phone',
                'address',
                'birth_date',
                'gender',
                'academic_year',
                'faculty',
                'program_study',
                'is_active'
            ]);
        });
    }
};