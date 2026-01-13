import { useState } from "react";
import { AppNav } from "@/app/components/app-nav";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Key,
  CreditCard,
  Download,
  LogOut,
  Eye,
  EyeOff
} from "lucide-react";

export default function SettingsPage() {
  const [showSerperKey, setShowSerperKey] = useState(false);
  const [showOpenAIKey, setShowOpenAIKey] = useState(false);
  const [showGeminiKey, setShowGeminiKey] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AppNav />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account, API keys, and preferences
          </p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="user@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <Button className="bg-[#4f46e5] hover:bg-[#4338ca]">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button className="bg-[#4f46e5] hover:bg-[#4338ca]">Update Password</Button>
              </CardContent>
            </Card>

            <Card className="border-[#ef4444]">
              <CardHeader>
                <CardTitle className="text-[#ef4444]">Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-[#ef4444]/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Delete Account</h4>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Keys Tab */}
          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  API Keys
                </CardTitle>
                <CardDescription>
                  Manage your API keys for external services. Keys are encrypted at rest.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="serper">Serper API Key</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Input
                        id="serper"
                        type={showSerperKey ? "text" : "password"}
                        placeholder="Enter your Serper API key"
                        defaultValue="sk_test_..."
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => setShowSerperKey(!showSerperKey)}
                      >
                        {showSerperKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <Button variant="outline">Test</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Used for Method B citation testing with web search rankings
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="openai">OpenAI API Key</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Input
                        id="openai"
                        type={showOpenAIKey ? "text" : "password"}
                        placeholder="Enter your OpenAI API key"
                        defaultValue="sk-..."
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => setShowOpenAIKey(!showOpenAIKey)}
                      >
                        {showOpenAIKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <Button variant="outline">Test</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Used for ChatGPT citation testing and AI-powered features
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="gemini">Google Gemini API Key</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Input
                        id="gemini"
                        type={showGeminiKey ? "text" : "password"}
                        placeholder="Enter your Gemini API key"
                        defaultValue="AIza..."
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => setShowGeminiKey(!showGeminiKey)}
                      >
                        {showGeminiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <Button variant="outline">Test</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Used for Gemini citation testing
                  </p>
                </div>

                <Separator />

                <Button className="bg-[#4f46e5] hover:bg-[#4338ca]">Save API Keys</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Current Plan
                </CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-6 border-2 border-[#4f46e5] rounded-lg">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold">Pro Plan</h3>
                      <Badge className="bg-[#4f46e5] text-white">Active</Badge>
                    </div>
                    <p className="text-muted-foreground">$99/month · Renews on Feb 13, 2026</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">$99</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Plan Inclusions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></div>
                      20 projects
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></div>
                      500K LLM tokens/month
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></div>
                      50 citation runs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></div>
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></div>
                      Priority support
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline" className="text-[#ef4444] hover:text-[#ef4444]">
                    Cancel Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Manage your payment information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-10 w-10 text-muted-foreground" />
                    <div>
                      <div className="font-semibold">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 12/2026</div>
                    </div>
                  </div>
                  <Button variant="outline">Update</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View and download your invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: "Jan 13, 2026", amount: "$99.00", status: "Paid" },
                    { date: "Dec 13, 2025", amount: "$99.00", status: "Paid" },
                    { date: "Nov 13, 2025", amount: "$99.00", status: "Paid" },
                  ].map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="font-semibold">{invoice.date}</div>
                          <div className="text-sm text-muted-foreground">Pro Plan</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20">
                          {invoice.status}
                        </Badge>
                        <span className="font-semibold">{invoice.amount}</span>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Tab */}
          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Export Data
                </CardTitle>
                <CardDescription>Download all your data in JSON format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Export all your projects, content, analysis results, and settings. This may take a few minutes.
                </p>
                <Button className="bg-[#4f46e5] hover:bg-[#4338ca] gap-2">
                  <Download className="h-4 w-4" />
                  Export All Data
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </CardTitle>
                <CardDescription>Sign out of your account on this device</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
