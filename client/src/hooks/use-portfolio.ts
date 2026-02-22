import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { Project, Experience, Skill, Education, Certification, Achievement, type InsertMessage } from "@shared/schema";

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: [api.portfolio.getProjects.path],
  });
}

export function useExperiences() {
  return useQuery<Experience[]>({
    queryKey: [api.portfolio.getExperiences.path],
  });
}

export function useSkills() {
  return useQuery<Skill[]>({
    queryKey: [api.portfolio.getSkills.path],
  });
}

export function useEducation() {
  return useQuery<Education[]>({
    queryKey: [api.portfolio.getEducation.path],
  });
}

export function useCertifications() {
  return useQuery<Certification[]>({
    queryKey: [api.portfolio.getCertifications.path],
  });
}

export function useAchievements() {
  return useQuery<Achievement[]>({
    queryKey: [api.portfolio.getAchievements.path],
  });
}

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
      
      return await res.json();
    },
  });
}
