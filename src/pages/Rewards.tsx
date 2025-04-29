
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Award, Star, Trophy, Lock, Gift, Check } from "lucide-react";

interface Reward {
  id: number;
  title: string;
  description: string;
  type: 'badge' | 'certificate' | 'avatar';
  image: string;
  requiredXP: number;
  unlocked: boolean;
}

const Rewards = () => {
  const [userXP] = useState(1250);
  
  // Sample rewards data
  const initialRewards: Reward[] = [
    {
      id: 1,
      title: "HTML Novice Badge",
      description: "Complete the HTML basics course",
      type: 'badge',
      image: "🏆",
      requiredXP: 100,
      unlocked: true
    },
    {
      id: 2,
      title: "CSS Explorer Badge",
      description: "Complete 3 CSS challenges",
      type: 'badge',
      image: "🎨",
      requiredXP: 300,
      unlocked: true
    },
    {
      id: 3,
      title: "JavaScript Beginner Badge",
      description: "Complete the JavaScript introduction",
      type: 'badge',
      image: "📜",
      requiredXP: 500,
      unlocked: true
    },
    {
      id: 4,
      title: "Dedicated Learner Badge",
      description: "Study for 7 consecutive days",
      type: 'badge',
      image: "⭐",
      requiredXP: 700,
      unlocked: true
    },
    {
      id: 5,
      title: "HTML Master Badge",
      description: "Complete all HTML challenges",
      type: 'badge',
      image: "🌟",
      requiredXP: 1200,
      unlocked: true
    },
    {
      id: 6,
      title: "CSS Wizard Badge",
      description: "Master all CSS concepts",
      type: 'badge',
      image: "✨",
      requiredXP: 1500,
      unlocked: false
    },
    {
      id: 7,
      title: "Beginner Certificate",
      description: "Complete all beginner courses",
      type: 'certificate',
      image: "📜",
      requiredXP: 2000,
      unlocked: false
    },
    {
      id: 8,
      title: "Ninja Avatar",
      description: "Complete 10 JavaScript challenges",
      type: 'avatar',
      image: "🥷",
      requiredXP: 2500,
      unlocked: false
    }
  ];

  const [rewards] = useState<Reward[]>(initialRewards);

  const getRewardsByType = (type: string) => {
    return rewards.filter(reward => reward.type === type);
  };

  const getUnlockedRewards = () => {
    return rewards.filter(reward => reward.unlocked);
  };

  const claimReward = (reward: Reward) => {
    if (reward.unlocked) {
      toast.success(`${reward.title} claimed!`, {
        description: "Your reward has been added to your collection.",
        icon: <Trophy className="h-4 w-4" />,
      });
    } else if (userXP >= reward.requiredXP) {
      toast.success(`${reward.title} unlocked!`, {
        description: "You've earned enough XP to unlock this reward!",
        icon: <Award className="h-4 w-4" />,
      });
    } else {
      toast.error("Not enough XP", {
        description: `You need ${reward.requiredXP - userXP} more XP to unlock this reward.`,
        icon: <Lock className="h-4 w-4" />,
      });
    }
  };

  const renderRewardCard = (reward: Reward) => {
    const canUnlock = userXP >= reward.requiredXP;
    
    return (
      <Card key={reward.id} className={`gaming-card ${reward.unlocked ? 'border-gaming-purple/50' : ''}`}>
        <CardHeader className="text-center pb-2">
          <div className="text-4xl mb-2">{reward.image}</div>
          <CardTitle>{reward.title}</CardTitle>
          <CardDescription>{reward.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Badge variant={reward.unlocked ? "default" : "outline"} className={reward.unlocked ? "bg-gaming-purple" : ""}>
            {reward.unlocked ? (
              <Check className="h-3 w-3 mr-1" />
            ) : (
              <Lock className="h-3 w-3 mr-1" />
            )}
            {reward.unlocked ? "Unlocked" : `${reward.requiredXP} XP Required`}
          </Badge>
        </CardContent>
        <CardFooter>
          <Button
            className={`w-full ${
              reward.unlocked
                ? "gaming-btn"
                : canUnlock
                ? "bg-gradient-to-r from-gaming-purple/70 to-gaming-blue/70 text-white hover:from-gaming-purple hover:to-gaming-blue"
                : "bg-gray-200 text-gray-500 cursor-not-allowed hover:bg-gray-200"
            }`}
            onClick={() => claimReward(reward)}
            disabled={!reward.unlocked && !canUnlock}
          >
            {reward.unlocked ? "Claim Reward" : canUnlock ? "Unlock Now" : "Locked"}
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gaming-heading mb-2">Rewards</h1>
        <p className="text-muted-foreground">Earn badges, certificates, and avatars as you complete tasks</p>
      </div>

      <div className="flex items-center justify-between bg-gradient-to-r from-gaming-purple to-gaming-blue p-4 rounded-lg text-white">
        <div className="flex items-center">
          <Star className="h-10 w-10 mr-3" />
          <div>
            <h2 className="text-xl font-bold">Your XP</h2>
            <p className="text-white/80">Keep learning to earn more</p>
          </div>
        </div>
        <div className="text-3xl font-bold">{userXP}</div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
          <TabsTrigger value="all" className="data-[state=active]:gaming-gradient data-[state=active]:text-white">
            All Rewards
          </TabsTrigger>
          <TabsTrigger value="badges" className="data-[state=active]:gaming-gradient data-[state=active]:text-white">
            Badges
          </TabsTrigger>
          <TabsTrigger value="certificates" className="data-[state=active]:gaming-gradient data-[state=active]:text-white">
            Certificates
          </TabsTrigger>
          <TabsTrigger value="avatars" className="data-[state=active]:gaming-gradient data-[state=active]:text-white">
            Avatars
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map(renderRewardCard)}
          </div>
        </TabsContent>

        <TabsContent value="badges">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRewardsByType('badge').map(renderRewardCard)}
          </div>
        </TabsContent>

        <TabsContent value="certificates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRewardsByType('certificate').map(renderRewardCard)}
          </div>
        </TabsContent>

        <TabsContent value="avatars">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRewardsByType('avatar').map(renderRewardCard)}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-gaming-purple/10 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Your Collection</h2>
        <div className="flex flex-wrap gap-4">
          {getUnlockedRewards().map(reward => (
            <div key={reward.id} className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm">
              <span className="text-xl">{reward.image}</span>
              <span className="font-medium text-sm">{reward.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
