import { ChartWrapper } from "@/components/ChartWrapper";
import { StockList } from "@/components/StockList";
import { OrderPanel } from "@/components/trade/OrderPanel";
import Link from "next/link";
import { ArrowLeft, Bell, Settings } from "lucide-react";

export default function TradePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
            {/* Header */}
            <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="h-6 w-px bg-slate-800"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white">F</div>
                        <span className="font-bold text-lg hidden sm:block">Finview Pro</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                        <span className="text-white cursor-pointer">Trade</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Positions</span>
                        <span className="hover:text-white cursor-pointer transition-colors">History</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Wallet</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                        <Bell className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                        <Settings className="w-5 h-5" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-white/20"></div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-hidden h-[calc(100vh-64px)]">
                {/* Left Sidebar (Stocks) */}
                <div className="hidden lg:block lg:col-span-3 xl:col-span-2 h-full overflow-hidden">
                    <StockList />
                </div>

                {/* Center (Chart) */}
                <div className="col-span-1 lg:col-span-6 xl:col-span-7 h-full min-h-[500px]">
                    <ChartWrapper />
                </div>

                {/* Right Sidebar (Order) */}
                <div className="col-span-1 lg:col-span-3 xl:col-span-3 h-full overflow-hidden">
                    <OrderPanel />
                </div>
            </main>
        </div>
    );
}
