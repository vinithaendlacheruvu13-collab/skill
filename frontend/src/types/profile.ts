export type Skill = {
  name: string;
  level: number;
};

export type Availability = "Weekdays" | "Weekends" | "Evenings" | "Flexible";

export type StudentProfile = {
  id: string;
  name: string;
  college: string;
  department: string;
  year: string;
  bio: string;
  skills: Skill[];
  technologies: string[];
  interests: string[];
  careerGoals: string[];
  github: string;
  linkedin: string;
  availability: Availability;
  preferredTeamSize: number;
  matchScore: number;
  compatibilityReasons: string[];
};
