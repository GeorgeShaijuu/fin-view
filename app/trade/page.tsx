"use client";

import { useState } from "react";
import { ChartWrapper } from "@/components/ChartWrapper";
import { StockList } from "@/components/StockList";
import { OrderPanel } from "@/components/trade/OrderPanel";
import { HistoryPanel } from "@/components/trade/HistoryPanel";
import Link from "next/link";
import { ArrowLeft, Bell, Settings, Menu, History, Wallet, BarChart2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TradePage() {
    const [activeTab, setActiveTab] = useState("trade");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            {/* Header */}
            <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white/50 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500 hover:text-slate-900">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="h-6 w-px bg-slate-200"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">F</div>
                        <span className="font-bold text-lg hidden sm:block">Finview Display</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
                    {['trade', 'history'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize",
                                activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
                        <Bell className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Menu className="w-5 h-5" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-emerald-600 ring-2 ring-white hidden md:block"></div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-hidden h-[calc(100vh-64px)] relative">

                {activeTab === 'trade' ? (
                    <>
                        {/* Left Sidebar (Stocks) */}
                        <div className={cn(
                            "lg:block lg:col-span-3 xl:col-span-2 h-full overflow-hidden transition-all duration-300 z-40",
                            mobileMenuOpen ? "absolute inset-0 bg-white p-4 block" : "hidden"
                        )}>
                            <div className="h-full flex flex-col gap-4">
                                <div className="lg:hidden flex justify-end">
                                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-900"><X className="w-6 h-6" /></button>
                                </div>
                                <StockList />
                                <div className="lg:hidden">
                                    <HistoryPanel />
                                </div>
                            </div>
                        </div>

                        {/* Center (Chart) */}
                        <div className="col-span-1 lg:col-span-6 xl:col-span-7 h-full flex flex-col min-h-[400px]">
                            <ChartWrapper />
                        </div>

                        {/* Right Sidebar (Order) */}
                        <div className="col-span-1 lg:col-span-3 xl:col-span-3 h-full overflow-hidden hidden lg:block">
                            <OrderPanel />
                        </div>
                    </>
                ) : (
                    <div className="col-span-12 h-full overflow-hidden">
                        <HistoryPanel />
                    </div>
                )}

                {/* Mobile Bottom Sheet for Order Panel */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-30">
                    <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20">
                        Trade Now
                    </button>
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around z-50">
                <button onClick={() => setActiveTab('trade')} className={cn("flex flex-col items-center gap-1", activeTab === 'trade' ? "text-primary" : "text-slate-400")}>
                    <BarChart2 className="w-5 h-5" />
                    <span className="text-[10px]">Trade</span>
                </button>
                <button onClick={() => setActiveTab('history')} className={cn("flex flex-col items-center gap-1", activeTab === 'history' ? "text-primary" : "text-slate-400")}>
                    <History className="w-5 h-5" />
                    <span className="text-[10px]">History</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                    <Wallet className="w-5 h-5" />
                    <span className="text-[10px]">Wallet</span>
                </button>
            </div>
        </div>
    );
}
