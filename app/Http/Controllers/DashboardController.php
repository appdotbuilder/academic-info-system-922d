<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     */
    public function index()
    {
        $stats = [
            'totalUsers' => User::count(),
            'totalStudents' => User::where('academic_year', '!=', null)->count(),
            'totalLecturers' => User::where('nip_nim', 'like', '19%')->count(),
            'totalAdmins' => User::where('nip_nim', 'like', 'ADM%')->orWhere('nip_nim', 'like', 'SA%')->orWhere('nip_nim', 'like', 'AA%')->count(),
        ];

        return Inertia::render('dashboard', [
            'stats' => $stats,
        ]);
    }
}