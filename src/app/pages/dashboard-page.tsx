import { Link } from "react-router-dom";
import { AppNav } from "@/app/components/app-nav";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Plus,
  ArrowRight,
  BarChart3,
  FileText,
  Zap
} from "lucide-react";

export default function DashboardPage() {
  // Mock data
  const projects = [
    { id: 1, name: "Marketing Blog", cls: 72, change: 5, articles: 12 },
    { id: 2, name: "Product Documentation", cls: 85, change: 3, articles: 28 },
    { id: 3, name: "Help Center", cls: 68, change: -2, articles: 45 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AppNav />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Track your citation performance and optimize content
            </p>
          </div>
          <Link to="/projects">
            <Button className="bg-[#4f46e5] hover:bg-[#4338ca] gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Citation Likelihood Score
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">75</div>
              <div className="flex items-center gap-1 mt-1 text-sm">
                <TrendingUp className="h-4 w-4 text-[#10b981]" />
                <span className="text-[#10b981]">+4 from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                ChatGPT Cite Rate
              </CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">42%</div>
              <div className="flex items-center gap-1 mt-1 text-sm">
                <TrendingUp className="h-4 w-4 text-[#10b981]" />
                <span className="text-[#10b981]">+8% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Gemini Cite Rate
              </CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">38%</div>
              <div className="flex items-center gap-1 mt-1 text-sm">
                <TrendingUp className="h-4 w-4 text-[#10b981]" />
                <span className="text-[#10b981]">+5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Unfetchable Sources
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <div className="flex items-center gap-1 mt-1 text-sm">
                <TrendingDown className="h-4 w-4 text-[#ef4444]" />
                <span className="text-[#ef4444]">Needs attention</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Stats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Plan Usage</CardTitle>
            <CardDescription>Pro Plan - Renews on Feb 13, 2026</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">LLM Tokens</span>
                <span className="text-sm text-muted-foreground">325K / 500K</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Citation Runs</span>
                <span className="text-sm text-muted-foreground">32 / 50</span>
              </div>
              <Progress value={64} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Your latest content optimization projects</CardDescription>
              </div>
              <Link to="/projects">
                <Button variant="ghost" className="gap-2">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-[#4f46e5]/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-[#4f46e5]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.articles} articles
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">CLS</div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{project.cls}</span>
                        {project.change > 0 ? (
                          <Badge className="bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +{project.change}
                          </Badge>
                        ) : (
                          <Badge className="bg-[#ef4444]/10 text-[#ef4444] hover:bg-[#ef4444]/20">
                            <TrendingDown className="h-3 w-3 mr-1" />
                            {project.change}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
