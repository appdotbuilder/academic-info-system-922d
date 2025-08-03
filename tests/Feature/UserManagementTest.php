<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserManagementTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        
        // Create sample users
        $this->artisan('db:seed', ['--class' => 'UserSeeder']);
    }

    public function test_users_index_page_loads()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/users');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page->component('users/index'));
    }

    public function test_dashboard_loads_correctly()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/dashboard');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page->component('dashboard'));
    }

    public function test_welcome_page_loads_correctly()
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page->component('welcome'));
    }

    public function test_user_can_view_specific_user()
    {
        $loggedInUser = User::factory()->create();
        $targetUser = User::factory()->create();

        $response = $this->actingAs($loggedInUser)->get("/users/{$targetUser->id}");

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page->component('users/show'));
    }

    public function test_user_academic_identifier_works()
    {
        $user = User::factory()->create([
            'name' => 'John Doe',
            'nip_nim' => '123456'
        ]);

        $this->assertEquals('123456 - John Doe', $user->academic_identifier);

        $userWithoutNip = User::factory()->create([
            'name' => 'Jane Doe',
            'nip_nim' => null
        ]);

        $this->assertEquals('Jane Doe', $userWithoutNip->academic_identifier);
    }

    public function test_user_factory_creates_different_types()
    {
        $student = User::factory()->student()->create();
        $lecturer = User::factory()->lecturer()->create();
        $admin = User::factory()->admin()->create();

        $this->assertStringStartsWith('2021', $student->nip_nim);
        $this->assertStringStartsWith('19', $lecturer->nip_nim);
        $this->assertStringStartsWith('ADM', $admin->nip_nim);
    }
}