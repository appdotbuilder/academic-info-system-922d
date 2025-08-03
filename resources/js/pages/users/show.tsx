import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface User {
    id: number;
    name: string;
    email: string;
    nip_nim?: string;
    phone?: string;
    faculty?: string;
    program_study?: string;
    academic_year?: string;
    address?: string;
    birth_date?: string;
    gender?: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

interface Props {
    user: User;
    [key: string]: unknown;
}

export default function UserShow({ user }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Manajemen Pengguna',
            href: '/users',
        },
        {
            title: user.name,
            href: `/users/${user.id}`,
        },
    ];

    const getUserType = (user: User) => {
        if (user.nip_nim?.startsWith('SA') || user.nip_nim?.startsWith('ADM')) {
            return { type: 'Super Admin', emoji: '👑', color: 'bg-red-100 text-red-800' };
        }
        if (user.nip_nim?.startsWith('AA')) {
            return { type: 'Admin Akademik', emoji: '🏢', color: 'bg-blue-100 text-blue-800' };
        }
        if (user.nip_nim?.startsWith('19')) {
            return { type: 'Dosen', emoji: '👨‍🏫', color: 'bg-green-100 text-green-800' };
        }
        if (user.academic_year) {
            return { type: 'Mahasiswa', emoji: '🎓', color: 'bg-yellow-100 text-yellow-800' };
        }
        return { type: 'User', emoji: '👤', color: 'bg-gray-100 text-gray-800' };
    };

    const userType = getUserType(user);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`${user.name} - Detail Pengguna`} />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${userType.color}`}>
                                    {userType.emoji} {userType.type}
                                </span>
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {user.is_active ? '✅ Aktif' : '❌ Nonaktif'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Link href={`/users/${user.id}/edit`}>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                ✏️ Edit Pengguna
                            </Button>
                        </Link>
                        <Link href="/users">
                            <Button variant="outline">
                                ← Kembali ke Daftar
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <span>👤</span>
                                <span>Informasi Personal</span>
                            </CardTitle>
                            <CardDescription>
                                Data personal pengguna
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                                    <p className="text-gray-900 font-medium">{user.name}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <p className="text-gray-900">{user.email}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">NIP/NIM</label>
                                    <p className="text-gray-900 font-mono">{user.nip_nim || '-'}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Nomor Telepon</label>
                                    <p className="text-gray-900">{user.phone || '-'}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Jenis Kelamin</label>
                                    <p className="text-gray-900">
                                        {user.gender === 'male' ? '👨 Laki-laki' : user.gender === 'female' ? '👩 Perempuan' : '-'}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Tanggal Lahir</label>
                                    <p className="text-gray-900">
                                        {user.birth_date ? new Date(user.birth_date).toLocaleDateString('id-ID', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }) : '-'}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Academic Information */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <span>🎓</span>
                                <span>Informasi Akademik</span>
                            </CardTitle>
                            <CardDescription>
                                Data akademik pengguna
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Fakultas</label>
                                    <p className="text-gray-900">{user.faculty || '-'}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Program Studi</label>
                                    <p className="text-gray-900">{user.program_study || '-'}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Tahun Akademik</label>
                                    <p className="text-gray-900">{user.academic_year || '-'}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Status</label>
                                    <p className="text-gray-900">
                                        {user.is_active ? '✅ Aktif' : '❌ Nonaktif'}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card className="shadow-lg lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <span>📍</span>
                                <span>Informasi Kontak</span>
                            </CardTitle>
                            <CardDescription>
                                Alamat dan kontak pengguna
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Alamat Lengkap</label>
                                <p className="text-gray-900 mt-1">{user.address || 'Alamat belum diisi'}</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* System Information */}
                    <Card className="shadow-lg lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <span>⚙️</span>
                                <span>Informasi Sistem</span>
                            </CardTitle>
                            <CardDescription>
                                Data sistem dan aktivitas
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Dibuat pada</label>
                                    <p className="text-gray-900">
                                        {new Date(user.created_at).toLocaleDateString('id-ID', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Terakhir diupdate</label>
                                    <p className="text-gray-900">
                                        {new Date(user.updated_at).toLocaleDateString('id-ID', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}