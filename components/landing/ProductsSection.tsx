"use client";

import { useEffect, useRef } from "react";
import { products } from "@/lib/demo-data";
import { BarChart3, Bitcoin, PieChart, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconMap: any = {
    BarChart3: BarChart3,
    Bitcoin: Bitcoin,
    PieChart: PieChart
};

export function ProductsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".product-card", {
                opacity: 0,
                y: 50,
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
        <section ref={sectionRef} className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Our products</h2>
                        <p className="text-muted-foreground max-w-xl">
                            Diversify your portfolio with a wide range of trading instruments.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        View all products <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Large Card */}
                    <div className="product-card col-span-1 lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 relative overflow-hidden group">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Advanced Platform</h3>
                                    <p className="text-slate-400 max-w-sm">Professional tools for serious traders. Real-time charts, advanced indicators, and algorithmic trading.</p>
                                </div>
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <BarChart3 className="w-8 h-8 text-emerald-400" />
                                </div>
                            </div>

                            <div className="mt-12">
                                <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                                    Try Terminal
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Small Cards Column */}
                    <div className="space-y-8">
                        {products.slice(1).map((product, idx) => {
                            const Icon = iconMap[product.icon];
                            return (
                                <div key={idx} className="product-card bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow group h-[220px] flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                                            <p className="text-xs text-muted-foreground">{product.description}</p>
                                        </div>
                                        <div className={`p-3 rounded-2xl ${product.color} bg-opacity-10 text-opacity-100`}>
                                            {Icon && <Icon className={`w-6 h-6 ${product.color.replace('bg-', 'text-')}`} />}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:gap-3 transition-all cursor-pointer">
                                        Trade Now <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
