import AppLogoIcon from './app-logo-icon';

interface AppLogoProps {
    className?: string;
}

export default function AppLogo({ className }: AppLogoProps) {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoIcon className={`size-5 fill-current text-white dark:text-black ${className || ''}`} />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">SIA</span>
            </div>
        </>
    );
}

export { AppLogo };
