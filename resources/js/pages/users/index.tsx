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
    is_active: boolean;
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationMeta {
    total: number;
    from: number;
    to: number;
    current_page: number;
    last_page: number;
    per_page: number;
}

interface Props {
    users: {
        data: User[];
        links: PaginationLink[];
        meta: PaginationMeta;
    };
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Manajemen Pengguna',
        href: '/users',
    },
];

export default function UsersIndex({ users }: Props) {
    const getUserType = (user: User) => {
        if (user.nip_nim?.startsWith('SA') || user.nip_nim?.startsWith('ADM')) {
            return { type: 'Admin', color: 'bg-red-100 text-red-800' };
        }
        if (user.nip_nim?.startsWith('AA')) {
            return { type: 'Admin Akademik', color: 'bg-blue-100 text-blue-800' };
        }
        if (user.nip_nim?.startsWith('19')) {
            return { type: 'Dosen', color: 'bg-green-100 text-green-800' };
        }
        if (user.academic_year) {
            return { type: 'Mahasiswa', color: 'bg-yellow-100 text-yellow-800' };
        }
        return { type: 'User', color: 'bg-gray-100 text-gray-800' };
    };

    const studentsCount = users.data?.filter(user => user.academic_year).length || 0;
    const lecturersCount = users.data?.filter(user => user.nip_nim?.startsWith('19')).length || 0;
    const adminsCount = users.data?.filter(user => 
        user.nip_nim?.startsWith('SA') || 
        user.nip_nim?.startsWith('ADM') || 
        user.nip_nim?.startsWith('AA')
    ).length || 0;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manajemen Pengguna" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">👥 Manajemen Pengguna</h1>
                        <p className="text-gray-600 mt-2">
                            Kelola data pengguna sistem akademik
                        </p>
                    </div>
                    <Link href="/users/create">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            ➕ Tambah Pengguna
                        </Button>
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-blue-700">Total Pengguna</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-900">{users.meta?.total || 0}</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-green-700">Mahasiswa</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-900">{studentsCount}</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-purple-700">Dosen</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-purple-900">{lecturersCount}</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-orange-700">Admin</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-900">{adminsCount}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Users Table */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Daftar Pengguna</CardTitle>
                        <CardDescription>
                            Semua pengguna yang terdaftar dalam sistem
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Nama</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">NIP/NIM</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Tipe</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Fakultas</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                                        <th className="text-left py-3 px-4 font-medium text-gray-900">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data?.map((user) => {
                                        const userType = getUserType(user);
                                        return (
                                            <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                                                            {user.name.charAt(0).toUpperCase()}
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-gray-900">{user.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 text-gray-600">{user.email}</td>
                                                <td className="py-3 px-4 text-gray-600">{user.nip_nim || '-'}</td>
                                                <td className="py-3 px-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${userType.color}`}>
                                                        {userType.type}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-gray-600">{user.faculty || '-'}</td>
                                                <td className="py-3 px-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                        {user.is_active ? '✅ Aktif' : '❌ Nonaktif'}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="flex items-center space-x-2">
                                                        <Link href={`/users/${user.id}`}>
                                                            <Button variant="outline" size="sm">
                                                                👁️ Lihat
                                                            </Button>
                                                        </Link>
                                                        <Link href={`/users/${user.id}/edit`}>
                                                            <Button variant="outline" size="sm">
                                                                ✏️ Edit
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {users.links && (
                            <div className="flex items-center justify-between mt-6">
                                <div className="text-sm text-gray-700">
                                    Menampilkan {users.meta?.from || 0} sampai {users.meta?.to || 0} dari {users.meta?.total || 0} hasil
                                </div>
                                <div className="flex items-center space-x-2">
                                    {users.links.map((link, index: number) => (
                                        <Link
                                            key={index}
                                            href={link.url || '#'}
                                            className={`px-3 py-2 text-sm rounded-md ${
                                                link.active
                                                    ? 'bg-blue-600 text-white'
                                                    : link.url
                                                    ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}