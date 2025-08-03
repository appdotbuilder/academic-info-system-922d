import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';



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
        title: 'Tambah Pengguna',
        href: '/users/create',
    },
];

export default function UserCreate() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Pengguna Baru" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">➕ Tambah Pengguna Baru</h1>
                        <p className="text-gray-600 mt-2">
                            Buat akun pengguna baru dalam sistem akademik
                        </p>
                    </div>
                    <Link href="/users">
                        <Button variant="outline">
                            ← Kembali
                        </Button>
                    </Link>
                </div>

                {/* Create Form */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Form Tambah Pengguna</CardTitle>
                        <CardDescription>
                            Isi semua informasi yang diperlukan untuk membuat akun baru
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🚧</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Form Tambah Pengguna dalam Pengembangan
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Fitur ini akan segera tersedia. Saat ini Anda dapat melihat daftar pengguna yang ada.
                            </p>
                            <div className="flex justify-center">
                                <Link href="/users">
                                    <Button>
                                        📋 Lihat Daftar Pengguna
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