import { Link, useLocation } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { 
  Sparkles,
  LayoutDashboard,
  FolderKanban,
  Settings,
  LogOut
} from "lucide-react";

export function AppNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">AEO Studio</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link to="/dashboard">
                <Button 
                  variant={isActive("/dashboard") ? "secondary" : "ghost"}
                  className="gap-2"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  variant={isActive("/projects") ? "secondary" : "ghost"}
                  className="gap-2"
                >
                  <FolderKanban className="h-4 w-4" />
                  Projects
                </Button>
              </Link>
              <Link to="/settings">
                <Button 
                  variant={isActive("/settings") ? "secondary" : "ghost"}
                  className="gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
