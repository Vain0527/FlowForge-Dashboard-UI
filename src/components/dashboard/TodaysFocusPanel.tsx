
import { useState, useEffect } from "react";
import { Play, Pause, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

const TodaysFocusPanel = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(2340); // seconds
  const [progress, setProgress] = useState(68);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:glow transition-all duration-500">
      <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Today's Focus</h3>
            <p className="text-sm text-muted-foreground">Mobile App Redesign</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant={isActive ? "secondary" : "default"}
              onClick={() => setIsActive(!isActive)}
              className="glass-card border-0"
            >
              {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsActive(false)}
              className="glass-card border-0"
            >
              <Square className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Progress Ring */}
          <div className="relative">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="hsl(var(--muted))"
                strokeWidth="6"
                fill="transparent"
                className="opacity-20"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#progressGradient)"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
                style={{
                  filter: isActive ? 'drop-shadow(0 0 6px hsl(var(--primary)))' : 'none'
                }}
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold">{progress}%</div>
                <div className="text-xs text-muted-foreground">Complete</div>
              </div>
            </div>
          </div>

          {/* Time and Stats */}
          <div className="flex-1">
            <div className="mb-4">
              <div className="text-2xl font-mono font-bold mb-1">{formatTime(timeElapsed)}</div>
              <div className="text-sm text-muted-foreground">Time elapsed today</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-primary">4/6</div>
                <div className="text-muted-foreground">Tasks done</div>
              </div>
              <div>
                <div className="font-semibold text-accent">2.5h</div>
                <div className="text-muted-foreground">Goal time</div>
              </div>
            </div>
          </div>
        </div>

        {isActive && (
          <div className="mt-4 flex items-center space-x-2 text-sm text-primary">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Currently working on: Header component design</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodaysFocusPanel;
