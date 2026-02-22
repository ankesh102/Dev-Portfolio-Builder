import { motion } from "framer-motion";
import { useExperiences, useEducation } from "@/hooks/use-portfolio";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function Experience() {
  const { data: experiences, isLoading: loadingExp } = useExperiences();
  const { data: education, isLoading: loadingEdu } = useEducation();

  if (loadingExp || loadingEdu) {
    return (
      <section id="experience" className="py-24 container-padding">
        <Skeleton className="h-12 w-48 mb-12" />
        <div className="space-y-4">
          <Skeleton className="h-32 w-full rounded-2xl" />
          <Skeleton className="h-32 w-full rounded-2xl" />
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 container-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Experience Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Briefcase className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">Experience</h2>
          </motion.div>

          <div className="space-y-8 border-l-2 border-white/5 pl-8 ml-4">
            {experiences?.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-background border-4 border-primary" />
                
                <span className="text-sm font-semibold text-primary mb-1 block">
                  {exp.duration}
                </span>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-lg text-muted-foreground mb-4">{exp.company}</p>
                
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="p-3 bg-accent/10 rounded-xl text-accent">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </motion.div>

          <div className="space-y-8 border-l-2 border-white/5 pl-8 ml-4">
            {education?.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-background border-4 border-accent" />
                
                <span className="text-sm font-semibold text-accent mb-1 block">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-lg text-muted-foreground font-semibold mb-1">{edu.college}</p>
                {edu.location && <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>}
                {edu.cgpa && <p className="text-sm font-bold text-accent mb-4">CGPA: {edu.cgpa}</p>}
                
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-accent/5 border border-accent/10 rounded-md text-muted-foreground italic">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
