import { useMemo, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { studentProfiles } from "../data/mockProfiles";
import { StudentProfile } from "../types/profile";

const filters = [
  { label: "All", value: "All" },
  { label: "AI", value: "AI" },
  { label: "Design", value: "Design" },
  { label: "Mobile", value: "Mobile" },
  { label: "Data", value: "Data" },
];

export default function DiscoverPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return studentProfiles.filter((profile) => {
      const matchesQuery = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.skills.some((skill) => skill.name.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter = selectedFilter === "All" || profile.interests.includes(selectedFilter);
      return matchesQuery && matchesFilter;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6">
      <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
        <p className="text-sm uppercase tracking-[0.24em] text-violet-300">Discover students</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Search by skills, interests, and compatibility.</h1>
        <p className="mt-4 max-w-2xl text-slate-300">Filter talented college collaborators by department, availability, and AI match suggestions.</p>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="search"
            placeholder="Search by name, college, or skill"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 lg:w-3/5"
          />
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedFilter === filter.value
                    ? "bg-violet-500 text-white"
                    : "bg-slate-900/80 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {filtered.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}
