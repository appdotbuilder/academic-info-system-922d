<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'nip_nim' => fake()->unique()->numerify('##########'),
            'phone' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'birth_date' => fake()->dateTimeBetween('-60 years', '-18 years')->format('Y-m-d'),
            'gender' => fake()->randomElement(['male', 'female']),
            'academic_year' => fake()->randomElement(['2020/2021', '2021/2022', '2022/2023', '2023/2024']),
            'faculty' => fake()->randomElement([
                'Fakultas Teknik Informatika',
                'Fakultas Ekonomi',
                'Fakultas Hukum',
                'Fakultas Kedokteran',
                'Fakultas Psikologi'
            ]),
            'program_study' => fake()->randomElement([
                'Teknik Informatika',
                'Sistem Informasi',
                'Manajemen',
                'Akuntansi',
                'Hukum',
                'Kedokteran',
                'Psikologi'
            ]),
            'is_active' => true,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    /**
     * Create a student user.
     */
    public function student(): static
    {
        return $this->state(fn (array $attributes) => [
            'nip_nim' => fake()->unique()->numerify('2021####'),
            'academic_year' => '2021/2022',
        ]);
    }

    /**
     * Create a lecturer user.
     */
    public function lecturer(): static
    {
        return $this->state(fn (array $attributes) => [
            'nip_nim' => fake()->unique()->numerify('19########'),
            'academic_year' => null,
        ]);
    }

    /**
     * Create an admin user.
     */
    public function admin(): static
    {
        return $this->state(fn (array $attributes) => [
            'nip_nim' => fake()->unique()->numerify('ADM###'),
            'academic_year' => null,
        ]);
    }
}