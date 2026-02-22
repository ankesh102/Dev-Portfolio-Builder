import { motion } from "framer-motion";
import { useAchievements } from "@/hooks/use-portfolio";
import { Trophy, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function Achievements() {
  const { data: achievements, isLoading } = useAchievements();

  if (isLoading) {
    return (
      <section className="py-24 container-padding">
        <Skeleton className="h-12 w-48 mb-12" />
        <Skeleton className="h-32 w-full rounded-2xl" />
      </section>
    );
  }

  return (
    <section id="achievements" className="py-24 bg-secondary/10">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        </motion.div>

        <div className="space-y-6">
          {achievements?.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-500">
                  <Trophy className="h-8 w-8" />
                </div>
                <div className="flex-grow">
                  <p className="text-lg leading-relaxed mb-6 italic text-foreground/90">
                    "{achievement.description}"
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {achievement.links?.map((link, i) => {
                      const label = link.includes("leetcode") ? "LeetCode" : 
                                   link.includes("geeksforgeeks") ? "GeeksForGeeks" : 
                                   "Coding Ninjas";
                      return (
                        <a 
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                          {label} <ExternalLink className="h-3 w-3" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
