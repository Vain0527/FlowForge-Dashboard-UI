
import { MoreHorizontal, Users, Calendar, TrendingUp, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ActiveProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      name: "Mobile App Redesign",
      description: "Complete UI/UX overhaul for iOS and Android",
      progress: 68,
      team: ["Alex", "Sarah", "Mike"],
      dueDate: "Dec 15",
      status: "active",
      priority: "high",
      tasksCompleted: 14,
      totalTasks: 21,
      color: "primary"
    },
    {
      id: 2,
      name: "Marketing Website",
      description: "New landing page with improved conversion",
      progress: 45,
      team: ["Emma", "John"],
      dueDate: "Dec 22",
      status: "active",
      priority: "medium",
      tasksCompleted: 8,
      totalTasks: 16,
      color: "accent"
    },
    {
      id: 3,
      name: "API Integration",
      description: "Connect third-party services and data sources",
      progress: 82,
      team: ["David", "Lisa", "Tom", "Anna"],
      dueDate: "Dec 10",
      status: "review",
      priority: "high",
      tasksCompleted: 18,
      totalTasks: 22,
      color: "secondary"
    },
    {
      id: 4,
      name: "User Research",
      description: "Conduct interviews and usability testing",
      progress: 25,
      team: ["Sofia", "James"],
      dueDate: "Jan 5",
      status: "planning",
      priority: "low",
      tasksCompleted: 3,
      totalTasks: 12,
      color: "muted"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-primary';
      case 'review': return 'text-accent';
      case 'planning': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Active Projects</h2>
          <p className="text-muted-foreground">Your current workspace overview</p>
        </div>
        <Button variant="outline" className="glass-card border-0">
          View All Projects
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-6 group hover:glow transition-all duration-500 cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs border ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              </div>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">{project.progress}%</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2">
                <div 
                  className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out glow"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">
                  <span className="font-medium">{project.tasksCompleted}</span>
                  <span className="text-muted-foreground">/{project.totalTasks}</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">{project.team.length}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">{project.dueDate}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)} bg-current`} />
                <span className={`text-sm capitalize ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <div className="flex -space-x-2">
                {project.team.slice(0, 3).map((member, index) => (
                  <div
                    key={index}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {member[0]}
                  </div>
                ))}
                {project.team.length > 3 && (
                  <div className="w-7 h-7 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium">
                    +{project.team.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveProjectsGrid;
