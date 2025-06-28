
import { Calendar, AlertTriangle, Clock } from "lucide-react";

const UpcomingDeadlines = () => {
  const deadlines = [
    {
      title: "API Integration Review",
      project: "Backend Development",
      date: "Today",
      time: "4:00 PM",
      urgency: "high",
      hoursLeft: 6
    },
    {
      title: "Homepage Prototype",
      project: "Mobile App Redesign",
      date: "Tomorrow",
      time: "10:00 AM",
      urgency: "medium",
      hoursLeft: 18
    },
    {
      title: "User Testing Session",
      project: "UX Research",
      date: "Dec 12",
      time: "2:00 PM",
      urgency: "medium",
      hoursLeft: 72
    },
    {
      title: "Final Presentation",
      project: "Marketing Website",
      date: "Dec 15",
      time: "9:00 AM",
      urgency: "low",
      hoursLeft: 144
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/10 border-green-500/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'high': return AlertTriangle;
      case 'medium': return Clock;
      default: return Calendar;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Upcoming Deadlines</h3>
          <p className="text-sm text-muted-foreground">Stay on track</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
          <Calendar className="w-4 h-4 text-accent" />
        </div>
      </div>

      <div className="space-y-3">
        {deadlines.map((deadline, index) => {
          const UrgencyIcon = getUrgencyIcon(deadline.urgency);
          return (
            <div
              key={index}
              className="p-3 rounded-xl glass hover:glow transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${getUrgencyColor(deadline.urgency)}`}>
                  <UrgencyIcon className="w-4 h-4" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                      {deadline.title}
                    </h4>
                    <span className="text-xs text-muted-foreground ml-2">
                      {deadline.hoursLeft}h left
                    </span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">{deadline.project}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">{deadline.date}</span>
                    <span className="text-xs text-muted-foreground">{deadline.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border/50 pt-4">
        <div className="text-center">
          <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View all deadlines →
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
