import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import DiscoverPage from "./pages/DiscoverPage";
import ProjectHubPage from "./pages/ProjectHubPage";
import ProfilePage from "./pages/ProfilePage";
import ChatAssistantPage from "./pages/ChatAssistantPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="px-4 py-6 sm:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/projects" element={<ProjectHubPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/assistant" element={<ChatAssistantPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
