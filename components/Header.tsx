import Link from "next/link";
import { LogIn } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-foreground">Finview</span>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    <Link href="#trade" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Trade
                    </Link>
                    <Link href="#markets" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Markets
                    </Link>
                    <Link href="#education" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Education
                    </Link>
                    <Link href="#analytics" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Analytics
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
                        RU
                    </button>
                    <Link
                        href="/login"
                        className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-colors flex items-center gap-2"
                    >
                        Sign Up
                    </Link>
                    <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <LogIn className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}
