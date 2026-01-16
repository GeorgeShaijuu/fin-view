"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Smartphone, Apple } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MobilePromoSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".promo-content", {
                x: -50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            });
            gsap.from(".promo-image", {
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                }
            });
            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -z-10 -translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="promo-content">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Control from <br />
                            Anywhere <ArrowRight className="inline-block ml-4 text-primary w-10 h-10" />
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-md">
                            Use the Finview Mobile App to configure your device, manage Wi-Fi, and select which stocks to display.
                        </p>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-opacity">
                                <Apple className="w-8 h-8" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium uppercase opacity-80">Download on the</div>
                                    <div className="text-sm font-bold leading-none">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-secondary text-foreground px-6 py-3 rounded-xl hover:bg-secondary/80 transition-opacity border border-border">
                                <Smartphone className="w-8 h-8" />
                                <div className="text-left">
                                    <div className="text-[10px] font-medium uppercase opacity-80">Get it on</div>
                                    <div className="text-sm font-bold leading-none">Google Play</div>
                                </div>
                            </button>
                        </div>

                        <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-slate-100 inline-block max-w-xs">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs text-center p-2">
                                    QR CODE
                                </div>
                                <div className="text-sm">
                                    <div className="font-bold mb-1">Scan to Download</div>
                                    <p className="text-muted-foreground text-xs">Use your phone camera to scan and install the app.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="promo-image relative flex justify-center lg:justify-end">
                        {/* Mockup Placeholder */}
                        <div className="relative w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
                            <div className="absolute inset-0 bg-white flex flex-col">
                                {/* Simple App UI Mockup */}
                                <div className="bg-primary/5 p-6 pb-10">
                                    <div className="text-xs font-bold text-muted-foreground mb-2">My Balance</div>
                                    <div className="text-3xl font-bold">$24,500.00</div>
                                </div>
                                <div className="flex-1 p-6 space-y-4 bg-white rounded-t-3xl -mt-6">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                                                <div>
                                                    <div className="w-16 h-4 bg-slate-100 rounded mb-1"></div>
                                                    <div className="w-10 h-3 bg-slate-50 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="w-12 h-6 bg-emerald-100 rounded"></div>
                                        </div>
                                    ))}
                                    {/* Chart */}
                                    <div className="mt-8 h-32 w-full bg-blue-50 rounded-2xl border border-blue-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
