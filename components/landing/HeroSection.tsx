"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Apple, Play } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
    const heroRef = useRef(null);
    const phoneRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(contentRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
            })
                .from(phoneRef.current, {
                    opacity: 0,
                    y: 100,
                    duration: 1.2,
                    ease: "power3.out",
                }, "-=0.8");

            // Float animation for phone
            gsap.to(phoneRef.current, {
                y: "-=20",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
            {/* Background Blurs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div ref={contentRef} className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Pre-order Batch #3
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                            The Market on <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Your Desk.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                            Track your portfolio in real-time with Finview Display.
                            The dedicated IoT device that keeps you connected to the markets, without the distractions.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
                                Start Trading
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 bg-white hover:bg-secondary text-foreground rounded-full font-semibold transition-all border border-border flex items-center gap-2">
                                Try Demo
                            </button>
                        </div>
                    </div>

                    <div ref={phoneRef} className="relative hidden lg:block">
                        {/* Placeholder for the Phone Mockup from the image */}
                        {/* Once we have the actual asset we can replace this div with an Image component */}
                        <div className="relative w-[350px] mx-auto z-20">
                            <div className="relative aspect-[9/19] bg-gray-900 rounded-[3rem] border-8 border-gray-900 overflow-hidden shadow-2xl">
                                {/* Screen Content Simulation */}
                                <div className="absolute inset-0 bg-white">
                                    <div className="h-full w-full bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col p-4">
                                        {/* Mockup Top */}
                                        <div className="h-20 flex justify-between items-center">
                                            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                        </div>
                                        {/* Mockup Chart */}
                                        <div className="mt-4 h-40 bg-emerald-50 rounded-2xl border border-emerald-100 relative overflow-hidden">
                                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-emerald-500/10 clip-path-trend"></div>
                                        </div>
                                        {/* Mockup List */}
                                        <div className="mt-6 space-y-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-16 bg-white rounded-xl shadow-sm border border-slate-100 p-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                                                        <div className="w-20 h-4 bg-slate-100 rounded"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements/Cards around the phone */}
                        <div className="absolute top-20 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-float-delayed z-30">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">%</div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Interest Rate</div>
                                    <div className="font-bold text-foreground">12.5%</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-40 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-float z-30">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <ArrowRight className="w-5 h-5 -rotate-45" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Profit</div>
                                    <div className="font-bold text-emerald-600">+$2,450</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
