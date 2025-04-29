
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, FileText, Layout } from "lucide-react";

const Dashboard = () => {
  const htmlResources = [
    {
      title: "HTML5 Fundamentals",
      description: "Learn the basic building blocks of web pages",
      level: "Beginner",
      topics: ["Tags", "Attributes", "Forms", "Semantics"],
      link: "https://coddy.tech/html"
    },
    {
      title: "HTML Forms & Validation",
      description: "Create interactive forms with validation",
      level: "Intermediate",
      topics: ["Input types", "Form structure", "Client-side validation"],
      link: "https://coddy.tech/html-forms"
    },
    {
      title: "Semantic HTML",
      description: "Write meaningful HTML that improves accessibility",
      level: "Intermediate",
      topics: ["Semantic tags", "Accessibility", "Best practices"],
      link: "https://coddy.tech/semantic-html"
    }
  ];

  const cssResources = [
    {
      title: "CSS Basics",
      description: "Learn to style your web pages with CSS",
      level: "Beginner",
      topics: ["Selectors", "Box Model", "Colors", "Typography"],
      link: "https://flexboxfroggy.com/"
    },
    {
      title: "Flexbox Froggy",
      description: "Master CSS flexbox layout through a fun game",
      level: "Intermediate",
      topics: ["Flex containers", "Flex items", "Alignment", "Ordering"],
      link: "https://flexboxfroggy.com/"
    },
    {
      title: "CSS Grid Garden",
      description: "Learn CSS grid layout with an interactive game",
      level: "Intermediate",
      topics: ["Grid containers", "Grid items", "Template areas", "Grid spans"],
      link: "https://cssgridgarden.com/"
    }
  ];

  const jsResources = [
    {
      title: "JavaScript Fundamentals",
      description: "Learn the basics of programming with JavaScript",
      level: "Beginner",
      topics: ["Variables", "Data Types", "Functions", "Control Flow"],
      link: "https://javascript.info/"
    },
    {
      title: "DOM Manipulation",
      description: "Learn to interact with web pages using JavaScript",
      level: "Intermediate",
      topics: ["Selectors", "Events", "Modifying content", "Traversal"],
      link: "https://javascript.info/dom"
    },
    {
      title: "Modern JavaScript",
      description: "Advanced JavaScript concepts and ES6+ features",
      level: "Advanced",
      topics: ["Arrow functions", "Destructuring", "Modules", "Async/Await"],
      link: "https://javascript.info/js"
    }
  ];

  const getIconByTab = (tab: string) => {
    switch (tab) {
      case 'html':
        return <FileText className="h-16 w-16 text-gaming-orange" />;
      case 'css':
        return <Layout className="h-16 w-16 text-gaming-blue" />;
      case 'javascript':
        return <Code className="h-16 w-16 text-gaming-purple" />;
      default:
        return null;
    }
  };

  const renderResource = (resource: any) => (
    <Card key={resource.title} className="gaming-card">
      <CardHeader>
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium mr-2">Level:</span>
          <span className={`text-sm px-2 py-1 rounded-full ${
            resource.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
            resource.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 
            'bg-purple-100 text-purple-800'
          }`}>
            {resource.level}
          </span>
        </div>
        <div className="mt-4">
          <span className="text-sm font-medium">Topics:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {resource.topics.map((topic: string) => (
              <span key={topic} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="gaming-btn w-full" asChild>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">Start Learning</a>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gaming-heading mb-2">Learning Dashboard</h1>
        <p className="text-muted-foreground">Explore resources to master web development</p>
      </div>

      <Tabs defaultValue="html" className="space-y-6">
        <TabsList className="grid grid-cols-3 gap-4 bg-transparent">
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

        {/* HTML Content */}
        <TabsContent value="html" className="space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg bg-gaming-orange/10">
            {getIconByTab('html')}
            <div>
              <h2 className="text-2xl font-bold text-gaming-orange mb-2">HTML</h2>
              <p className="text-muted-foreground">
                HTML (HyperText Markup Language) is the standard markup language for creating web pages.
                It describes the structure of a web page and consists of a series of elements that tell
                the browser how to display the content.
              </p>
              <div className="mt-4">
                <div className="progress-bar">
                  <div className="progress-value" style={{ width: '45%', backgroundColor: '#F97316' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>45% Complete</span>
                  <span>3/7 Lessons</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {htmlResources.map(renderResource)}
          </div>
        </TabsContent>

        {/* CSS Content */}
        <TabsContent value="css" className="space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg bg-gaming-blue/10">
            {getIconByTab('css')}
            <div>
              <h2 className="text-2xl font-bold text-gaming-blue mb-2">CSS</h2>
              <p className="text-muted-foreground">
                CSS (Cascading Style Sheets) is used to style and layout web pages. It describes
                how HTML elements should be displayed on screen, paper, or in other media.
                CSS saves a lot of work and can control the layout of multiple web pages all at once.
              </p>
              <div className="mt-4">
                <div className="progress-bar">
                  <div className="progress-value" style={{ width: '30%', backgroundColor: '#1EAEDB' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>30% Complete</span>
                  <span>2/6 Lessons</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cssResources.map(renderResource)}
          </div>
        </TabsContent>

        {/* JavaScript Content */}
        <TabsContent value="javascript" className="space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg bg-gaming-purple/10">
            {getIconByTab('javascript')}
            <div>
              <h2 className="text-2xl font-bold text-gaming-purple mb-2">JavaScript</h2>
              <p className="text-muted-foreground">
                JavaScript is a programming language that enables interactive web pages. It is an
                essential part of web applications, and the vast majority of websites use it for
                client-side behavior, and all major web browsers have a dedicated JavaScript engine to execute it.
              </p>
              <div className="mt-4">
                <div className="progress-bar">
                  <div className="progress-value" style={{ width: '15%', backgroundColor: '#9b87f5' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>15% Complete</span>
                  <span>1/8 Lessons</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jsResources.map(renderResource)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
