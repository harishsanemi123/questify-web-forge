
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Legend
} from "recharts";
import { Trophy, Award, Star, Calendar, TrendingUp, Code } from "lucide-react";

const Progress = () => {
  // Sample activity data
  const activityData = [
    { date: "Apr 23", minutes: 15, tasks: 1 },
    { date: "Apr 24", minutes: 25, tasks: 2 },
    { date: "Apr 25", minutes: 45, tasks: 3 },
    { date: "Apr 26", minutes: 30, tasks: 2 },
    { date: "Apr 27", minutes: 60, tasks: 4 },
    { date: "Apr 28", minutes: 50, tasks: 3 },
    { date: "Apr 29", minutes: 70, tasks: 5 },
  ];

  // Sample skills data
  const skillsData = [
    { name: "HTML", mastery: 45, color: "#F97316" },
    { name: "CSS", mastery: 30, color: "#1EAEDB" },
    { name: "JavaScript", mastery: 15, color: "#9b87f5" },
  ];

  // Sample achievements
  const achievements = [
    {
      title: "HTML Novice",
      description: "Completed the HTML basics course",
      icon: <Code className="h-6 w-6 text-gaming-orange" />,
      earned: true,
      date: "Apr 27, 2025"
    },
    {
      title: "Study Streak: 7 Days",
      description: "Studied for 7 consecutive days",
      icon: <Calendar className="h-6 w-6 text-gaming-blue" />,
      earned: true,
      date: "Apr 29, 2025"
    },
    {
      title: "Fast Learner",
      description: "Completed 5 tasks in a single day",
      icon: <TrendingUp className="h-6 w-6 text-gaming-purple" />,
      earned: true,
      date: "Apr 29, 2025"
    },
    {
      title: "CSS Wizard",
      description: "Complete all CSS challenges",
      icon: <Code className="h-6 w-6 text-gaming-blue" />,
      earned: false,
      progress: 30
    },
    {
      title: "JavaScript Journeyman",
      description: "Build 3 projects with JavaScript",
      icon: <Code className="h-6 w-6 text-gaming-purple" />,
      earned: false,
      progress: 0
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gaming-heading mb-2">Your Progress</h1>
        <p className="text-muted-foreground">Track your learning journey and achievements</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="gaming-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total XP Earned</CardTitle>
            <Trophy className="h-4 w-4 text-gaming-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">+250 XP this week</p>
          </CardContent>
        </Card>
        <Card className="gaming-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <Award className="h-4 w-4 text-gaming-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 tasks this week</p>
          </CardContent>
        </Card>
        <Card className="gaming-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Star className="h-4 w-4 text-gaming-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 Days</div>
            <p className="text-xs text-muted-foreground">Best: 7 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Activity Chart */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle>Learning Activity</CardTitle>
          <CardDescription>Your daily learning time and tasks completed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={activityData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="minutes"
                  name="Minutes Studied"
                  stroke="#9b87f5"
                  activeDot={{ r: 8 }}
                />
                <Line yAxisId="right" type="monotone" dataKey="tasks" name="Tasks Completed" stroke="#F97316" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Skills Progress */}
      <Card className="gaming-card">
        <CardHeader>
          <CardTitle>Skills Mastery</CardTitle>
          <CardDescription>Your progress in each technology</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={skillsData}
                layout="vertical"
                margin={{
                  top: 20,
                  right: 30,
                  left: 40,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="mastery" name="Mastery Level" radius={[0, 4, 4, 0]}>
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-bold gaming-heading mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.title} 
              className={`gaming-card ${achievement.earned ? 'border-gaming-purple/50' : 'opacity-70'}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.earned 
                      ? 'bg-gaming-purple/20' 
                      : 'bg-gray-200'
                  }`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
                {achievement.earned ? (
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gaming-purple">
                      <Award className="h-4 w-4 mr-1" />
                      Earned
                    </span>
                    <span className="text-muted-foreground">{achievement.date}</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="progress-bar">
                      <div 
                        className="progress-value" 
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-right text-muted-foreground">
                      {achievement.progress}% complete
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;
