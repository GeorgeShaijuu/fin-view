"use client";

import { useEffect, useRef } from "react";
import { services } from "@/lib/demo-data";
import { ArrowRight, Zap, Percent, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconMap: any = {
    Zap: Zap,
    Percent: Percent,
    Headphones: Headphones
};

export function ServicesSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-bold mb-4">Device <br /> Features <ArrowRight className="inline-block ml-2 w-8 h-8 text-primary" /></h2>
                        <p className="text-muted-foreground">
                            Engineered for performance and aesthetics. The ultimate trading companion.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                            Technical Specs
                        </button>
                    </div>

                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        {services.map((service, idx) => {
                            const Icon = iconMap[service.icon];
                            return (
                                <div key={idx} className="service-card p-8 bg-white rounded-[2rem] shadow-lg shadow-slate-100 border border-slate-50 hover:shadow-xl transition-shadow group">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        {Icon && <Icon className="w-7 h-7" />}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm">{service.description}</p>
                                </div>
                            )
                        })}
                        <div className="service-card p-8 bg-slate-900 text-white rounded-[2rem] shadow-lg flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-3">Order Now</h3>
                                <p className="text-slate-400 text-sm">Join the waitlist for Batch #3.</p>
                            </div>
                            <button className="mt-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-white hover:text-black transition-colors self-end">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
