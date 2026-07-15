import { Request, Response } from "express";

const projectIdeas = [
  {
    id: "idea1",
    title: "AI Attendance System",
    description: "Use Python, React, and ML to build an intelligent attendance tracker for campus events.",
    tags: ["AI", "React", "Python"],
  },
  {
    id: "idea2",
    title: "Campus Marketplace",
    description: "Create a Flutter + Firebase app for students to buy and sell campus essentials.",
    tags: ["Flutter", "Firebase", "Mobile"],
  },
  {
    id: "idea3",
    title: "Smart Placement Predictor",
    description: "Build a Java + ML system that helps students forecast interview success and role fit.",
    tags: ["Java", "ML", "Data"],
  },
];

export function getProjectIdeas(req: Request, res: Response) {
  res.json({ ideas: projectIdeas, generatedAt: new Date().toISOString() });
}
