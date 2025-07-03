'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, Code, Brain, Zap, Download } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-6"
          >
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">3+ Years</span>
              <span className="text-sm text-muted-foreground">Software Development</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold text-secondary"></span>
              <span className="text-sm text-muted-foreground">AI/ML Specialist</span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Full-Stack Developer</span>
            <br />
            <span className="text-foreground/90">+ AI/ML Specialist</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
          >
            Building Intelligent Web Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            <span className="font-semibold text-primary">3+ years</span> crafting scalable software solutions, 
            now adding <span className="font-semibold text-secondary">AI-powered intelligence</span> to create next-generation applications
          </motion.p>

          {/* Dual Expertise Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto"
          >
            {/* Software Development Metrics */}
            <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs text-muted-foreground">Web Apps Built</div>
              <div className="text-xs text-primary/70 mt-1">3+ Years</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100K+</div>
              <div className="text-xs text-muted-foreground">Users Served</div>
              <div className="text-xs text-primary/70 mt-1">Production Apps</div>
            </div>
            
            {/* AI/ML Metrics */}
            <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/10">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">10+</div>
              <div className="text-xs text-muted-foreground">AI Integrations</div>
              <div className="text-xs text-secondary/70 mt-1"></div>
            </div>
            <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/10">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">95%</div>
              <div className="text-xs text-muted-foreground">ML Accuracy</div>
              <div className="text-xs text-secondary/70 mt-1">Custom Models</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              variant="gradient" 
              className="text-lg px-8 py-3 min-w-[240px]"
              onClick={() => {
                const message = encodeURIComponent("Hi! I{`'`}m interested in hiring you as a Full-Stack Developer + AI/ML Specialist. Let{`'`}s discuss my project requirements.");
                if (typeof window !== 'undefined') {
                  window.open(`https://wa.me/94772374684?text=${message}`, '_blank');
                }
              }}
            >
              <Zap className="w-5 h-5 mr-2" />
              Hire Full-Stack Developer + AI/ML Specialist
            </Button>

          </motion.div>

          {/* Expertise Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>React • Node.js • TypeScript • AWS</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Python • TensorFlow • OpenAI • LangChain</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 