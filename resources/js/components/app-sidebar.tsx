import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, LayoutGrid, Users, Shield, Settings, GraduationCap, UserCheck } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Manajemen Pengguna',
        href: '/users',
        icon: Users,
    },
    {
        title: 'Peran & Izin',
        href: '/roles',
        icon: Shield,
    },
    {
        title: 'Akademik',
        href: '/academic',
        icon: GraduationCap,
    },
    {
        title: 'Kehadiran',
        href: '/attendance',
        icon: UserCheck,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Pengaturan',
        href: '/settings',
        icon: Settings,
    },
    {
        title: 'Dokumentasi',
        href: '/docs',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset" className="sidebar-blue">
            <SidebarHeader className="sidebar-blue-header">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="hover:bg-blue-500/20 text-white">
                            <Link href="/dashboard" prefetch>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
                                        <AppLogo className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-semibold text-white">SIA</div>
                                        <div className="text-xs text-blue-100">Sistem Akademik</div>
                                    </div>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="sidebar-blue">
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter className="sidebar-blue-footer">
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}