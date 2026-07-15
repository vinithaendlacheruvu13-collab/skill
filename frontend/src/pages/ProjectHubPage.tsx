import { useMemo, useState } from "react";

const mockProjects = [
  {
    id: "p1",
    name: "AI Attendance System",
    status: "Planning",
    requiredSkills: ["Python", "React", "ML"],
    teamSize: "3-5",
    deadline: "Aug 12, 2026",
    suggestedMembers: ["Ayesha Khan", "Rohan Gupta"],
  },
  {
    id: "p2",
    name: "Campus Marketplace",
    status: "Active",
    requiredSkills: ["Flutter", "Firebase", "UI/UX"],
    teamSize: "4-6",
    deadline: "Sep 04, 2026",
    suggestedMembers: ["Nisha Patel"],
  },
];

export default function ProjectHubPage() {
  const [activeTab, setActiveTab] = useState("Active Projects");
  const tabs = ["Active Projects", "Create Project", "Invitations"];

  const visibleProjects = useMemo(() => {
    if (activeTab === "Create Project") return [];
    return mockProjects;
  }, [activeTab]);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6">
      <section className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Project hub</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Launch and join team projects.</h1>
            <p className="mt-4 max-w-2xl text-slate-300">Create new projects, invite teammates, and track AI-suggested roles for your next campus challenge.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Your projects</p>
              <p className="mt-3 text-3xl font-semibold text-white">{mockProjects.length}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Team balance</p>
              <p className="mt-3 text-3xl font-semibold text-white">Smart</p>
            </div>
          </div>
        </div>
      </section>

      <div className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-glass">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                activeTab === tab ? "bg-violet-500 text-white" : "bg-slate-900/80 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Active Projects" && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <div key={project.id} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
                    <p className="mt-2 text-sm text-slate-400">Deadline: {project.deadline}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">{project.status}</span>
                </div>
                <div className="mt-4 space-y-3 text-slate-300">
                  <p>Required skills: {project.requiredSkills.join(", ")}</p>
                  <p>Team size: {project.teamSize}</p>
                  <p>AI suggested members: {project.suggestedMembers.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Create Project" && (
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
            <p className="text-slate-300">Project creation workflow coming soon. Use AI to generate the perfect project idea, define roles, and set team goals.</p>
          </div>
        )}

        {activeTab === "Invitations" && (
          <div className="mt-8 space-y-5 text-slate-300">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <p className="text-xl font-semibold text-white">Rohan invited you to join Smart Placement Predictor</p>
              <p className="mt-2">Skills needed: Java, ML, Data engineering</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
              <p className="text-xl font-semibold text-white">Ayesha invited you to join AI Attendance System</p>
              <p className="mt-2">Skills needed: React, Python, UX design</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
