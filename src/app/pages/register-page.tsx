import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("starter");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - in real app would create account
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-semibold">AEO Studio</span>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Start optimizing your content for answer engines</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Choose your plan</Label>
                <RadioGroup value={plan} onValueChange={setPlan}>
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="starter" id="starter" />
                    <Label htmlFor="starter" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Starter</div>
                      <div className="text-sm text-muted-foreground">$29/month</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border-2 border-[#4f46e5] rounded-lg p-3">
                    <RadioGroupItem value="pro" id="pro" />
                    <Label htmlFor="pro" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Pro</div>
                      <div className="text-sm text-muted-foreground">$99/month</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="team" id="team" />
                    <Label htmlFor="team" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Team</div>
                      <div className="text-sm text-muted-foreground">$299/month</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full bg-[#4f46e5] hover:bg-[#4338ca]">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-[#4f46e5] hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
