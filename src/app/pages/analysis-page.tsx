import { Link } from "react-router-dom";
import { AppNav } from "@/app/components/app-nav";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";
import {
  ChevronRight,
  FileText,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  TrendingUp
} from "lucide-react";

export default function AnalysisPage() {
  // Mock data for recommendations
  const recommendations = [
    {
      id: 1,
      severity: "high",
      title: "Missing structured FAQ section",
      description: "Add a FAQ section to answer common questions directly",
      evidence: "Content lacks Q&A format which is preferred by answer engines",
      impact: "+12 CLS points",
    },
    {
      id: 2,
      severity: "high",
      title: "Weak citation structure",
      description: "5 claims are missing authoritative source citations",
      evidence: "Factual statements without supporting links reduce trustworthiness",
      impact: "+8 CLS points",
    },
    {
      id: 3,
      severity: "medium",
      title: "Improve answer directness",
      description: "Key answers are buried in paragraphs instead of leading",
      evidence: "Direct answers in first 2 sentences increase cite rate by 34%",
      impact: "+5 CLS points",
    },
    {
      id: 4,
      severity: "low",
      title: "Add more subheadings",
      description: "Break down long sections with descriptive H3 tags",
      evidence: "Better structure helps AI parse content accurately",
      impact: "+2 CLS points",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-[#ef4444]/10 text-[#ef4444] hover:bg-[#ef4444]/20";
      case "medium":
        return "bg-[#f59e0b]/10 text-[#f59e0b] hover:bg-[#f59e0b]/20";
      case "low":
        return "bg-[#06b6d4]/10 text-[#06b6d4] hover:bg-[#06b6d4]/20";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AppNav />
      
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/projects" className="hover:text-foreground">Projects</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/project/1" className="hover:text-foreground">Marketing Blog</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">AEO Analysis</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">AEO Analysis Report</h1>
          <p className="text-muted-foreground">
            Detailed analysis and recommendations for content optimization
          </p>
        </div>

        {/* Score Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Answerability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">73</div>
              <Progress value={73} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">81</div>
              <Progress value={81} className="h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                FAQ Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">58</div>
              <Progress value={58} className="h-2 bg-[#f59e0b]/20" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Citation Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">65</div>
              <Progress value={65} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>
                  {recommendations.length} opportunities to improve your Citation Likelihood Score
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +27 Potential CLS
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <AlertCircle className={`h-5 w-5 mt-0.5 ${
                      rec.severity === 'high' ? 'text-[#ef4444]' :
                      rec.severity === 'medium' ? 'text-[#f59e0b]' :
                      'text-[#06b6d4]'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{rec.title}</h3>
                        <Badge className={getSeverityColor(rec.severity)} variant="secondary">
                          {rec.severity}
                        </Badge>
                        <Badge variant="outline">{rec.impact}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {rec.description}
                      </p>
                      <div className="flex items-start gap-2 p-3 bg-muted/50 rounded text-sm">
                        <FileText className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span className="text-muted-foreground">{rec.evidence}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm">
                    View Evidence
                  </Button>
                  <Button size="sm" className="bg-[#4f46e5] hover:bg-[#4338ca] gap-2">
                    <Sparkles className="h-4 w-4" />
                    Fix with AI
                  </Button>
                  <Button variant="outline" size="sm">
                    Apply to New Version
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#10b981]" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#10b981]" />
                <span className="text-sm">Clear heading hierarchy and structure</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#10b981]" />
                <span className="text-sm">Concise, scannable paragraphs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#10b981]" />
                <span className="text-sm">Good use of lists for key points</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-[#f59e0b]" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-[#f59e0b]" />
                <span className="text-sm">Add more external citations</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-[#f59e0b]" />
                <span className="text-sm">Include FAQ-style Q&A section</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-[#f59e0b]" />
                <span className="text-sm">Lead with direct answers</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
