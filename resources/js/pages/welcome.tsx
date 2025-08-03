import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLogo from '@/components/app-logo';

interface Props {
    auth: {
        user?: {
            id: number;
            name: string;
            email: string;
            roles?: Array<{ name: string; }>;
        };
    };
    [key: string]: unknown;
}

export default function Welcome({ auth }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            {/* Header */}
            <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                                <AppLogo className="h-16 w-auto" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            🎓 Sistem Informasi
                            <span className="block text-blue-200">Akademik</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100 sm:text-2xl">
                            Platform manajemen akademik terpadu untuk mengelola pengguna, peran, dan izin dengan antarmuka yang modern dan intuitif
                        </p>
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            {auth.user ? (
                                <Link href="/dashboard">
                                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                                        📊 Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                                            🔐 Login
                                        </Button>
                                    </Link>
                                    <Link href="/register">
                                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                                            📝 Daftar
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            ✨ Fitur Utama
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Sistem akademik yang lengkap dan mudah digunakan
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* User Management */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <span className="text-2xl">👥</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Manajemen Pengguna
                                </h3>
                                <p className="text-gray-600">
                                    Kelola data mahasiswa, dosen, dan staff akademik dengan sistem yang terintegrasi
                                </p>
                            </div>
                        </div>

                        {/* Role Management */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                                    <span className="text-2xl">🎭</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Manajemen Peran
                                </h3>
                                <p className="text-gray-600">
                                    Sistem peran yang fleksibel: Super Admin, Admin Akademik, Dosen, dan Mahasiswa
                                </p>
                            </div>
                        </div>

                        {/* Permission System */}
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                                    <span className="text-2xl">🔐</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Sistem Izin
                                </h3>
                                <p className="text-gray-600">
                                    Kontrol akses berbasis CRUDX (Create, Read, Update, Delete, Execute) permissions
                                </p>
                            </div>
                        </div>

                        {/* Academic Management */}
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Manajemen Akademik
                                </h3>
                                <p className="text-gray-600">
                                    Kelola kurikulum, mata kuliah, jadwal, dan laporan akademik secara terpusat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles Section */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            🏛️ Peran dalam Sistem
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Setiap peran memiliki akses dan tanggung jawab yang berbeda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">👑 Super Admin</h3>
                            <p className="text-sm text-gray-600">Akses penuh ke seluruh sistem dan konfigurasi</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">🏢 Admin Akademik</h3>
                            <p className="text-sm text-gray-600">Mengelola data akademik, pengguna, dan laporan</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">👨‍🏫 Dosen</h3>
                            <p className="text-sm text-gray-600">Mengelola nilai, kehadiran, dan data mahasiswa</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">🎓 Mahasiswa</h3>
                            <p className="text-sm text-gray-600">Melihat nilai, jadwal, dan mendaftar mata kuliah</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            📊 Keunggulan Sistem
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Keamanan Data</div>
                            <div className="text-gray-600">Sistem keamanan berlapis dengan enkripsi terdepan</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Akses Online</div>
                            <div className="text-gray-600">Tersedia kapan saja, di mana saja dengan koneksi internet</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                            <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
                            <div className="text-lg font-semibold text-gray-900 mb-2">Skalabilitas</div>
                            <div className="text-gray-600">Dapat menangani ribuan pengguna secara bersamaan</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <AppLogo className="h-10 w-auto" />
                        </div>
                        <p className="text-gray-400 mb-4">
                            © 2024 Sistem Informasi Akademik. Dibangun dengan Laravel 10+ dan React.
                        </p>
                        <p className="text-sm text-gray-500">
                            🔒 Powered by Laravel Sanctum & Spatie Permission
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}