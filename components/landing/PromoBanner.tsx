"use client";

import { Send, ArrowRight } from "lucide-react";

export function PromoBanner() {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">

                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 flex items-center gap-6">
                    <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                        <Send className="w-10 h-10 text-white" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Join our Telegram</h2>
                        <p className="text-slate-400 max-w-sm">
                            Get daily market analysis, trading signals, and exclusive news directly to your phone.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 w-full md:w-auto">
                    <button className="w-full md:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-3">
                        Join Channel
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
