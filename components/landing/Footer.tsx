import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-20 rounded-t-[3rem] mt-10">
            <div className="container mx-auto px-6">

                {/* CTA Box */}
                <div className="bg-white/5 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
                        <p>Our support team is available 24/7 to assist you.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                            Online Chat
                        </button>
                        <button className="px-6 py-3 border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="font-bold text-white">F</span>
                            </div>
                            <span className="text-xl font-bold text-white">Finview</span>
                        </Link>
                        <p className="mb-6 text-sm leading-relaxed">
                            Finview involves significantly high risks and may result in the loss of invested capital. You should only invest money that you can afford to lose.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookies Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Risk Disclosure</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Download</h4>
                        <div className="space-y-4">
                            <a href="#" className="block p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold">A</div>
                                    <div>
                                        <div className="text-[10px] uppercase opacity-70">Download on</div>
                                        <div className="text-xs font-bold text-white">App Store</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="block p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold">G</div>
                                    <div>
                                        <div className="text-[10px] uppercase opacity-70">Get it on</div>
                                        <div className="text-xs font-bold text-white">Google Play</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>© 2025 Finview LTD. All rights reserved.</div>
                    <div className="flex gap-6">
                        <span>Risk Warning</span>
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
