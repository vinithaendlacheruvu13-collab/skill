import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import matchRoutes from "./routes/matchRoutes";
import projectRoutes from "./routes/projectRoutes";
import profileRoutes from "./routes/profileRoutes";
import routeMap from "./routes/routeMap";
import connectDB from "./utils/db";

dotenv.config();

// initialize DB connection
connectDB().catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1);
});

const app = express();
app.use(cors());
app.use(express.json());

app.use(routeMap.matches.base, matchRoutes);
app.use(routeMap.projects.base, projectRoutes);
app.use(routeMap.profile.base, profileRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "SkillSwap API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SkillSwap backend running on port ${PORT}`);
});
