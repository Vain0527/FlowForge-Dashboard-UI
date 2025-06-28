
import { FileText, CheckSquare, Users, MessageSquare, GitCommit } from "lucide-react";

const RecentActivityFeed = () => {
  const activities = [
    {
      type: "task_completed",
      user: "You",
      action: "completed task",
      target: "Navigation component",
      project: "Mobile App Redesign",
      time: "2 minutes ago",
      icon: CheckSquare,
      color: "text-green-400"
    },
    {
      type: "file_updated",
      user: "Sarah",
      action: "updated file",
      target: "homepage.tsx",
      project: "Marketing Website",
      time: "15 minutes ago",
      icon: FileText,
      color: "text-blue-400"
    },
    {
      type: "comment",
      user: "Mike",
      action: "commented on",
      target: "API Integration",
      project: "Backend Development",
      time: "1 hour ago",
      icon: MessageSquare,
      color: "text-accent"
    },
    {
      type: "team_joined",
      user: "Emma",
      action: "joined project",
      target: "UX Research",
      project: "User Testing",
      time: "2 hours ago",
      icon: Users,
      color: "text-primary"
    },
    {
      type: "commit",
      user: "David",
      action: "pushed changes to",
      target: "authentication-flow",
      project: "API Integration",
      time: "3 hours ago",
      icon: GitCommit,
      color: "text-purple-400"
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">Team updates</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50 flex items-center justify-center text-xs font-medium">
                  {getInitials(activity.user)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon className={`w-4 h-4 ${activity.color}`} />
                  <span className="text-sm">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-muted-foreground"> {activity.action} </span>
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {activity.target}
                    </span>
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{activity.project}</span>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border/50 pt-4">
        <div className="text-center">
          <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all activity →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityFeed;
