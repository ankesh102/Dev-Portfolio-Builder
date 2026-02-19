import { motion } from "framer-motion";
import { Code2, Globe, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write clean, maintainable, and scalable code following best practices."
  },
  {
    icon: Globe,
    title: "Modern Tech",
    description: "Up-to-date with the latest technologies and frameworks in the ecosystem."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for maximum speed and user experience."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20 relative">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate software engineer with a deep love for creating elegant solutions to complex problems. 
            My journey in tech started with curiosity and has grown into a career where I get to build 
            tools that people use every day. I believe in continuous learning and pushing the boundaries 
            of what's possible on the web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
