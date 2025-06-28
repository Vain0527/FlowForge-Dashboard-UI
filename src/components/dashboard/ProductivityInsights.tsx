
import { TrendingUp, Target, Clock, Zap } from "lucide-react";

const ProductivityInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Weekly Productivity",
      value: "127%",
      change: "+23%",
      description: "Above your average",
      color: "primary"
    },
    {
      icon: Target,
      title: "Goals Completed",
      value: "8/10",
      change: "+2",
      description: "This week",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Focus Time",
      value: "24.5h",
      change: "+4.2h",
      description: "Deep work sessions",
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Streak",
      value: "12 days",
      change: "Personal best!",
      description: "Consecutive productive days",
      color: "primary"
    }
  ];

  const weeklyData = [65, 78, 82, 95, 88, 92, 89];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Productivity Insights</h2>
        <p className="text-muted-foreground">Your performance patterns this week</p>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div
              key={index}
              className="glass-card rounded-xl p-4 group hover:glow transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  insight.color === 'primary' ? 'gradient-primary glow' :
                  insight.color === 'accent' ? 'bg-accent/20 border border-accent/30' :
                  'bg-secondary/50'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-bold">{insight.value}</div>
                  <div className="text-xs text-muted-foreground">{insight.title}</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{insight.description}</span>
                <span className={`text-sm font-medium ${
                  insight.change.includes('+') ? 'text-green-400' : 
                  insight.change.includes('!') ? 'text-accent' : 'text-muted-foreground'
                }`}>
                  {insight.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Weekly Chart */}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Weekly Pattern</h3>
            <p className="text-sm text-muted-foreground">Productivity score by day</p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 rounded-full gradient-primary" />
            <span className="text-muted-foreground">Productivity Score</span>
          </div>
        </div>

        <div className="flex items-end justify-between space-x-2 h-32">
          {weeklyData.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center space-y-2">
              <div className="w-full flex items-end justify-center">
                <div
                  className="w-full max-w-8 gradient-primary rounded-t-lg transition-all duration-1000 ease-out glow"
                  style={{ 
                    height: `${(value / 100) * 100}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{days[index]}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Peak Performance</p>
              <p className="text-xs text-muted-foreground">Thursday was your most productive day this week!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityInsights;
