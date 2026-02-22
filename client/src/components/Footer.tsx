import { Github, Linkedin, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-white/5">
      <div className="container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display tracking-tighter mb-2">
              ankesh<span className="text-primary">.dev</span>
            </h3>
            <div className="text-muted-foreground text-sm space-y-1">
              <p>Ankesh Kumar Pandey | Software Engineer</p>
              <p>Bengaluru, India</p>
              <p>+91 7903332869</p>
              <p>ankesh.pandey8@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/ankesh102" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ankesh-pandey8/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://leetcode.com/Ankesh102/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Code2 className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
          <span>© 2024 Ankesh Kumar Pandey. All rights reserved. Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          <span>by Ankesh.</span>
        </div>
      </div>
    </footer>
  );
}
