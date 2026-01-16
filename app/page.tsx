import { Header } from "@/components/Header";
import { StockList } from "@/components/StockList";
import { ChartWrapper } from "@/components/ChartWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <Header />

      <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 md:p-6 z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
          {/* Main Chart Area */}
          <div className="lg:col-span-9 h-full flex flex-col gap-6">
            <ChartWrapper />
            {/* Future: Positions / Orders Table could go here */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 h-full">
            <StockList />
          </div>
        </div>
      </main>
    </div>
  );
}
