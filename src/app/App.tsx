import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/app/components/theme-provider";
import LandingPage from "@/app/pages/landing-page";
import LoginPage from "@/app/pages/login-page";
import RegisterPage from "@/app/pages/register-page";
import DashboardPage from "@/app/pages/dashboard-page";
import ProjectsPage from "@/app/pages/projects-page";
import EditorPage from "@/app/pages/editor-page";
import AnalysisPage from "@/app/pages/analysis-page";
import CitationReportPage from "@/app/pages/citation-report-page";
import SettingsPage from "@/app/pages/settings-page";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id/editor" element={<EditorPage />} />
          <Route path="/project/:id/analysis" element={<AnalysisPage />} />
          <Route path="/project/:id/citation-report" element={<CitationReportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
