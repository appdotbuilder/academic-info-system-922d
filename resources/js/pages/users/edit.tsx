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

export default function UserEdit({ user }: Props) {
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
        {
            title: 'Edit',
            href: `/users/${user.id}/edit`,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${user.name} - Pengguna`} />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">✏️ Edit Pengguna</h1>
                        <p className="text-gray-600 mt-2">
                            Ubah data pengguna: {user.name}
                        </p>
                    </div>
                    <Link href={`/users/${user.id}`}>
                        <Button variant="outline">
                            ← Kembali
                        </Button>
                    </Link>
                </div>

                {/* Edit Form */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Form Edit Pengguna</CardTitle>
                        <CardDescription>
                            Ubah informasi pengguna sesuai kebutuhan
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🚧</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Form Edit dalam Pengembangan
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Fitur ini akan segera tersedia. Saat ini Anda dapat melihat detail pengguna.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Link href={`/users/${user.id}`}>
                                    <Button>
                                        👁️ Lihat Detail
                                    </Button>
                                </Link>
                                <Link href="/users">
                                    <Button variant="outline">
                                        📋 Kembali ke Daftar
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}