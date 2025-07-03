'use client'

import { motion } from 'framer-motion'
import { Calendar, Code, Database, Cloud, Brain, Award, Users, Zap, TrendingUp, BookOpen } from 'lucide-react'
import { Badge } from './badge'

interface TimelineEvent {
  year: string
  period: string
  title: string
  company?: string
  description: string
  technologies: string[]
  achievements: string[]
  icon: React.ElementType
  color: 'primary' | 'secondary' | 'accent'
  type: 'software' | 'ai' | 'milestone'
  isActive?: boolean
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2021',
    period: 'Jan 2021',
    title: 'Started Software Development Journey',
    description: 'Began learning web development fundamentals and built first projects',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
    achievements: [
      'Completed first web development course',
      'Built 5+ static websites',
      'Learned version control with Git',
      'Started contributing to open source'
    ],
    icon: BookOpen,
    color: 'primary',
    type: 'software'
  },
  {
    year: '2021',
    period: 'Jun 2021',
    title: 'Junior Full-Stack Developer',
    company: 'Tech Startup',
    description: 'First professional role building React applications and Node.js APIs',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    achievements: [
      'Built 3 production web applications',
      'Implemented user authentication systems',
      'Optimized database queries by 40%',
      'Collaborated with design team on UI/UX'
    ],
    icon: Code,
    color: 'primary',
    type: 'software'
  },
  {
    year: '2022',
    period: 'Mar 2022',
    title: 'Mid-Level Developer',
    company: 'Growing Agency',
    description: 'Advanced to building complex applications with modern tech stack',
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    achievements: [
      'Led development of 10+ client projects',
      'Introduced TypeScript to team workflow',
      'Implemented CI/CD pipelines',
      'Mentored 2 junior developers'
    ],
    icon: TrendingUp,
    color: 'primary',
    type: 'software'
  },
  {
    year: '2023',
    period: 'Jan 2023',
    title: 'Senior Full-Stack Developer',
    company: 'Enterprise Solutions',
    description: 'Leading complex projects and architecting scalable systems',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    achievements: [
      'Architected microservices for 100K+ users',
      'Reduced application load time by 60%',
      'Led team of 5 developers',
      'Implemented advanced caching strategies'
    ],
    icon: Users,
    color: 'primary',
    type: 'software'
  },
  {
    year: '2024',
    period: 'Jul 2024',
    title: 'AI/ML Integration Specialist',
    company: 'Innovation Lab',
    description: 'Started exploring AI/ML to enhance existing applications',
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'LangChain', 'FastAPI'],
    achievements: [
      'Integrated ChatGPT into 5+ applications',
      'Built custom ML models with 95% accuracy',
      'Reduced manual processing by 80%',
      'Created AI-powered automation tools'
    ],
    icon: Brain,
    color: 'secondary',
    type: 'ai'
  },
  {
    year: '2024',
    period: 'Present',
    title: 'Full-Stack + AI/ML Developer',
    description: 'Combining software engineering expertise with AI capabilities',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'OpenAI', 'AWS'],
    achievements: [
      'Building intelligent web applications',
      'Consulting on AI integration projects',
      'Teaching AI concepts to development teams',
      'Creating hybrid traditional + AI solutions'
    ],
    icon: Zap,
    color: 'accent',
    type: 'milestone',
    isActive: true
  }
]

interface ExperienceTimelineProps {
  className?: string
}

export default function ExperienceTimeline({ className = '' }: ExperienceTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full opacity-30" />
      
      {/* Timeline Events */}
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={`${event.year}-${event.title}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:flex-row`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className={`w-16 h-16 rounded-full bg-card border-4 border-${event.color} flex items-center justify-center shadow-lg ${
                  event.isActive ? 'ring-4 ring-accent/30 animate-pulse' : ''
                }`}
              >
                <event.icon className={`w-8 h-8 text-${event.color}`} />
              </motion.div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
              index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className={`bg-card rounded-xl p-6 glass hover:shadow-lg transition-all duration-300 ${
                  event.isActive ? 'ring-2 ring-accent/20 bg-accent/5' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className={`text-xs bg-${event.color}/10 border-${event.color}/20 text-${event.color}`}>
                        {event.period}
                      </Badge>
                      {event.isActive && (
                        <Badge variant="gradient" className="text-xs animate-pulse">
                          Current
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    {event.company && (
                      <p className="text-sm text-muted-foreground mb-2">@ {event.company}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold text-${event.color}`}>{event.year}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center">
                    <Code className="w-4 h-4 mr-1" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {event.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {event.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${event.color} mt-2 mr-2 flex-shrink-0`} />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Year Label (Mobile) */}
            <div className="md:hidden absolute left-0 top-0">
              <div className={`text-lg font-bold text-${event.color} bg-card px-2 py-1 rounded`}>
                {event.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
      >
        <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
          <div className="text-2xl font-bold text-primary mb-1">3+</div>
          <div className="text-xs text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
          <div className="text-2xl font-bold text-primary mb-1">50+</div>
          <div className="text-xs text-muted-foreground">Projects Built</div>
        </div>
        <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/10">
          <div className="text-2xl font-bold text-secondary mb-1">AI/ML</div>
          <div className="text-xs text-muted-foreground"></div>
        </div>
        <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/10">
          <div className="text-2xl font-bold text-accent mb-1">10+</div>
          <div className="text-xs text-muted-foreground">AI Integrations</div>
        </div>
      </motion.div>
    </div>
  )
} 