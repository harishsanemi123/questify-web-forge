
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, ListTodo, TrendingUp, Award, ChevronRight } from 'lucide-react';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = sessionStorage.getItem('user');
    if (!user) {
      navigate('/');
      return;
    }
    setUsername(user);
  }, [navigate]);

  const quickActions = [
    {
      title: 'Tasks',
      description: 'View your learning tasks and track completion',
      icon: <ListTodo className="h-10 w-10 text-gaming-orange" />,
      path: '/tasks',
    },
    {
      title: 'Progress',
      description: 'Check your learning progress and achievements',
      icon: <TrendingUp className="h-10 w-10 text-gaming-blue" />,
      path: '/progress',
    },
    {
      title: 'Rewards',
      description: 'See rewards earned and available to unlock',
      icon: <Award className="h-10 w-10 text-gaming-pink" />,
      path: '/rewards',
    },
    {
      title: 'Dashboard',
      description: 'Access all learning resources and lessons',
      icon: <Book className="h-10 w-10 text-gaming-purple" />,
      path: '/dashboard',
    }
  ];

  const progressStats = [
    { name: 'HTML Progress', value: 45 },
    { name: 'CSS Progress', value: 30 },
    { name: 'JavaScript Progress', value: 15 },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative">
        <div className="rounded-xl bg-gradient-to-r from-gaming-purple to-gaming-blue p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {username}!</h1>
          <p className="text-white/80 mb-6">Ready to continue your coding adventure?</p>
          <Button onClick={() => navigate('/dashboard')} className="bg-white text-gaming-purple hover:bg-white/90">
            Continue Learning
          </Button>
        </div>
        
        {/* Floating Stats Card */}
        <Card className="gaming-card mt-6 md:absolute md:top-1/2 md:right-6 md:transform md:-translate-y-1/2 md:w-72 md:mt-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Your Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {progressStats.map((stat) => (
              <div key={stat.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{stat.name}</span>
                  <span className="text-sm font-medium">{stat.value}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-value" style={{ width: `${stat.value}%` }}></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold mb-6 gaming-heading">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickActions.map((action) => (
            <Card key={action.title} className="gaming-card hover:scale-[1.01] transition-transform cursor-pointer" 
                  onClick={() => navigate(action.path)}>
              <CardContent className="p-6 flex items-start">
                <div className="mr-4">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 self-center" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-2xl font-bold mb-6 gaming-heading">Recent Activity</h2>
        <Card className="gaming-card">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center pb-4 border-b">
              <div className="w-10 h-10 rounded-full bg-gaming-blue/20 flex items-center justify-center mr-4">
                <Book className="h-5 w-5 text-gaming-blue" />
              </div>
              <div>
                <p className="font-medium">HTML Basics - Completed</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center pb-4 border-b">
              <div className="w-10 h-10 rounded-full bg-gaming-orange/20 flex items-center justify-center mr-4">
                <Award className="h-5 w-5 text-gaming-orange" />
              </div>
              <div>
                <p className="font-medium">Badge Earned: HTML Novice</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gaming-purple/20 flex items-center justify-center mr-4">
                <TrendingUp className="h-5 w-5 text-gaming-purple" />
              </div>
              <div>
                <p className="font-medium">Learning Streak: 3 Days</p>
                <p className="text-sm text-gray-500">Keep it up!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
