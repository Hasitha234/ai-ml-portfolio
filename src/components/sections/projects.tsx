'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Play } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  youtubeUrl: string
  tech: string[]
  metrics: Record<string, string>
  featured: boolean
}

const projects: Project[] = [
  {
    title: 'Full Stack E-commerce Platform with AI-powered Chatbot',
    description: 'Full Stack E-commerce Platform with AI-powered Chatbot for Laptop Shop Sellers can manage all things using this Application and customer can chat with AI-powered chatbot to get help and buy products',
    image: '/images/1.PNG', 
    youtubeUrl: 'https://youtu.be/TECUmYw6nqQ',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'TypeScript'], 
    metrics: {  
      users: '1',
      uptime: '99.8%',
      responseTime: '<250ms',
      modules: '12 integrated'
    },
    featured: true,
  },
  {
    title: 'RouteOptima Pro - Multi-Vehicle Route Optimizer',
    description: 'Advanced logistics optimization platform with AI-powered route planning, using real-time traffic and weather.',
    image: '/images/2.PNG',
    youtubeUrl: 'https://youtu.be/b2wkQFAGJC0',
    tech: ['Vue.js', 'Python', 'PostgreSQL', 'Google Maps API', 'Redis', 'Docker'],
    metrics: {
      routes: '10K+ optimized',
      efficiency: '35% fuel savings',
      delivery: '95% on-time',
      accuracy: '94%'
    },
    featured: true,
  },
  {
    title: 'Gym Management System with Wall to share images and videos',
    description: 'Gym Management System for Gym Owners and users to manage their gym and post their daily workout, create plan, track their progress.',
    image: '/images/3.PNG',
    youtubeUrl: 'https://youtu.be/TQ_W-lxpSSo',
    tech: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'AWS'],
    metrics: {
      users: '1',
      uptime: '99.8%',
      responseTime: '<250ms',
      modules: '12 integrated'
    },
    featured: true,
  },
  {
    title: 'Laptop Price Prediction System',
    description: 'Using Machine Learning to predict the price of a laptop based on its features and specifications.',
    image: '/images/4.PNG',
    youtubeUrl: 'https://youtu.be/ieHKdbVcsF4',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Flask', 'AWS'],
    metrics: {
      users: '1',
      uptime: '99.8%',
      responseTime: '<250ms',
      modules: '12 integrated'
    },
    featured: true,
  },
  {
    title: 'AI Powered Chatbot',
    description: 'AI Powered Chatbot for Customers special purposes.',
    image: '/images/5.PNG', 
    youtubeUrl: 'https://youtu.be/LAY-ALjWlp8',
    tech: ['Python', 'TensorFlow', 'GPT-4', 'FastAPI', 'PostgreSQL', 'Redis'],
    metrics: {
      accuracy: '94%',
      optimization: '40% time saved',
      algorithm: 'Genetic + ML',
      routes: '50K+ calculated'
    },
    featured: true,
  },
  {
    title: 'Full Stack E-commerce Platform for Spice selling client',
    description: 'Full Stack E-commerce Platform for Spice Sellers can manage all productions, delivery and many more things using this web application',
    image: '/images/6.PNG', 
    youtubeUrl: 'https://youtu.be/JVguMz5Bmmk',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'TypeScript'], 
    metrics: {  
      users: '1',
      uptime: '99.8%',
      responseTime: '<250ms',
      modules: '12 integrated'
    },
    featured: true,
  },
  {
    title: 'Full Stack E-commerce Platform for Stationary Business',
    description: 'Full Stack E-commerce Platform for Stationary Shop, Seller can managel bills, deliveries and many more things using this Application',
    image: '/images/7.PNG', 
    youtubeUrl: 'https://youtu.be/JPcqzSUdCEI',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'TypeScript'], 
    metrics: {  
      users: '1',
      uptime: '99.8%',
      responseTime: '<250ms',
      modules: '12 integrated'
    },
    featured: true,
  },
]

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const openYouTubeVideo = (url: string, title: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
    
    // Track YouTube link click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'youtube_video_click', {
        event_category: 'engagement',
        event_label: title,
      })
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across different domains, from full-stack applications to AI/ML solutions.
            <br />

          Some of my projects with client&apos;s permission.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card rounded-xl overflow-hidden glass hover:shadow-lg transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary/20 scale-105' : ''
              }`}
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

              {/* Project Image with YouTube Play Button */}
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => openYouTubeVideo(project.youtubeUrl, project.title)}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 3}
                />
                
                {/* YouTube Play Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg transform transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-center">
                    <div className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      Watch Demo
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-muted/20 rounded-lg">
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      <div className="text-sm font-semibold">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => openYouTubeVideo(project.youtubeUrl, project.title)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 