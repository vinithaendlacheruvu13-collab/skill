import { Request, Response } from "express";

const sampleMatches = [
  {
    id: "s2",
    name: "Rohan Gupta",
    compatibility: 91,
    reasons: [
      "Complements React with strong ML and analytics skills.",
      "Available on weekends for sprint planning.",
      "Shared interest in fintech and data-driven products.",
    ],
  },
  {
    id: "s3",
    name: "Nisha Patel",
    compatibility: 87,
    reasons: [
      "Design-driven developer with mobile product experience.",
      "Adds UI/UX balance to the team.",
      "Aligned with campus marketplace and hackathon goals.",
    ],
  },
];

export function generateMatchRecommendations(req: Request, res: Response) {
  res.json({ matches: sampleMatches, generatedAt: new Date().toISOString() });
}
