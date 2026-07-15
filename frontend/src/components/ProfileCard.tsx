import { StudentProfile } from "../types/profile";

export default function ProfileCard({ profile }: { profile: StudentProfile }) {
  return (
    <article className="glass-card overflow-hidden rounded-3xl border border-white/10 p-6 shadow-glass transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">{profile.college}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{profile.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{profile.department} • {profile.year}</p>
        </div>
        <div className="rounded-3xl bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-100">
          {profile.matchScore}%
        </div>
      </div>
      <p className="mt-4 text-slate-300">{profile.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span key={skill.name} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-200">
            {skill.name}
          </span>
        ))}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-900/80 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Availability</p>
          <p className="mt-2 font-medium text-slate-100">{profile.availability}</p>
        </div>
        <div className="rounded-3xl bg-slate-900/80 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Team size</p>
          <p className="mt-2 font-medium text-slate-100">{profile.preferredTeamSize}</p>
        </div>
      </div>
    </article>
  );
}
