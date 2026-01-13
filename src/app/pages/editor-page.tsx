import { useState } from "react";
import { Link } from "react-router-dom";
import { AppNav } from "@/app/components/app-nav";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Save,
  Play,
  Sparkles,
  FileText,
  Clock,
  ChevronRight
} from "lucide-react";

export default function EditorPage() {
  const [content, setContent] = useState(`# Getting Started with AEO

Answer Engine Optimization (AEO) is the practice of optimizing your content to appear in AI-powered answer engines like ChatGPT and Gemini.

## Key Principles

1. **Structure your content clearly** - Use headings, lists, and concise paragraphs
2. **Answer questions directly** - Provide clear, factual answers
3. **Include citations** - Link to authoritative sources
4. **Optimize for queries** - Think about what users are asking

## Best Practices

- Keep answers concise but comprehensive
- Use structured data where appropriate
- Maintain high-quality, factual content
- Update content regularly
`);

  return (
    <div className="min-h-screen bg-background">
      <AppNav />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/projects" className="hover:text-foreground">Projects</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/project/1" className="hover:text-foreground">Marketing Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Content Editor</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              Auto-saved 2 min ago
            </Badge>
          </div>
        </div>

        {/* Toolbar */}
        <Card className="mb-6">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Version: v3
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Generate FAQs
              </Button>
              <Button variant="outline" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Generate Answer Block
              </Button>
              <Link to="/project/1/analysis">
                <Button className="bg-[#4f46e5] hover:bg-[#4338ca] gap-2">
                  <Play className="h-4 w-4" />
                  Run AEO Analysis
                </Button>
              </Link>
              <Button variant="outline" className="gap-2">
                <Save className="h-4 w-4" />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Plan Usage */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Plan Usage</span>
              <span className="text-sm text-muted-foreground">325K / 500K tokens</span>
            </div>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>

        {/* Editor */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Editor */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Markdown Editor</h3>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[600px] font-mono text-sm"
                placeholder="Write your content in Markdown..."
              />
            </CardContent>
          </Card>

          {/* Right: Preview & Version History */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="preview">
                  <TabsList className="mb-4">
                    <TabsTrigger value="preview">Live Preview</TabsTrigger>
                    <TabsTrigger value="versions">Version History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="preview" className="min-h-[600px]">
                    <div className="prose dark:prose-invert max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: content.replace(/^# (.+)$/gm, '<h1>$1</h1>').replace(/^## (.+)$/gm, '<h2>$1</h2>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/^- (.+)$/gm, '<li>$1</li>').split('\n\n').map(p => `<p>${p}</p>`).join('') }} />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="versions" className="space-y-3">
                    <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Version 3</span>
                        <Badge>Current</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Updated 2 minutes ago
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Version 2</span>
                        <Badge variant="outline">CLS: 68</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Updated 3 days ago
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Version 1</span>
                        <Badge variant="outline">CLS: 65</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Created 1 week ago
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
