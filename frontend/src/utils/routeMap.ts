const routeMap = {
  matches: {
    recommendations: "/matches/recommendations",
  },
  projects: {
    ideas: "/projects/ideas",
  },
  profile: {
    list: "/profile",
    insights: "/profile/insights",
    details: (id: string) => `/profile/${id}`,
    create: "/profile",
    update: (id: string) => `/profile/${id}`,
    delete: (id: string) => `/profile/${id}`,
  },
};

export default routeMap;
