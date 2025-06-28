
import { useState } from "react";
import TodaysFocusPanel from "@/components/dashboard/TodaysFocusPanel";
import QuickActionsBar from "@/components/dashboard/QuickActionsBar";
import ActiveProjectsGrid from "@/components/dashboard/ActiveProjectsGrid";
import ProductivityInsights from "@/components/dashboard/ProductivityInsights";
import RecentActivityFeed from "@/components/dashboard/RecentActivityFeed";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import AISuggestions from "@/components/dashboard/AISuggestions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-10 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 glass">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center glow">
                  <span className="text-lg font-bold text-white">PM</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold">Project Manager</h1>
                  <p className="text-sm text-muted-foreground">Your AI-powered productivity hub</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">Welcome back, Alex! 👋</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Today's Focus & Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TodaysFocusPanel />
                <QuickActionsBar />
              </div>
              
              {/* Active Projects */}
              <ActiveProjectsGrid />
              
              {/* Productivity Insights */}
              <ProductivityInsights />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-6">
              <AISuggestions />
              <UpcomingDeadlines />
              <RecentActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
