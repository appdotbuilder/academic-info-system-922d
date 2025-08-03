import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
            roles?: Array<{ name: string; }>;
        };
    };
    stats?: {
        totalUsers: number;
        totalStudents: number;
        totalLecturers: number;
        totalAdmins: number;
    };
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ auth, stats }: Props) {
    const userRole = auth.user?.roles?.[0]?.name || 'user';
    
    const getRoleDisplayName = (role: string) => {
        const roleNames: Record<string, string> = {
            'super_admin': 'Super Administrator',
            'admin_akademik': 'Admin Akademik',
            'dosen': 'Dosen',
            'mahasiswa': 'Mahasiswa',
        };
        return roleNames[role] || role;
    };

    const getRoleEmoji = (role: string) => {
        const roleEmojis: Record<string, string> = {
            'super_admin': '👑',
            'admin_akademik': '🏢',
            'dosen': '👨‍🏫',
            'mahasiswa': '🎓',
        };
        return roleEmojis[role] || '👤';
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="p-6 space-y-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
                    <div className="flex items-center space-x-4">
                        <div className="text-4xl">
                            {getRoleEmoji(userRole)}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">
                                Selamat Datang, {auth.user?.name}!
                            </h1>
                            <p className="text-blue-100 text-lg mt-2">
                                {getRoleDisplayName(userRole)} - Sistem Informasi Akademik
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-blue-700">
                                Total Pengguna
                            </CardTitle>
                            <div className="text-2xl">👥</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-900">
                                {stats?.totalUsers || 156}
                            </div>
                            <p className="text-xs text-blue-600 mt-1">
                                Seluruh pengguna sistem
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-green-700">
                                Mahasiswa
                            </CardTitle>
                            <div className="text-2xl">🎓</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-900">
                                {stats?.totalStudents || 1205}
                            </div>
                            <p className="text-xs text-green-600 mt-1">
                                Mahasiswa aktif
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-purple-700">
                                Dosen
                            </CardTitle>
                            <div className="text-2xl">👨‍🏫</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-900">
                                {stats?.totalLecturers || 87}
                            </div>
                            <p className="text-xs text-purple-600 mt-1">
                                Dosen aktif
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-orange-700">
                                Admin
                            </CardTitle>
                            <div className="text-2xl">🏢</div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-900">
                                {stats?.totalAdmins || 12}
                            </div>
                            <p className="text-xs text-orange-600 mt-1">
                                Staff administrasi
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <span>⚡</span>
                                <span>Aksi Cepat</span>
                            </CardTitle>
                            <CardDescription>
                                Akses fitur utama dengan cepat
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {(userRole === 'super_admin' || userRole === 'admin_akademik') && (
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
                                        <div className="text-2xl mb-2">👥</div>
                                        <div className="font-medium text-gray-900">Kelola Pengguna</div>
                                        <div className="text-sm text-gray-600">Tambah & edit pengguna</div>
                                    </button>
                                    <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
                                        <div className="text-2xl mb-2">🎭</div>
                                        <div className="font-medium text-gray-900">Kelola Peran</div>
                                        <div className="text-sm text-gray-600">Atur hak akses</div>
                                    </button>
                                </div>
                            )}
                            {userRole === 'dosen' && (
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors">
                                        <div className="text-2xl mb-2">📝</div>
                                        <div className="font-medium text-gray-900">Input Nilai</div>
                                        <div className="text-sm text-gray-600">Kelola nilai mahasiswa</div>
                                    </button>
                                    <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-left transition-colors">
                                        <div className="text-2xl mb-2">📋</div>
                                        <div className="font-medium text-gray-900">Absensi</div>
                                        <div className="text-sm text-gray-600">Rekap kehadiran</div>
                                    </button>
                                </div>
                            )}
                            {userRole === 'mahasiswa' && (
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
                                        <div className="text-2xl mb-2">🎯</div>
                                        <div className="font-medium text-gray-900">Lihat Nilai</div>
                                        <div className="text-sm text-gray-600">Cek hasil akademik</div>
                                    </button>
                                    <button className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg text-left transition-colors">
                                        <div className="text-2xl mb-2">📅</div>
                                        <div className="font-medium text-gray-900">Jadwal Kuliah</div>
                                        <div className="text-sm text-gray-600">Lihat jadwal hari ini</div>
                                    </button>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <span>📊</span>
                                <span>Aktivitas Terkini</span>
                            </CardTitle>
                            <CardDescription>
                                Update terbaru sistem akademik
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="text-lg">📢</div>
                                    <div className="flex-1">
                                        <div className="font-medium text-sm">Sistem telah diperbarui</div>
                                        <div className="text-xs text-gray-600 mt-1">
                                            Fitur manajemen peran telah ditingkatkan - 2 jam yang lalu
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="text-lg">👤</div>
                                    <div className="flex-1">
                                        <div className="font-medium text-sm">Pengguna baru terdaftar</div>
                                        <div className="text-xs text-gray-600 mt-1">
                                            5 mahasiswa baru telah mendaftar - 1 hari yang lalu
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="text-lg">🔒</div>
                                    <div className="flex-1">
                                        <div className="font-medium text-sm">Backup sistem selesai</div>
                                        <div className="text-xs text-gray-600 mt-1">
                                            Backup otomatis berhasil - 2 hari yang lalu
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}