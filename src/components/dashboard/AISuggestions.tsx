
import { Brain, ArrowRight, Lightbulb, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const AISuggestions = () => {
  const suggestions = [
    {
      type: "continue",
      title: "Ready to continue homepage redesign?",
      description: "You made great progress yesterday. The header component is 80% complete.",
      action: "Continue Work",
      priority: "high",
      estimatedTime: "45 min"
    },
    {
      type: "optimize",
      title: "Consider tackling high-priority tasks now",
      description: "You're most productive at this time. 3 urgent tasks are waiting.",
      action: "View Tasks",
      priority: "medium",
      estimatedTime: "30 min"
    },
    {
      type: "break",
      title: "Time for a productivity break?",
      description: "You've been focused for 2 hours. A short break could boost your next session.",
      action: "Take Break",
      priority: "low",
      estimatedTime: "15 min"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-primary/30 bg-primary/5';
      case 'medium': return 'border-accent/30 bg-accent/5';
      case 'low': return 'border-muted/30 bg-muted/5';
      default: return 'border-muted/30 bg-muted/5';
    }
  };

  const getPriorityIcon = (type: string) => {
    switch (type) {
      case 'continue': return ArrowRight;
      case 'optimize': return Lightbulb;
      case 'break': return Clock;
      default: return Brain;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center glow animate-pulse-glow">
          <Brain className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">AI Assistant</h3>
          <p className="text-sm text-muted-foreground">Smart productivity suggestions</p>
        </div>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion, index) => {
          const Icon = getPriorityIcon(suggestion.type);
          return (
            <div
              key={index}
              className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${getPriorityColor(suggestion.priority)}`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center mt-1">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">{suggestion.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{suggestion.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Button size="sm" variant="ghost" className="text-xs px-3 h-7 glass-card border-0">
                      {suggestion.action}
                    </Button>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{suggestion.estimatedTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border/50 pt-4">
        <Button variant="outline" className="w-full glass-card border-0 group">
          <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Chat with AI Assistant
        </Button>
      </div>
    </div>
  );
};

export default AISuggestions;
