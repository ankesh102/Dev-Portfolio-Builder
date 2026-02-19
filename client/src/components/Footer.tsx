import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-white/5">
      <div className="container-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display tracking-tighter mb-2">
              dev<span className="text-primary">.portfolio</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building digital products with passion.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
          <span>© {new Date().getFullYear()} All rights reserved. Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          <span>by Developer.</span>
        </div>
      </div>
    </footer>
  );
}
