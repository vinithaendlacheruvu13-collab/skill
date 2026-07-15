import { Link } from "react-router-dom";
import { studentProfiles } from "../data/mockProfiles";
import ProfileCard from "../components/ProfileCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-glass backdrop-blur-xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200">
              AI-powered team matchmaking for students
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Build high-performing project teams with SkillSwap.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Discover teammates with complementary skills, shared interests, and aligned availability using AI-driven recommendations, project matching, and collaboration workflows.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Explore AI Matches
              </Link>
              <Link
                to="/discover"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/90 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-violet-400"
              >
                Discover Students
              </Link>
            </div>
          </div>
          <div className="space-y-5 rounded-[2rem] border border-violet-500/10 bg-gradient-to-br from-violet-950/80 via-slate-950/70 to-slate-900/80 p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Featured Match</p>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Latest AI teammate recommendation</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Ayesha + Rohan</h2>
                <p className="mt-4 text-slate-300">
                  High compatibility for a smart campus analytics project using React, Python, and ML. Balanced frontend, backend, and data skills with weekend planning.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Project idea</p>
                  <p className="mt-3 text-lg font-semibold text-white">AI Attendance System</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Growth</p>
                  <p className="mt-3 text-lg font-semibold text-white">120+ campus teams matched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="text-2xl font-semibold text-white">AI Skill Insights</h2>
          <p className="mt-4 text-slate-300">Analyze skill strength, growth paths, and certification recommendations to build a standout student profile.</p>
        </div>
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="text-2xl font-semibold text-white">Team Compatibility</h2>
          <p className="mt-4 text-slate-300">Find teammates ranked by compatibility score, shared goals, and role balance across project teams.</p>
        </div>
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="text-2xl font-semibold text-white">Project Hub</h2>
          <p className="mt-4 text-slate-300">Launch project listings, invite members, and track team health using AI recommendations.</p>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Recommend teammates</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Top matches for your next project</h2>
          </div>
          <Link to="/discover" className="text-sm font-semibold text-violet-300 hover:text-violet-200">
            Browse all profiles →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {studentProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </section>
    </div>
  );
}
