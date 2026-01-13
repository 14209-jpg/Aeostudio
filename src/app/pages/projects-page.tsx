import { Link } from "react-router-dom";
import { AppNav } from "@/app/components/app-nav";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Plus,
  Search,
  FileText,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  ExternalLink
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

export default function ProjectsPage() {
  // Mock data
  const projects = [
    {
      id: 1,
      name: "Marketing Blog",
      description: "Content marketing articles and guides",
      cls: 72,
      change: 5,
      articles: 12,
      lastUpdated: "2 hours ago",
    },
    {
      id: 2,
      name: "Product Documentation",
      description: "Technical documentation for our SaaS product",
      cls: 85,
      change: 3,
      articles: 28,
      lastUpdated: "1 day ago",
    },
    {
      id: 3,
      name: "Help Center",
      description: "Customer support articles and FAQs",
      cls: 68,
      change: -2,
      articles: 45,
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      name: "Company Blog",
      description: "News, updates, and thought leadership",
      cls: 61,
      change: 7,
      articles: 18,
      lastUpdated: "5 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AppNav />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl mb-2">Projects</h1>
            <p className="text-muted-foreground">
              Manage your content optimization projects
            </p>
          </div>
          <div className="flex gap-3">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-9" />
            </div>
            <Button className="bg-[#4f46e5] hover:bg-[#4338ca] gap-2">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="mb-2">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" />
                        Edit Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Analytics
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-[#ef4444]">
                        Delete Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-t border-b">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Citation Likelihood Score
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold">{project.cls}</span>
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
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{project.articles} articles</span>
                    <span className="text-muted-foreground">Updated {project.lastUpdated}</span>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/project/${project.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Project
                      </Button>
                    </Link>
                    <Link to={`/project/${project.id}/editor`} className="flex-1">
                      <Button className="w-full bg-[#4f46e5] hover:bg-[#4338ca]">
                        Edit Content
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
