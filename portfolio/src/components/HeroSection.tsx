import { ArrowDown, Mail, FileText, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden py-16 px-4 md:py-24"
      style={{
        background: 'radial-gradient(circle at top right, rgba(99,102,241,0.1) 0%, rgba(0,0,0,0) 40%), radial-gradient(circle at bottom left, rgba(139,92,246,0.1) 0%, rgba(0,0,0,0) 40%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
              <span className="text-indigo-500 font-medium">Available for freelance work</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
                Sunita Kumari
              </span>
              <span className="block text-foreground test-md mt-2">Web Developer</span>
            </motion.h1>
            
          <motion.p 
          className="text-lg text-muted-foreground max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I build fast, scalable web apps using MEAN and MERN stacks. 
          From UI to backend, I deliver full-stack solutions for real-world projects like 
          Sarla Birla University CRM, campus systems, and school websites.
        </motion.p>


            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail size={18} />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-indigo-500/50 hover:border-indigo-500 text-foreground">
                <a href="#projects" className="flex items-center gap-2">
                  <FileText size={18} />
                  View My Work
                </a>
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors">
                <Github className="text-foreground" size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors">
                <Linkedin className="text-foreground" size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors">
                <Twitter className="text-foreground" size={18} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image Card */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              {/* Floating card */}
              {/* <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl p-6 w-64 absolute -bottom-6 -right-6 z-10 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                      <div className="bg-indigo-500 w-6 h-6 rounded-md"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-medium">Pyxis Blu Infotech</p>
                    <p className="text-indigo-100 text-sm">Web Developer</p>
                  </div>
                </div>
              </div> */}
              
              {/* Profile image */}
               <div className="relative animate-fade-in-right [animation-delay:400ms]">
          <div className="w-full h-[400px] bg-gradient-to-tr from-primary/20 to-secondary/30 rounded-3xl blur-3xl absolute -top-10 -right-10 -z-10"></div>
          <div className="bg-gradient-to-tr from-primary to-secondary rounded-2xl p-1 shadow-xl">
            <div className="bg-background rounded-xl p-2">
              <img
                src="/images/mypic.jpg"
                alt="Sunita Kumari"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
              
              {/* Tech stack floating badges */}
              <div className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex gap-2">
                  <div className="bg-indigo-100 w-8 h-8 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-700 font-bold text-xs">A</span>
                  </div>
                  <div className="bg-violet-100 w-8 h-8 rounded-lg flex items-center justify-center">
                    <span className="text-violet-700 font-bold text-xs">N</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex gap-2">
                  <div className="bg-indigo-100 w-8 h-8 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-700 font-bold text-xs">M</span>
                  </div>
                  <div className="bg-violet-100 w-8 h-8 rounded-lg flex items-center justify-center">
                    <span className="text-violet-700 font-bold text-xs">JS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-muted-foreground text-sm mb-2">Scroll to explore</p>
        <Button variant="ghost" size="icon" className="rounded-full animate-bounce">
          <ArrowDown />
        </Button>
      </motion.div>
    </section>
  );
}