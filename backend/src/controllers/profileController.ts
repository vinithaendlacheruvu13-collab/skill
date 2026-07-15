import { Request, Response } from "express";
import Profile from "../models/Profile";

export async function createProfile(req: Request, res: Response) {
  try {
    const doc = await Profile.create(req.body);
    res.status(201).json(doc);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create profile", details: error });
  }
}

export async function listProfiles(req: Request, res: Response) {
  try {
    const { skill, department, interest, availability, q } = req.query as any;
    const filter: any = {};
    if (department) filter.department = department;
    if (availability) filter.availability = availability;
    if (interest) filter.interests = { $in: [interest] };
    if (skill) filter["skills.name"] = skill;
    if (q) filter.$text = { $search: q };

    const profiles = await Profile.find(filter).limit(200).lean();
    res.json({ profiles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to list profiles" });
  }
}

export async function getProfileById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id).lean();
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get profile" });
  }
}

export async function updateProfile(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updated = await Profile.findByIdAndUpdate(id, req.body, { new: true }).lean();
    if (!updated) return res.status(404).json({ error: "Profile not found" });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update profile" });
  }
}

export async function deleteProfile(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Profile.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete profile" });
  }
}

export function getProfileInsights(req: Request, res: Response) {
  res.json({
    score: 88,
    strengths: ["React", "Node.js", "Python"],
    recommendedSkills: ["React Native", "GraphQL", "Generative AI"],
    learningResources: [
      { title: "AI Product Build Path", url: "https://example.com/ai-product-path" },
      { title: "Full-stack student startup bootcamp", url: "https://example.com/student-bootcamp" },
    ],
  });
}
