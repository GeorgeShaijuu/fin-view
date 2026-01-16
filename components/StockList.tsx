"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const STOCKS = [
    { symbol: "AAPL", name: "Apple Inc.", price: "189.45", change: "+1.25%", isUp: true },
    { symbol: "TSLA", name: "Tesla, Inc.", price: "215.30", change: "-2.40%", isUp: false },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: "543.20", change: "+3.15%", isUp: true },
    { symbol: "MSFT", name: "Microsoft", price: "390.10", change: "+0.85%", isUp: true },
    { symbol: "AMZN", name: "Amazon.com", price: "155.60", change: "-0.50%", isUp: false },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: "142.80", change: "+1.10%", isUp: true },
];

export function StockList() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stock-item", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="glass-card rounded-2xl p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Market Overview
                </h2>
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Top Movers</span>
            </div>

            <div className="space-y-3 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                {STOCKS.map((stock) => (
                    <div
                        key={stock.symbol}
                        className="stock-item group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5"
                    >
                        <div className="flex flex-col">
                            <span className="font-bold text-white group-hover:text-blue-400 transition-colors">{stock.symbol}</span>
                            <span className="text-xs text-white/40 font-medium">{stock.name}</span>
                        </div>

                        <div className="flex flex-col items-end">
                            <span className="font-medium text-white tracking-wide">${stock.price}</span>
                            <div className={cn(
                                "flex items-center text-xs font-bold px-1.5 py-0.5 rounded-md",
                                stock.isUp ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"
                            )}>
                                {stock.isUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                {stock.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
