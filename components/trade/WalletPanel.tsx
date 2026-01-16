"use client";

import { Wallet, ArrowUpRight, ArrowDownLeft, Plus, Send } from "lucide-react";

export function WalletPanel() {
    const assets = [
        { name: "Bitcoin", symbol: "BTC", balance: "0.45", value: "$19,125.00", change: "+2.5%", isUp: true },
        { name: "Ethereum", symbol: "ETH", balance: "4.20", value: "$9,870.00", change: "+1.2%", isUp: true },
        { name: "USD Coin", symbol: "USDC", balance: "5,430.00", value: "$5,430.00", change: "0.0%", isUp: true },
        { name: "Solana", symbol: "SOL", balance: "145.00", value: "$14,500.00", change: "-3.4%", isUp: false },
    ];

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">My Wallet</h2>
                    <p className="text-slate-500 text-sm">Total Balance</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Wallet className="w-5 h-5" />
                </div>
            </div>

            <div className="mb-8">
                <div className="text-4xl font-bold text-slate-900">$48,925.00</div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 text-xs font-bold">+5.2%</span>
                    <span className="text-slate-400 text-xs">this month</span>
                </div>
            </div>

            <div className="flex gap-4 mb-8">
                <button className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" /> Deposit
                </button>
                <button className="flex-1 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Withdraw
                </button>
            </div>

            <div>
                <h3 className="font-bold text-slate-900 mb-4">Assets</h3>
                <div className="space-y-3">
                    {assets.map((asset) => (
                        <div key={asset.symbol} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:border-slate-200 hover:shadow-sm transition-all bg-slate-50/50">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center font-bold text-xs text-slate-700 shadow-sm">
                                    {asset.symbol}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{asset.name}</div>
                                    <div className="text-xs text-slate-500">{asset.balance} {asset.symbol}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-slate-900">{asset.value}</div>
                                <div className={`text-xs font-bold ${asset.isUp ? 'text-emerald-600' : 'text-red-600'}`}>
                                    {asset.change}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
