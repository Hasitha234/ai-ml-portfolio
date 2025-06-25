'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import VideoPlayer from '@/components/ui/video-player'

type ProjectCategory = 'full-stack' | 'ai-ml' | 'hybrid'

interface Project {
  title: string
  description: string
  video: string
  tech: string[]
  metrics: Record<string, string>
  category: ProjectCategory
  featured: boolean
}

interface CategoryConfig {
  label: string
  color: string
  description: string
  percentage: number
  count: number
}

const projects: Project[] = [
  // Full-Stack Applications (60% emphasis - 4 projects)
  {
    title: 'Full Stack E-commerce Platform with AI-powered Chatbot',
    description: 'Full Stack E-commerce Platform with AI-powered Chatbot for Laptop Shop Sellers can manage all things using this Application and customer can chat with AI-powered chatbot to get help and buy products',
    video: '/videos/1.mp4', 
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'TypeScript'], 
    metrics: {  
      users: '1',
      uptime: '99.8%',
      responseTime: '<250ms',
      modules: '12 integrated'
    },
    category: 'full-stack',
    featured: true,
  },
  {
    title: 'RouteOptima Pro - Multi-Vehicle Route Optimizer',
    description: 'Advanced logistics optimization platform with AI-powered route planning, using real-time traffic and weather.',
    video: '/videos/2.mp4',
    tech: ['Vue.js', 'Python', 'PostgreSQL', 'Google Maps API', 'Redis', 'Docker'],
    metrics: {
      routes: '10K+ optimized',
      efficiency: '35% fuel savings',
      delivery: '95% on-time',
      accuracy: '94%'
    },
    category: 'full-stack',
    featured: true,
  },
      {
      title: 'Gym Management System with Wall to share images and videos',
      description: 'Gym Management System for Gym Owners and users to manage their gym and post their daily workout, create plan, track their progress.',
      video: '/videos/3.mp4',
      tech: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'AWS'],
      metrics: {
        users: '1',
        uptime: '99.8%',
        responseTime: '<250ms',
        modules: '12 integrated'
      },
      category: 'full-stack',
      featured: true,
    },
    {
      title: 'Laptop Price Prediction System',
      description: 'Using Machine Learning to predict the price of a laptop based on its features and specifications.',
      video: '/videos/4.mp4',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Flask', 'AWS'],
      metrics: {
        users: '1',
        uptime: '99.8%',
        responseTime: '<250ms',
        modules: '12 integrated'
      },
      category: 'ai-ml',
      featured: true,
    },
  
  // AI/ML Projects (25% emphasis - 2 projects)
      {
      title: 'AI Powered Chatbot',
      description: 'AI Powered Chatbot for Customers special purposes.',
      video: '/videos/5.mp4', 
      tech: ['Python', 'TensorFlow', 'GPT-4', 'FastAPI', 'PostgreSQL', 'Redis'],
      metrics: {
        accuracy: '94%',
        optimization: '40% time saved',
        algorithm: 'Genetic + ML',
        routes: '50K+ calculated'
      },
      category: 'ai-ml',
      featured: true,
    },
    {
    title: 'Full Stack E-commerce Platform for Spice selling client',
    description: 'Full Stack E-commerce Platform for Spice Sellers can manage all productions, delivery and many more things using this web application',
    video: '/videos/6.mp4', 
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'TypeScript'], 
    metrics: {  
      users: '1',
      uptime: '99.8%',
      responseTime: '<250ms',
      modules: '12 integrated'
    },
    category: 'full-stack',
    featured: true,
  },
  {
    title: 'Full Stack E-commerce Platform for Stationary Business',
    description: 'Full Stack E-commerce Platform for Stationary Shop, Seller can managel bills, deliveries and many more things using this Application',
    video: '/videos/7.mp4', 
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'TypeScript'], 
    metrics: {  
      users: '1',
      uptime: '99.8%',
      responseTime: '<250ms',
      modules: '12 integrated'
    },
    category: 'full-stack',
    featured: true,
  },

  
  
  // Hybrid Projects (15% emphasis - 2 projects)
  
  
]

const categoryConfig: Record<ProjectCategory, CategoryConfig> = {
  'full-stack': {
    label: 'Full-Stack Applications',
    color: 'primary',
    description: 'Complete web applications built from ground up - my core expertise with 3+ years of experience',
    percentage: 60,
    count: projects.filter(p => p.category === 'full-stack').length
  },
  'ai-ml': {
    label: 'AI/ML Solutions',
    color: 'secondary', 
    description: 'Pure machine learning and AI projects - specialized expertise developed',
    percentage: 25,
    count: projects.filter(p => p.category === 'ai-ml').length
  },
  'hybrid': {
    label: 'AI-Enhanced Applications',
    color: 'accent',
    description: 'Traditional applications enhanced with intelligent features - the future of web development',
    percentage: 15,
    count: projects.filter(p => p.category === 'hybrid').length
  }
}

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Show all projects since we removed filtering
  const filteredProjects = projects

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing 3+ years of development expertise across different domains - 
            from enterprise web applications to cutting-edge AI solutions
          </p>
          

        </motion.div>

        {/* Simple Projects Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">
            Some of my projects with Clients Permissions
          </p>
        </div>



        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card rounded-xl overflow-hidden glass hover:shadow-lg transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary/20 scale-105' : ''
              } ${project.category === 'full-stack' ? 'border-l-4 border-l-primary/30' : 
                  project.category === 'ai-ml' ? 'border-l-4 border-l-secondary/30' : 
                  'border-l-4 border-l-accent/30'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="gradient" className="text-xs font-semibold">
                    ⭐ Featured
                  </Badge>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge 
                  variant="outline" 
                  className={`text-xs bg-${categoryConfig[project.category].color}/10 border-${categoryConfig[project.category].color}/20 text-${categoryConfig[project.category].color} font-semibold`}
                >
                  {categoryConfig[project.category].label}
                </Badge>
              </div>

              {/* Video Preview */}
              <div className="aspect-video relative bg-muted/20 overflow-hidden">
                {/* Try native HTML5 video first for testing */}
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  onError={(e) => {
                    console.error('Native video error for', project.title, ':', e);
                  }}
                  onLoadedData={() => {
                    console.log('Native video loaded for', project.title);
                  }}
                  onCanPlay={() => {
                    console.log('Native video can play for', project.title);
                  }}
                  onPlay={() => {
                    console.log('Video started playing for', project.title);
                  }}
                  onPause={() => {
                    console.log('Video paused for', project.title);
                  }}
                  onClick={(e) => {
                    const video = e.target as HTMLVideoElement;
                    if (video.paused) {
                      video.play();
                      console.log('Manual play triggered for', project.title);
                    } else {
                      video.pause();
                      console.log('Manual pause triggered for', project.title);
                    }
                  }}
                />
                

                
                {/* Fallback to custom VideoPlayer if needed */}
                {/* <VideoPlayer
                  url={project.video}
                  playing={hoveredIndex === index}
                  className="absolute inset-0"
                  onError={(error: any) => {
                    console.error('Video error for', project.title, ':', error);
                  }}
                  onReady={() => {
                    console.log('Video ready:', project.video);
                  }}
                /> */}
                
                {/* Video interaction overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute bottom-4 right-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-2 bg-muted/50 rounded-lg"
                    >
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      <div className="text-sm font-semibold">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl border border-muted"
        >
          <h3 className="text-2xl font-bold mb-4">Portfolio Overview</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Full-Stack Applications</div>
              <div className="text-xs text-primary/70">Core Expertise </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">AI/ML Solutions</div>
              <div className="text-xs text-secondary/70">Specialized Skills </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Featured Projects</div>
              <div className="text-xs text-accent/70">Premium Quality • All Projects</div>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Ready to build your next project? Let&apos;s discuss how my balanced expertise can bring your vision to life.
          </p>
          <Button variant="gradient" size="lg">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 