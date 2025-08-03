import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel className="text-blue-100 font-medium">Menu Utama</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                            asChild 
                            isActive={page.url.startsWith(item.href)} 
                            tooltip={{ children: item.title }}
                            className="text-blue-50 hover:bg-blue-500/20 hover:text-white data-[active=true]:bg-blue-500/30 data-[active=true]:text-white transition-colors"
                        >
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon className="h-4 w-4" />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}