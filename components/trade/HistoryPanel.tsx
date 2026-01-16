"use client";

import { Check, X } from "lucide-react";

export function HistoryPanel() {
    const history = [
        { symbol: "AAPL", type: "Buy", price: "189.45", amount: "5.0", time: "10:30 AM", pnl: "+$124.50", status: "Closed" },
        { symbol: "TSLA", type: "Sell", price: "215.30", amount: "2.5", time: "09:15 AM", pnl: "-$45.20", status: "Closed" },
        { symbol: "BTC", type: "Buy", price: "42,500", amount: "0.1", time: "Yesterday", pnl: "+$850.00", status: "Open" },
        { symbol: "NVDA", type: "Buy", price: "540.20", amount: "10", time: "Yesterday", pnl: "+$3,200", status: "Closed" },
    ];

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full flex flex-col shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6">Recent Activity</h2>
            <div className="space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                {history.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.type === 'Buy' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'}`}>
                                {item.type === 'Buy' ? 'B' : 'S'}
                            </div>
                            <div>
                                <div className="font-bold text-foreground">{item.symbol}</div>
                                <div className="text-xs text-muted-foreground">{item.amount} units @ {item.price}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={`font-bold ${item.pnl.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                                {item.pnl}
                            </div>
                            <div className="text-xs text-muted-foreground">{item.status}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
