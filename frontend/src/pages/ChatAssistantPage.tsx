import { useState } from "react";

const assistantPrompts = [
  "Find me teammates for a React + Python hackathon project.",
  "Suggest project ideas for AI, mobile, and data science.",
  "Recommend skills to learn for campus startups.",
];

export default function ChatAssistantPage() {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Hello! I can help you find teammates, suggest project ideas, and map your skill growth.",
  ]);

  function sendMessage() {
    if (!message.trim()) return;
    setHistory((current) => [...current, `You: ${message}`, "SkillSwap Assistant: Based on your profile, I recommend connecting with a frontend + ML teammate and exploring AI Attendance System ideas."]);
    setMessage("");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-violet-300">AI chat assistant</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Ask SkillSwap for teammate guidance.</h1>
          <p className="mt-4 max-w-2xl text-slate-300">Use the built-in assistant to generate match suggestions, project roadmaps, and skill pathways.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.5fr]">
          <div className="space-y-4 rounded-[2rem] bg-slate-900/80 p-6">
            {history.map((entry, index) => (
              <div key={index} className="rounded-3xl border border-white/10 p-4 text-sm text-slate-200">
                {entry}
              </div>
            ))}
          </div>

          <div className="space-y-5 rounded-[2rem] bg-slate-950/85 p-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Quick prompts</p>
              {assistantPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setMessage(prompt)}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-left text-slate-200 transition hover:border-violet-400"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <textarea
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              placeholder="Ask the AI assistant anything about teammates, projects, or skills..."
            />
            <button
              onClick={sendMessage}
              className="w-full rounded-full bg-violet-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
