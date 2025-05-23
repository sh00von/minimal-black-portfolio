async function fetchData(path: string) {
  try {
    const response = await fetch(`/data/${path}.json`)
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path} data`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching ${path} data:`, error)
    return []
  }
}

// Personal Information
export async function getPersonalInfo() {
  return fetchData("personal")
}

// Skills
export async function getSkills() {
  return fetchData("skills")
}

// Timeline
export async function getTimelineItems() {
  return fetchData("timeline")
}

// Projects
export async function getFeaturedProjects() {
  const allProjects = await fetchData("projects")
  return allProjects.filter((project: any) => project.featured)
}

export async function getAllProjects() {
  return fetchData("projects")
}

export async function getProjectCategories() {
  return fetchData("project-categories")
}

// Research Interests
export async function getResearchInterests() {
  return fetchData("research")
}

// Startups & Organizations
export async function getStartups() {
  return fetchData("startups")
}

// Achievements
export async function getAchievements() {
  return fetchData("achievements")
}

// Testimonials
export async function getTestimonials() {
  return fetchData("testimonials")
}

// Social Links
export async function getSocialLinks() {
  return fetchData("social")
}

// Navigation Items
export async function getNavItems() {
  return fetchData("navigation")
}
