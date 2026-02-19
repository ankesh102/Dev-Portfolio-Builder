import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";

// GET /api/projects
export function useProjects() {
  return useQuery({
    queryKey: [api.portfolio.getProjects.path],
    queryFn: async () => {
      const res = await fetch(api.portfolio.getProjects.path);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.portfolio.getProjects.responses[200].parse(await res.json());
    },
  });
}

// GET /api/experiences
export function useExperiences() {
  return useQuery({
    queryKey: [api.portfolio.getExperiences.path],
    queryFn: async () => {
      const res = await fetch(api.portfolio.getExperiences.path);
      if (!res.ok) throw new Error("Failed to fetch experiences");
      return api.portfolio.getExperiences.responses[200].parse(await res.json());
    },
  });
}

// GET /api/skills
export function useSkills() {
  return useQuery({
    queryKey: [api.portfolio.getSkills.path],
    queryFn: async () => {
      const res = await fetch(api.portfolio.getSkills.path);
      if (!res.ok) throw new Error("Failed to fetch skills");
      return api.portfolio.getSkills.responses[200].parse(await res.json());
    },
  });
}

// GET /api/education
export function useEducation() {
  return useQuery({
    queryKey: [api.portfolio.getEducation.path],
    queryFn: async () => {
      const res = await fetch(api.portfolio.getEducation.path);
      if (!res.ok) throw new Error("Failed to fetch education");
      return api.portfolio.getEducation.responses[200].parse(await res.json());
    },
  });
}

// POST /api/contact
export function useContact() {
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to send message");
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}
