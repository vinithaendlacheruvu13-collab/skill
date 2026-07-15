const backendRouteMap = {
  matches: {
    base: "/api/matches",
    recommendations: "/api/matches/recommendations",
  },
  projects: {
    base: "/api/projects",
    ideas: "/api/projects/ideas",
  },
  profile: {
    base: "/api/profile",
    insights: "/api/profile/insights",
    list: "/api/profile",
    create: "/api/profile",
    details: (id: string) => `/api/profile/${id}`,
    update: (id: string) => `/api/profile/${id}`,
    delete: (id: string) => `/api/profile/${id}`,
  },
};

export default backendRouteMap;
