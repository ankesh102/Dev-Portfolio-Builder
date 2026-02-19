import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="container-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building digital <br />
            <span className="text-gradient">experiences</span> that matter.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I'm a Full Stack Developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="rounded-full px-8 text-base bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 text-base border-white/10 hover:bg-white/5"
            >
              Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-6">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Hero Image Placeholder with Unsplash */}
          <div className="relative z-10 w-full aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/20">
            {/* developer coding setup dark mode */}
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
              alt="Developer Workspace" 
              className="w-full h-full object-cover"
            />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-card/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <p className="text-xs text-muted-foreground">Current Status</p>
                  <p className="text-sm font-semibold">Open to Work</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-dashed border-white/5 rounded-[2.5rem] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
