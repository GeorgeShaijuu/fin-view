"use client";

import { useState } from "react";
import { ArrowUpDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function OrderPanel() {
    const [mode, setMode] = useState<"buy" | "sell">("buy");
    const [leverage, setLeverage] = useState(10);
    const [amount, setAmount] = useState("1000");

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full flex flex-col">
            <div className="flex bg-slate-950 p-1 rounded-xl mb-6">
                <button
                    onClick={() => setMode("buy")}
                    className={cn(
                        "flex-1 py-3 rounded-lg text-sm font-bold transition-all",
                        mode === "buy" ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "text-slate-400 hover:text-white"
                    )}
                >
                    Buy
                </button>
                <button
                    onClick={() => setMode("sell")}
                    className={cn(
                        "flex-1 py-3 rounded-lg text-sm font-bold transition-all",
                        mode === "sell" ? "bg-red-500 text-white shadow-lg shadow-red-500/20" : "text-slate-400 hover:text-white"
                    )}
                >
                    Sell
                </button>
            </div>

            <div className="space-y-6 flex-1">
                <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Amount (USD)</span>
                        <span>Avail: $24,500</span>
                    </div>
                    <div className="relative">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-bold">USD</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-4">
                        <span>Leverage</span>
                        <span className="text-white font-bold">{leverage}x</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={leverage}
                        onChange={(e) => setLeverage(Number(e.target.value))}
                        className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-2">
                        <span>1x</span>
                        <span>25x</span>
                        <span>50x</span>
                        <span>100x</span>
                    </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Margin</span>
                        <span className="text-white font-medium">${(Number(amount) / leverage).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Fee</span>
                        <span className="text-white font-medium">$2.50</span>
                    </div>
                </div>
            </div>

            <button
                className={cn(
                    "w-full py-4 rounded-xl font-bold text-lg mt-6 shadow-lg transition-all transform hover:scale-[1.02]",
                    mode === "buy" ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/20" : "bg-red-500 hover:bg-red-400 text-white shadow-red-500/20"
                )}
            >
                {mode === "buy" ? "Buy / Long" : "Sell / Short"}
            </button>
        </div>
    );
}
