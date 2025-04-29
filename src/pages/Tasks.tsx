
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { CheckCircle, Circle, Clock, ListTodo, Award } from "lucide-react";

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  dueDate: string;
  xpReward: number;
}

const Tasks = () => {
  // Sample tasks data
  const initialTasks: Task[] = [
    {
      id: 1,
      title: "Complete HTML Basics Course",
      description: "Learn the fundamentals of HTML structure and elements",
      category: "html",
      completed: true,
      dueDate: "2025-05-05",
      xpReward: 100
    },
    {
      id: 2,
      title: "Build Your First Web Page",
      description: "Create a simple web page with HTML",
      category: "html",
      completed: false,
      dueDate: "2025-05-07",
      xpReward: 150
    },
    {
      id: 3,
      title: "Learn CSS Selectors",
      description: "Master different types of CSS selectors",
      category: "css",
      completed: false,
      dueDate: "2025-05-09",
      xpReward: 120
    },
    {
      id: 4,
      title: "CSS Box Model Challenge",
      description: "Complete the interactive CSS box model exercise",
      category: "css",
      completed: false,
      dueDate: "2025-05-12",
      xpReward: 180
    },
    {
      id: 5,
      title: "JavaScript Variables & Data Types",
      description: "Learn about different variable types in JavaScript",
      category: "javascript",
      completed: false,
      dueDate: "2025-05-15",
      xpReward: 200
    },
    {
      id: 6,
      title: "Build a Simple Calculator",
      description: "Create a basic calculator using JavaScript",
      category: "javascript",
      completed: false,
      dueDate: "2025-05-18",
      xpReward: 250
    }
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(prevTasks => 
      prevTasks.map(task => {
        if (task.id === taskId) {
          const newCompletedState = !task.completed;
          
          // Show toast notification when completing a task
          if (newCompletedState) {
            toast.success(`Task completed! +${task.xpReward} XP`, {
              description: `You've earned ${task.xpReward} XP for completing "${task.title}"!`,
              icon: <Award className="h-4 w-4" />
            });
          }
          
          return { ...task, completed: newCompletedState };
        }
        return task;
      })
    );
  };

  const getTasksByCategory = (category: string) => {
    return tasks.filter(task => task.category === category);
  };

  const getCompletedTasks = () => {
    return tasks.filter(task => task.completed);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric'
    }).format(date);
  };

  const renderTaskList = (taskList: Task[]) => {
    if (taskList.length === 0) {
      return (
        <div className="text-center py-10">
          <ListTodo className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
          <p className="text-muted-foreground">No tasks available</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {taskList.map((task) => (
          <Card key={task.id} className={`gaming-card transition-all ${task.completed ? 'border-gaming-purple/50 bg-gaming-purple/5' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="mt-1" onClick={() => toggleTaskCompletion(task.id)}>
                  {task.completed ? (
                    <CheckCircle className="h-6 w-6 text-gaming-purple cursor-pointer" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground cursor-pointer" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {task.title}
                  </h3>
                  <p className={`text-sm ${task.completed ? 'text-muted-foreground/70' : 'text-muted-foreground'}`}>
                    {task.description}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Due {formatDate(task.dueDate)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gaming-orange">
                      <Award className="h-3 w-3 mr-1" />
                      <span>{task.xpReward} XP</span>
                    </div>
                  </div>
                </div>
                {!task.completed && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-sm border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10"
                    onClick={() => toggleTaskCompletion(task.id)}
                  >
                    Complete
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gaming-heading mb-2">Learning Tasks</h1>
        <p className="text-muted-foreground">Track and complete your learning tasks to earn rewards</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Your Progress</h2>
          <div className="text-sm text-muted-foreground">
            {getCompletedTasks().length} of {tasks.length} tasks completed
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 h-3 w-32 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-gaming-purple to-gaming-blue h-full"
              style={{ width: `${(getCompletedTasks().length / tasks.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium">
            {Math.round((getCompletedTasks().length / tasks.length) * 100)}%
          </span>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
          <TabsTrigger value="all" className="data-[state=active]:gaming-gradient data-[state=active]:text-white">
            All Tasks
          </TabsTrigger>
          <TabsTrigger value="html" className="data-[state=active]:gaming-gradient data-[state=active]:text-white">
            HTML
          </TabsTrigger>
          <TabsTrigger value="css" className="data-[state=active]:gaming-gradient data-[state=active]:text-white">
            CSS
          </TabsTrigger>
          <TabsTrigger value="javascript" className="data-[state=active]:gaming-gradient data-[state=active]:text-white">
            JavaScript
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {renderTaskList(tasks)}
        </TabsContent>

        <TabsContent value="html">
          {renderTaskList(getTasksByCategory('html'))}
        </TabsContent>

        <TabsContent value="css">
          {renderTaskList(getTasksByCategory('css'))}
        </TabsContent>

        <TabsContent value="javascript">
          {renderTaskList(getTasksByCategory('javascript'))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tasks;
