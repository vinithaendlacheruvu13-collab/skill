import { studentProfiles } from "../data/mockProfiles";

const profile = studentProfiles[0];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6">
      <section className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Profile settings</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Manage your student profile.</h1>
            <p className="mt-4 text-slate-300">Update skills, availability, resume uploads, and AI-enabled learning guidance.</p>
          </div>
          <div className="rounded-[2rem] bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Preferred team size</p>
            <p className="mt-2 text-3xl font-semibold text-white">{profile.preferredTeamSize}</p>
            <p className="mt-4 text-slate-300">Availability: {profile.availability}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_0.6fr]">
        <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-white">{profile.name}</h2>
              <p className="mt-1 text-sm text-slate-400">{profile.department}, {profile.college}</p>
            </div>
            <p className="text-slate-300">{profile.bio}</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Interests</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span key={interest} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-200">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Career goals</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.careerGoals.map((goal) => (
                    <span key={goal} className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-100">
                      {goal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">AI skill analysis</p>
          <div className="mt-6 space-y-4 text-slate-300">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Skill score</p>
              <p className="mt-2 text-3xl font-semibold text-white">87 / 100</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Recommended skill</p>
              <p className="mt-2 text-lg font-semibold text-white">Add React Native for mobile collaboration.</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Learning resource</p>
              <p className="mt-2 text-lg font-semibold text-white">Build AI Campus Apps with Firebase.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
        <h2 className="text-2xl font-semibold text-white">Resume insights</h2>
        <p className="mt-4 text-slate-300">AI extracts skills and recommends missing certifications from your resume.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">GitHub</p>
            <a className="mt-2 block text-violet-200" href={profile.github}>{profile.github}</a>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">LinkedIn</p>
            <a className="mt-2 block text-violet-200" href={profile.linkedin}>{profile.linkedin}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
