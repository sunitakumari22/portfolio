import { ArrowDown, Mail, FileText, Github, Linkedin, Twitter, Sparkles, Code, Server, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 md:py-16"
      style={{
        background: 'radial-gradient(ellipse at top right, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 60%), radial-gradient(ellipse at bottom left, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.98) 100%)'
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-violet-500/15 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" style={{animation: 'float 6s ease-in-out infinite'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px),
                           linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-violet-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
           
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                  Sunita Kumari
                </span>
                <span className="block text-white/90 mt-4 text-xl md:text-2xl lg:text-3xl">
                  Full Stack Web Developer
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  <Code className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-sm text-indigo-300">MEAN Stack</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30">
                  <Server className="w-3.5 h-3.5 text-violet-400" />
                  <span className="text-sm text-violet-300">MERN Stack</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30">
                  <Palette className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-sm text-purple-300">UI/UX Design</span>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I build fast, scalable web applications using modern stacks like MEAN and MERN. 
              With expertise in both frontend and backend development, I deliver complete 
              solutions for projects ranging from enterprise systems to educational platforms.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                <a href="#contact" className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>Get in Touch</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                <a href="#projects" className="flex items-center gap-3">
                  <FileText size={18} />
                  <span>View Projects</span>
                </a>
              </Button>
            </motion.div>
            
            {/* Social Links & Stats */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex items-center gap-6">
                <div className="flex gap-4">
                  <a href="#" className="group w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/20 transition-all duration-300">
                    <Github className="text-gray-300 group-hover:text-white transition-colors" size={20} />
                  </a>
                  <a href="#" className="group w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/20 transition-all duration-300">
                    <Linkedin className="text-gray-300 group-hover:text-white transition-colors" size={20} />
                  </a>
                  <a href="#" className="group w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/20 transition-all duration-300">
                    <Twitter className="text-gray-300 group-hover:text-white transition-colors" size={20} />
                  </a>
                </div>
                
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-sm text-gray-400">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">3+</p>
                    <p className="text-sm text-gray-400">Years Exp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Image Section */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10">
                <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
                  {/* Floating border effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-3xl opacity-30"></div>
                  
                  {/* Profile image with gradient border */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 p-1">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                      <img
                        src="/images/myyypic.jpeg"
                        alt="Sunita Kumari - Full Stack Developer"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
              
             
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-gray-400 text-sm mb-3 tracking-wider">SCROLL DOWN</p>
        <Button variant="ghost" size="icon" className="rounded-full border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 group">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="text-indigo-400 group-hover:text-white transition-colors" />
          </motion.div>
        </Button>
      </motion.div>
      
    
    </section>
  );
}