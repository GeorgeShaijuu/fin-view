"use client";

import { useEffect, useRef, useState } from "react";
import { createChart, ColorType, CrosshairMode, IChartApi, ISeriesApi, AreaSeries, CandlestickSeries } from "lightweight-charts";
import { CandlestickChart, LineChart } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const MOCK_DATA = generateData(2500, 200, 300);

function generateData(numberOfCandles: number, startPrice: number, volatility: number) {
    let data = [];
    let time = new Date(Date.now() - numberOfCandles * 24 * 60 * 60 * 1000).getTime() / 1000;
    let value = startPrice;

    for (let i = 0; i < numberOfCandles; i++) {
        time += 24 * 60 * 60;
        let change = (Math.random() - 0.5) * volatility;
        let open = value;
        let close = value + change;
        let high = Math.max(open, close) + Math.random() * volatility * 0.5;
        let low = Math.min(open, close) - Math.random() * volatility * 0.5;
        value = close;

        data.push({
            time: time as any,
            open,
            high,
            low,
            close,
            value: close, // For line chart
        });
    }
    return data;
}

export function ChartWrapper() {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const seriesRef = useRef<ISeriesApi<"Candlestick"> | ISeriesApi<"Area"> | null>(null);
    const [chartType, setChartType] = useState<"candle" | "area">("area");
    const [activeTimeframe, setActiveTimeframe] = useState("1D");

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const handleResize = () => {
            chartRef.current?.applyOptions({ width: chartContainerRef.current!.clientWidth });
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: "transparent" },
                textColor: "rgba(255, 255, 255, 0.5)",
            },
            grid: {
                vertLines: { color: "rgba(255, 255, 255, 0.05)" },
                horzLines: { color: "rgba(255, 255, 255, 0.05)" },
            },
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            rightPriceScale: {
                borderColor: "rgba(255, 255, 255, 0.1)",
            },
            timeScale: {
                borderColor: "rgba(255, 255, 255, 0.1)",
                timeVisible: true,
            },

        });

        chartRef.current = chart;

        // Initial Series
        addSeries(chart, chartType);

        // Initial Animation
        const container = chartContainerRef.current;
        gsap.fromTo(container, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" });

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            chart.remove();
        };
    }, []);

    // Update series when chartType changes
    useEffect(() => {
        if (!chartRef.current) return;

        // Remove old series
        if (seriesRef.current) {
            chartRef.current.removeSeries(seriesRef.current);
        }

        addSeries(chartRef.current, chartType);

    }, [chartType]);


    const addSeries = (chart: IChartApi, type: "candle" | "area") => {
        if (type === "area") {
            const areaSeries = chart.addSeries(AreaSeries, {
                lineColor: "#3b82f6",
                topColor: "rgba(59, 130, 246, 0.4)",
                bottomColor: "rgba(59, 130, 246, 0.0)",
                lineWidth: 2,
            });
            areaSeries.setData(MOCK_DATA);
            seriesRef.current = areaSeries;

            // Animate the line drawing? (Hard with library, but we simulated entry with container)
            chart.timeScale().fitContent();

        } else {
            const candleSeries = chart.addSeries(CandlestickSeries, {
                upColor: "#22c55e",
                downColor: "#ef4444",
                borderVisible: false,
                wickUpColor: "#22c55e",
                wickDownColor: "#ef4444",
            });
            candleSeries.setData(MOCK_DATA);
            seriesRef.current = candleSeries;
            chart.timeScale().fitContent();
        }
    };


    return (
        <div className="glass-card rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 z-10 relative">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-white tracking-tight">$189.45</h2>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-green-400 font-bold">+1.25%</span>
                        <span className="text-white/40 text-sm">Today</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/5">
                    <button
                        onClick={() => setChartType("area")}
                        className={cn(
                            "p-2 rounded-md transition-all",
                            chartType === "area" ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "text-white/40 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <LineChart className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setChartType("candle")}
                        className={cn(
                            "p-2 rounded-md transition-all",
                            chartType === "candle" ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "text-white/40 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <CandlestickChart className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div ref={chartContainerRef} className="flex-1 w-full h-full min-h-[400px]" />

            <div className="flex items-center gap-2 mt-4 z-10 relative">
                {["1H", "1D", "1W", "1M", "1Y", "ALL"].map((tf) => (
                    <button
                        key={tf}
                        onClick={() => setActiveTimeframe(tf)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-xs font-bold transition-all border border-transparent",
                            activeTimeframe === tf
                                ? "bg-white text-black"
                                : "text-white/40 hover:text-white hover:border-white/10"
                        )}
                    >
                        {tf}
                    </button>
                ))}
            </div>
        </div>
    );
}
