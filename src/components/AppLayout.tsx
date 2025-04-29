
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { 
  Book, 
  Home, 
  Award, 
  LogOut, 
  Menu, 
  X, 
  ListTodo, 
  TrendingUp,
  Code,
  MessageCircle
} from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const handleLogout = () => {
    // Clear the session storage
    sessionStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile sidebar toggle */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-white rounded-full p-2 shadow-md"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex`}>
        <div className="w-64 bg-gaming-dark/90 backdrop-blur-lg text-white flex flex-col">
          <div className="p-5 border-b border-gray-700">
            <h2 className="text-xl gaming-heading">QuestCode</h2>
          </div>
          
          <nav className="flex-1 overflow-y-auto pt-5 pb-4">
            <ul className="space-y-1 px-3">
              <li>
                <Link to="/home" className="flex items-center p-3 text-gray-300 hover:bg-gaming-purple/20 rounded-lg transition-colors">
                  <Home className="mr-3 h-5 w-5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/tasks" className="flex items-center p-3 text-gray-300 hover:bg-gaming-purple/20 rounded-lg transition-colors">
                  <ListTodo className="mr-3 h-5 w-5" />
                  <span>Tasks</span>
                </Link>
              </li>
              <li>
                <Link to="/progress" className="flex items-center p-3 text-gray-300 hover:bg-gaming-purple/20 rounded-lg transition-colors">
                  <TrendingUp className="mr-3 h-5 w-5" />
                  <span>Progress</span>
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="flex items-center p-3 text-gray-300 hover:bg-gaming-purple/20 rounded-lg transition-colors">
                  <Award className="mr-3 h-5 w-5" />
                  <span>Rewards</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="flex items-center p-3 text-gray-300 hover:bg-gaming-purple/20 rounded-lg transition-colors">
                  <Code className="mr-3 h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="mt-6 pt-6 border-t border-gray-700">
                <Link to="/feedback" className="flex items-center p-3 text-gray-300 hover:bg-gaming-purple/20 rounded-lg transition-colors">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  <span>Feedback</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 border-t border-gray-700">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center text-white border-gray-500 hover:bg-gaming-purple/20"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 md:ml-64">
        <div className="p-6 md:p-8 max-w-screen overflow-x-hidden min-h-screen">
          {children}
        </div>
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AppLayout;
