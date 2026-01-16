"use client";

import { useEffect, useRef } from "react";
import { analytics } from "@/lib/demo-data";
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function AnalyticsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".analytics-card", {
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10">Market Analytics</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {analytics.map((item, idx) => (
                        <div key={idx} className="analytics-card bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${item.trend === 'up' ? 'bg-blue-50 text-blue-500' : 'bg-red-50 text-red-500'}`}>
                                    {item.trend === 'up' ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
                                </div>
                                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${item.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                                    {item.trend === 'up' ? 'BUY' : 'NEUTRAL'}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                            <div className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
                                {item.value}
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                            <button className="mt-6 w-full py-3 rounded-xl border border-border text-sm font-semibold hover:bg-secondary transition-colors">
                                View Report
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
