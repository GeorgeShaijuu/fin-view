"use client";

import { useEffect, useRef } from "react";
import { steps } from "@/lib/demo-data";
import Image from "next/image";
import { ArrowRight, UserPlus, FileCheck, CreditCard, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const icons = [UserPlus, FileCheck, CreditCard, TrendingUp];

export function StepsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".step-card", {
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
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-16 text-center">Setup in 30 Seconds</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => {
                        const Icon = icons[idx];
                        return (
                            <div key={idx} className="step-card group relative p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
                                <div className="absolute top-6 right-6 text-4xl font-bold text-slate-100 group-hover:text-primary/10 transition-colors select-none">
                                    {step.number}
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {step.description}
                                </p>

                                <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
