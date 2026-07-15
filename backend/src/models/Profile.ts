import mongoose, { Schema, Document } from "mongoose";

export type Skill = {
  name: string;
  level: number;
};

export interface IProfile extends Document {
  name: string;
  email?: string;
  college?: string;
  department?: string;
  year?: string;
  bio?: string;
  skills: Skill[];
  technologies: string[];
  interests: string[];
  careerGoals: string[];
  github?: string;
  linkedin?: string;
  resumeUrl?: string;
  availability?: string;
  preferredTeamSize?: number;
  matchScore?: number;
  compatibilityReasons: string[];
  createdAt: Date;
  updatedAt: Date;
}

const SkillSchema = new Schema<Skill>({
  name: { type: String, required: true },
  level: { type: Number, required: true },
});

const ProfileSchema = new Schema<IProfile>(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    college: { type: String },
    department: { type: String },
    year: { type: String },
    bio: { type: String },
    skills: { type: [SkillSchema], default: [] },
    technologies: { type: [String], default: [] },
    interests: { type: [String], default: [] },
    careerGoals: { type: [String], default: [] },
    github: { type: String },
    linkedin: { type: String },
    resumeUrl: { type: String },
    availability: { type: String },
    preferredTeamSize: { type: Number },
    matchScore: { type: Number, default: 0 },
    compatibilityReasons: { type: [String], default: [] },
  },
  { timestamps: true }
);

// Create a lightweight text index for searching profiles by name, college, department, bio and technologies
ProfileSchema.index({ name: "text", college: "text", department: "text", bio: "text", technologies: "text", interests: "text" });

export default mongoose.models.Profile || mongoose.model<IProfile>("Profile", ProfileSchema);
