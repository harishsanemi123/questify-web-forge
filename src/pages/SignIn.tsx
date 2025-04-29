
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { LogIn } from 'lucide-react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login logic - in a real app, you'd validate credentials
    if (username && password) {
      // Store user info in session storage
      sessionStorage.setItem('user', username);
      toast.success('Sign in successful!');
      navigate('/home');
    } else {
      toast.error('Please enter both username and password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gaming-purple/10 via-gaming-blue/10 to-gaming-pink/10 p-4">
      <div className="animate-float max-w-md w-full text-center mb-8">
        <h1 className="text-5xl font-bold gaming-heading mb-2">QuestCode</h1>
        <p className="text-xl text-gray-600">Your coding adventure begins here</p>
      </div>
      
      <Card className="w-full max-w-md gaming-card animate-pulse-glow">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Sign in to Your Account</CardTitle>
          <CardDescription>
            Enter your credentials to continue your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                placeholder="johndoe" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="border-gaming-purple/30 focus:border-gaming-purple"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="border-gaming-purple/30 focus:border-gaming-purple"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            className="w-full gaming-btn" 
            onClick={handleSignIn}
          >
            <LogIn className="w-4 h-4 mr-2" /> Sign In
          </Button>
          <div className="text-sm text-gray-500">
            Don't have an account? <span className="text-gaming-purple hover:underline cursor-pointer">Sign up</span>
          </div>
        </CardFooter>
      </Card>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>© 2025 QuestCode. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SignIn;
