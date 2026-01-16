import Link from "next/link";
import { Search, Bell, Settings } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    F
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Finview</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                    Dashboard
                </Link>
                <Link href="/portfolio" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                    Portfolio
                </Link>
                <Link href="/markets" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                    Markets
                </Link>
                <Link href="/news" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                    News
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                        type="text"
                        placeholder="Search stocks..."
                        className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 transition-all"
                    />
                </div>
                <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <Settings className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-white/20"></div>
            </div>
        </header>
    );
}
