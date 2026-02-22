import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { Project, Experience, Skill, Education, Certification, Achievement } from "@shared/schema";

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
