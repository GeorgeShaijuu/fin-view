"use client";

import { useState } from "react";
import { ArrowRightLeft, TrendingUp } from "lucide-react";

export function ConverterWidget() {
    const [amount, setAmount] = useState<string>("1000"); // Store as string for input
    const [rate] = useState(0.000028); // Placeholder rate for USD to BTC

    const convertedAmount = (parseFloat(amount || "0") * rate).toFixed(6);

    return (
        <section className="relative z-20 -mt-24 pb-20 container mx-auto px-6">
            <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 p-2 border border-slate-100 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center p-6 gap-6 md:gap-0">

                    {/* Amount Input */}
                    <div className="flex-1 w-full md:border-r border-slate-100 md:pr-6">
                        <label className="text-sm font-semibold text-muted-foreground block mb-2">Give</label>
                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="text-3xl font-bold text-foreground bg-transparent focus:outline-none w-full appearance-none"
                                placeholder="0"
                            />
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                                    $
                                </div>
                                <span className="font-bold text-foreground">USD</span>
                            </div>
                        </div>
                    </div>

                    {/* Converter Info/Icon */}
                    <div className="px-6 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                            <ArrowRightLeft className="w-5 h-5" />
                        </div>
                        <div className="text-xs text-muted-foreground font-medium mt-2">1 USD ~ {rate} BTC</div>
                    </div>

                    {/* Result Output */}
                    <div className="flex-1 w-full md:border-l border-slate-100 md:pl-6">
                        <label className="text-sm font-semibold text-muted-foreground block mb-2">Receive</label>
                        <div className="flex items-center gap-3">
                            <div className="text-3xl font-bold text-foreground w-full flex items-center">
                                {convertedAmount}
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 shrink-0">
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold">
                                    ₿
                                </div>
                                <span className="font-bold text-foreground">BTC</span>
                            </div>
                        </div>
                    </div>

                    {/* Exchange Button */}
                    <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-auto">
                        <button className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                            Exchange
                            <ArrowRightLeft className="w-4 h-4" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
