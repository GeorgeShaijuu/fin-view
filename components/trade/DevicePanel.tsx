"use client";

import { Monitor, Battery, Wifi, Settings, RefreshCw, Sun, Moon, Grid } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function DevicePanel() {
    const [brightness, setBrightness] = useState(80);
    const [refreshRate, setRefreshRate] = useState("1s");

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">My Device</h2>
                    <p className="text-slate-500 text-sm">Manage your Finview Display</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Monitor className="w-5 h-5" />
                </div>
            </div>

            {/* Device Status Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-2 relative">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="font-bold text-emerald-400">Connected</span>
                    <div className="flex-1"></div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Battery className="w-4 h-4" /> 84%
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Device Name</div>
                        <div className="font-bold text-xl">Finview Pro (Gen 2)</div>
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                        <Wifi className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all flex flex-col items-center gap-2">
                    <RefreshCw className="w-6 h-6 text-primary" />
                    <span className="font-bold text-sm text-slate-700">Sync Now</span>
                </button>
                <button className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all flex flex-col items-center gap-2">
                    <Settings className="w-6 h-6 text-slate-500" />
                    <span className="font-bold text-sm text-slate-700">Calibrate</span>
                </button>
            </div>

            {/* Settings */}
            <h3 className="font-bold text-slate-900 mb-4">Device Settings</h3>
            <div className="space-y-6">
                <div>
                    <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>Brightness</span>
                        <span>{brightness}%</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={brightness}
                        onChange={(e) => setBrightness(Number(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>

                <div>
                    <div className="text-sm font-medium text-slate-700 mb-3">Refresh Rate</div>
                    <div className="flex bg-slate-50 p-1 rounded-lg border border-slate-200">
                        {["1s", "5s", "10s", "30s"].map((rate) => (
                            <button
                                key={rate}
                                onClick={() => setRefreshRate(rate)}
                                className={cn(
                                    "flex-1 py-1.5 rounded-md text-xs font-bold transition-colors",
                                    refreshRate === rate ? "bg-white text-primary shadow-sm border border-slate-100" : "text-slate-400 hover:text-slate-600"
                                )}
                            >
                                {rate}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-sm font-medium text-slate-700 mb-3">Display Theme</div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="border-2 border-primary bg-slate-900 text-white rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer shadow-sm">
                            <Grid className="w-5 h-5" />
                            <span className="text-[10px] font-bold">Matrix</span>
                        </div>
                        <div className="border border-slate-200 bg-white text-slate-900 rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer hover:border-slate-300">
                            <Sun className="w-5 h-5" />
                            <span className="text-[10px] font-bold">Light</span>
                        </div>
                        <div className="border border-slate-200 bg-slate-950 text-slate-400 rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer hover:border-slate-300">
                            <Moon className="w-5 h-5" />
                            <span className="text-[10px] font-bold">Dark</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
