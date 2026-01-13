import { Link } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { 
  MessageSquare, 
  FileText, 
  Link as LinkIcon, 
  TrendingUp,
  Search,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Zap
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">AEO Studio</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#4f46e5] hover:bg-[#4338ca]">Start Free</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-[#06b6d4]/10 text-[#06b6d4] hover:bg-[#06b6d4]/20" variant="secondary">
            Answer Engine Optimization
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get cited by answer engines
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Optimize your content to appear in ChatGPT & Gemini responses. Increase visibility, drive traffic, and build authority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-[#4f46e5] hover:bg-[#4338ca] text-lg px-8">
                Start AEO Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Demo Report
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why AEO Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer engines are changing how users discover content. Be where your audience is searching.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <MessageSquare className="w-10 h-10 mb-2 text-[#4f46e5]" />
                <CardTitle>Answer Blocks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Structure content to appear as direct answers in AI responses
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="w-10 h-10 mb-2 text-[#06b6d4]" />
                <CardTitle>FAQ Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Generate and optimize FAQ content for common user queries
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LinkIcon className="w-10 h-10 mb-2 text-[#10b981]" />
                <CardTitle>Source Citations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Increase citation rates and track when AIs reference your content
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-10 h-10 mb-2 text-[#f59e0b]" />
                <CardTitle>Likelihood Score</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Measure and improve your Citation Likelihood Score (CLS)
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Four simple steps to optimize your content for answer engines
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#4f46e5] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-2">Import</h3>
              <p className="text-muted-foreground">
                Add your URLs or create content directly in the editor
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#06b6d4] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-2">Analyze</h3>
              <p className="text-muted-foreground">
                Run AEO analysis to identify optimization opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#10b981] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-2">Improve</h3>
              <p className="text-muted-foreground">
                Apply AI-powered recommendations to enhance your content
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f59e0b] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl mb-2">Validate</h3>
              <p className="text-muted-foreground">
                Test citation rates with ChatGPT and Gemini
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription className="text-3xl font-bold mt-2">$29<span className="text-base font-normal text-muted-foreground">/month</span></CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>5 projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>100K LLM tokens/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>10 citation runs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>Basic analytics</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-[#4f46e5] border-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-[#4f46e5] text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription className="text-3xl font-bold mt-2">$99<span className="text-base font-normal text-muted-foreground">/month</span></CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>20 projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>500K LLM tokens/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>50 citation runs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#4f46e5] hover:bg-[#4338ca]">Get Started</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team</CardTitle>
                <CardDescription className="text-3xl font-bold mt-2">$299<span className="text-base font-normal text-muted-foreground">/month</span></CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>2M LLM tokens/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>200 citation runs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">AEO Studio</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Optimize your content for answer engines and increase your citation rates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">Features</Link></li>
                <li><Link to="#" className="hover:text-foreground">Pricing</Link></li>
                <li><Link to="#" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">About</Link></li>
                <li><Link to="#" className="hover:text-foreground">Blog</Link></li>
                <li><Link to="#" className="hover:text-foreground">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">Privacy</Link></li>
                <li><Link to="#" className="hover:text-foreground">Terms</Link></li>
                <li><Link to="#" className="hover:text-foreground">Docs</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 AEO Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
