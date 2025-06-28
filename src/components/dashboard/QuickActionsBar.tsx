
import { Plus, Play, Folder, CheckSquare, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActionsBar = () => {
  const actions = [
    {
      icon: Play,
      label: "Start Session",
      description: "Begin focused work",
      color: "primary",
      onClick: () => console.log("Start session")
    },
    {
      icon: Plus,
      label: "New Task",
      description: "Add quick task",
      color: "accent",
      onClick: () => console.log("New task")
    },
    {
      icon: Folder,
      label: "New Project",
      description: "Create project",
      color: "secondary",
      onClick: () => console.log("New project")
    },
    {
      icon: MessageSquare,
      label: "Ask AI",
      description: "Get assistance",
      color: "primary",
      onClick: () => console.log("Ask AI")
    }
  ];

  return (
    <div className="glass-card rounded-2xl p-6 group hover:glow-accent transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Quick Actions</h3>
          <p className="text-sm text-muted-foreground">Jump into productivity mode</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              onClick={action.onClick}
              className="glass-card h-auto p-4 flex flex-col items-center space-y-2 border-0 hover:scale-105 transition-all duration-300 group/action"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                action.color === 'primary' ? 'gradient-primary glow' :
                action.color === 'accent' ? 'bg-accent/20 border border-accent/30' :
                'bg-secondary/50 border border-secondary'
              } group-hover/action:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">{action.label}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          );
        })}
      </div>

      <div className="mt-6 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
            <span className="text-xs font-bold">AI</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground/90">Ready to boost your productivity?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionsBar;
