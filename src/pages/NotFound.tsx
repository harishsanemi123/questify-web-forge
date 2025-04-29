
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gaming-purple/10 via-gaming-blue/10 to-gaming-pink/10">
      <div className="text-center space-y-6 p-8">
        <div className="text-9xl font-bold gaming-heading">404</div>
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          The quest you're looking for doesn't exist or has moved to another realm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button asChild className="gaming-btn">
            <Link to="/home">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
