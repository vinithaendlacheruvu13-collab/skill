import axios from "axios";
import routeMap from "./routeMap";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export type MatchRecommendation = {
  id: string;
  name: string;
  compatibility: number;
  reasons: string[];
};

export type ProjectIdea = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export type ProfileInsights = {
  score: number;
  strengths: string[];
  recommendedSkills: string[];
  learningResources: { title: string; url: string }[];
};

export const fetchMatchRecommendations = async () => {
  const response = await api.get<{ matches: MatchRecommendation[] }>(routeMap.matches.recommendations);
  return response.data.matches;
};

export const fetchProjectIdeas = async () => {
  const response = await api.get<{ ideas: ProjectIdea[] }>(routeMap.projects.ideas);
  return response.data.ideas;
};

export const fetchProfileInsights = async () => {
  const response = await api.get<ProfileInsights>(routeMap.profile.insights);
  return response.data;
};
