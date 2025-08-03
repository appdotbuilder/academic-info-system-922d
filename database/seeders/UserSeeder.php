<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create default super admin user
        User::create([
            'name' => 'Super Administrator',
            'email' => 'superadmin@akademik.edu',
            'password' => Hash::make('password'),
            'nip_nim' => 'SA001',
            'phone' => '081234567890',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);

        // Create sample admin akademik
        User::create([
            'name' => 'Admin Akademik',
            'email' => 'admin@akademik.edu',
            'password' => Hash::make('password'),
            'nip_nim' => 'AA001',
            'phone' => '081234567891',
            'faculty' => 'Fakultas Teknik Informatika',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);

        // Create sample dosen
        User::create([
            'name' => 'Dr. John Doe, M.Kom',
            'email' => 'dosen@akademik.edu',
            'password' => Hash::make('password'),
            'nip_nim' => '198501012020031001',
            'phone' => '081234567892',
            'address' => 'Jl. Akademik No. 123, Jakarta',
            'birth_date' => '1985-01-01',
            'gender' => 'male',
            'faculty' => 'Fakultas Teknik Informatika',
            'program_study' => 'Teknik Informatika',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);

        // Create sample mahasiswa
        User::create([
            'name' => 'Jane Smith',
            'email' => 'mahasiswa@akademik.edu',
            'password' => Hash::make('password'),
            'nip_nim' => '20210001',
            'phone' => '081234567893',
            'address' => 'Jl. Mahasiswa No. 456, Jakarta',
            'birth_date' => '2002-05-15',
            'gender' => 'female',
            'academic_year' => '2021/2022',
            'faculty' => 'Fakultas Teknik Informatika',
            'program_study' => 'Teknik Informatika',
            'is_active' => true,
            'email_verified_at' => now(),
        ]);

        // Create additional sample users
        User::factory(20)->create();
    }
}