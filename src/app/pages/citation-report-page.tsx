import { Link } from "react-router-dom";
import { AppNav } from "@/app/components/app-nav";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import {
  ChevronRight,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Shield,
  Clock
} from "lucide-react";

export default function CitationReportPage() {
  // Mock data
  const methodAResults = [
    {
      query: "What is AEO optimization?",
      serperRank: 3,
      chatgptCited: true,
      chatgptPosition: 2,
      geminiCited: true,
      geminiPosition: 1,
    },
    {
      query: "How to optimize for answer engines?",
      serperRank: 1,
      chatgptCited: true,
      chatgptPosition: 1,
      geminiCited: false,
      geminiPosition: null,
    },
    {
      query: "Best practices for AEO",
      serperRank: 5,
      chatgptCited: false,
      chatgptPosition: null,
      geminiCited: true,
      geminiPosition: 3,
    },
    {
      query: "Citation optimization techniques",
      serperRank: null,
      chatgptCited: false,
      chatgptPosition: null,
      geminiCited: false,
      geminiPosition: null,
    },
  ];

  const sourcesData = [
    { url: "https://example.com/blog/aeo-guide", status: "FETCHED", fetchTime: "450ms" },
    { url: "https://example.com/docs/getting-started", status: "FETCHED", fetchTime: "320ms" },
    { url: "https://example.com/api/reference", status: "BLOCKED_BY_ROBOTS", fetchTime: "-" },
    { url: "https://example.com/blog/advanced-tips", status: "FETCHED", fetchTime: "580ms" },
    { url: "https://example.com/resources", status: "HTTP_ERROR", fetchTime: "-" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "FETCHED":
        return <Badge className="bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20"><CheckCircle2 className="h-3 w-3 mr-1" />Fetched</Badge>;
      case "BLOCKED_BY_ROBOTS":
        return <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] hover:bg-[#f59e0b]/20"><Shield className="h-3 w-3 mr-1" />Blocked</Badge>;
      case "HTTP_ERROR":
        return <Badge className="bg-[#ef4444]/10 text-[#ef4444] hover:bg-[#ef4444]/20"><XCircle className="h-3 w-3 mr-1" />Error</Badge>;
      case "TIMEOUT":
        return <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] hover:bg-[#f59e0b]/20"><Clock className="h-3 w-3 mr-1" />Timeout</Badge>;
      case "PARSE_FAILED":
        return <Badge className="bg-[#ef4444]/10 text-[#ef4444] hover:bg-[#ef4444]/20"><AlertCircle className="h-3 w-3 mr-1" />Parse Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
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
          <span className="text-foreground">Citation Likelihood Report</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Citation Likelihood Report</h1>
          <p className="text-muted-foreground">
            Test your content's citation rates across ChatGPT and Gemini
          </p>
        </div>

        {/* CLS Score */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Citation Likelihood Score</div>
              <div className="text-7xl font-bold mb-4 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] bg-clip-text text-transparent">
                75
              </div>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#4f46e5]"></div>
                  <span>ChatGPT: 42%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#06b6d4]"></div>
                  <span>Gemini: 38%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methods Tabs */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs defaultValue="methodA">
              <TabsList className="mb-6">
                <TabsTrigger value="methodA">Method A (Offline)</TabsTrigger>
                <TabsTrigger value="methodB">Method B (Serper Web)</TabsTrigger>
              </TabsList>

              <TabsContent value="methodA">
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Test Queries</h3>
                    <div className="flex gap-2">
                      <Badge className="bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20">
                        2/4 ChatGPT Citations
                      </Badge>
                      <Badge className="bg-[#06b6d4]/10 text-[#06b6d4] hover:bg-[#06b6d4]/20">
                        2/4 Gemini Citations
                      </Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Query</TableHead>
                          <TableHead className="text-center">Serper Rank</TableHead>
                          <TableHead className="text-center">ChatGPT Cited</TableHead>
                          <TableHead className="text-center">Position</TableHead>
                          <TableHead className="text-center">Gemini Cited</TableHead>
                          <TableHead className="text-center">Position</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {methodAResults.map((result, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{result.query}</TableCell>
                            <TableCell className="text-center">
                              {result.serperRank ? (
                                <Badge variant="outline">#{result.serperRank}</Badge>
                              ) : (
                                <span className="text-muted-foreground">Not ranked</span>
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {result.chatgptCited ? (
                                <CheckCircle2 className="h-5 w-5 text-[#10b981] mx-auto" />
                              ) : (
                                <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {result.chatgptPosition ? (
                                <Badge className="bg-[#4f46e5]/10 text-[#4f46e5]">
                                  #{result.chatgptPosition}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {result.geminiCited ? (
                                <CheckCircle2 className="h-5 w-5 text-[#10b981] mx-auto" />
                              ) : (
                                <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                              )}
                            </TableCell>
                            <TableCell className="text-center">
                              {result.geminiPosition ? (
                                <Badge className="bg-[#06b6d4]/10 text-[#06b6d4]">
                                  #{result.geminiPosition}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="methodB">
                <div className="text-center py-12 text-muted-foreground">
                  <p>Method B testing uses Serper API for web search ranking data.</p>
                  <Button className="mt-4 bg-[#4f46e5] hover:bg-[#4338ca]">
                    Run Method B Test
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Sources Panel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Retrieved Sources</CardTitle>
            <CardDescription>Status of sources fetched by answer engines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sourcesData.map((source, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <code className="text-sm bg-muted px-2 py-1 rounded">{source.url}</code>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{source.fetchTime}</span>
                    {getStatusBadge(source.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Version Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Version Comparison</CardTitle>
            <CardDescription>Track CLS improvements across content versions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Version 1</span>
                  <span className="text-2xl font-bold">65</span>
                </div>
                <div className="text-xs text-muted-foreground">1 week ago</div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Version 2</span>
                  <span className="text-2xl font-bold">68</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-[#10b981]" />
                  <span className="text-[#10b981]">+3 points</span>
                </div>
              </div>
              <div className="p-4 border-2 border-[#4f46e5] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Version 3</span>
                    <Badge>Current</Badge>
                  </div>
                  <span className="text-2xl font-bold">75</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-[#10b981]" />
                  <span className="text-[#10b981]">+7 points</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
