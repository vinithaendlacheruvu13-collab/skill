import { useEffect, useState } from "react";
import { studentProfiles } from "../data/mockProfiles";
import { fetchMatchRecommendations, MatchRecommendation } from "../utils/api";

export default function DashboardPage() {
  const [matches, setMatches] = useState<MatchRecommendation[]>([]);
  const totalMatches = studentProfiles.length * 2;
  const activeProjects = 5;
  const pendingInvites = 3;

  useEffect(() => {
    fetchMatchRecommendations()
      .then(setMatches)
      .catch((error) => console.error("Failed to load AI matches", error));
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6">
      <section className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Your student collaboration center</h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Monitor compatibility, discover teammates, and launch AI-backed projects with a single student-focused workspace.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">AI matches</p>
              <p className="mt-3 text-3xl font-semibold text-white">{totalMatches}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Active projects</p>
              <p className="mt-3 text-3xl font-semibold text-white">{activeProjects}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Invitations</p>
              <p className="mt-3 text-3xl font-semibold text-white">{pendingInvites}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300">AI match suggestions</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Recommended teammates</h2>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">Top 5</span>
          </div>

          <div className="mt-8 space-y-4">
            {matches.length > 0 ? (
              matches.map((profile) => (
                <div key={profile.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-violet-400">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{profile.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">Compatibility: {profile.compatibility}%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Why match?</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-slate-300">
                    {profile.reasons[0]}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-400">Loading AI recommendations...</p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Team health check</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Smart gap analysis</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Detect missing backend and ML roles in current lineup.</li>
              <li>• Identify skill gaps for upcoming product and hackathon goals.</li>
              <li>• Recommend users with complementary interests and availability.</li>
            </ul>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">AI insights</p>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Skill growth</p>
                <p className="mt-2 text-lg font-semibold text-white">Learn React Native for mobile pitch decks.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400">Project idea</p>
                <p className="mt-2 text-lg font-semibold text-white">Smart Placement Predictor using Java + ML.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
