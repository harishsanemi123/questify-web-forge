
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { MessageCircle, Send } from "lucide-react";

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState("suggestion");
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(5);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText) {
      toast.error("Please enter your feedback");
      return;
    }

    // Demo feedback submission
    toast.success("Thank you for your feedback!", {
      description: "We appreciate your input and will use it to improve the platform.",
    });

    // Reset form
    setFeedbackText("");
    setRating(5);
    setEmail("");
  };

  const renderStars = () => {
    return (
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-2xl ${star <= rating ? 'text-gaming-orange' : 'text-gray-300'}`}
            onClick={() => setRating(star)}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gaming-heading mb-2">Feedback</h1>
        <p className="text-muted-foreground">Help us improve your learning experience</p>
      </div>

      <Card className="gaming-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Share Your Thoughts
          </CardTitle>
          <CardDescription>
            Your feedback helps us create a better learning platform for everyone
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Type of Feedback</Label>
              <RadioGroup
                defaultValue="suggestion"
                value={feedbackType}
                onValueChange={setFeedbackType}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="suggestion" id="suggestion" />
                  <Label htmlFor="suggestion">Suggestion</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bug" id="bug" />
                  <Label htmlFor="bug">Bug Report</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="content" id="content" />
                  <Label htmlFor="content">Content Feedback</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating">How would you rate your experience?</Label>
              {renderStars()}
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Your Feedback</Label>
              <Textarea
                id="feedback"
                placeholder="Tell us what you think..."
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                className="min-h-32"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email (optional)
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your-email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                We'll only use this to follow up on your feedback if necessary
              </p>
            </div>

            <Button type="submit" className="gaming-btn w-full sm:w-auto">
              <Send className="mr-2 h-4 w-4" />
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="gaming-card">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">How are tasks and rewards connected?</h3>
            <p className="text-muted-foreground">
              Completing tasks earns you XP, which unlocks various rewards like badges and certificates.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How do I track my progress?</h3>
            <p className="text-muted-foreground">
              Visit the Progress page to see detailed statistics and charts about your learning journey.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I suggest new features or content?</h3>
            <p className="text-muted-foreground">
              Yes! We welcome your suggestions. Use this feedback form to let us know what you'd like to see.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Feedback;
