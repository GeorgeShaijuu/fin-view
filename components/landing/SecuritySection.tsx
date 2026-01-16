"use client";

import { useEffect, useRef } from "react";
import { Shield, Lock, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SecuritySection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".security-item", {
                opacity: 0,
                y: 30,
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
        <section ref={sectionRef} className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Abstract Security Illustration */}
                            <div className="absolute inset-0 bg-secondary/50 rounded-full blur-3xl" />
                            <div className="relative z-10 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 security-item">
                                <div className="absolute -top-6 -right-6 bg-emerald-500 text-white p-4 rounded-2xl shadow-lg animate-bounce duration-[3000ms]">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <Shield className="w-32 h-32 text-primary mx-auto mb-6" />
                                <div className="space-y-4">
                                    <div className="h-4 bg-slate-100 rounded-full w-3/4 mx-auto" />
                                    <div className="h-4 bg-slate-100 rounded-full w-1/2 mx-auto" />
                                </div>
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                        <Lock className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                                        <div className="text-xs font-bold text-slate-600">Encrypted</div>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl text-center">
                                        <Shield className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                                        <div className="text-xs font-bold text-slate-600">Protected</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold mb-6">
                            Security of <br />
                            Your Assets
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10">
                            We use state-of-the-art security measures to protect your funds and personal information. Your security is our top priority.
                        </p>

                        <div className="space-y-6">
                            <div className="security-item flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Two-Factor Authentication</h3>
                                    <p className="text-muted-foreground">Secure your account with 2FA for an extra layer of protection.</p>
                                </div>
                            </div>
                            <div className="security-item flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Cold Storage</h3>
                                    <p className="text-muted-foreground">The majority of user funds are kept in offline cold storage.</p>
                                </div>
                            </div>
                            <div className="security-item flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Data Encryption</h3>
                                    <p className="text-muted-foreground">All sensitive data is fully encrypted using AES-256 standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
