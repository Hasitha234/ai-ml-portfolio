'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Brain, Smartphone, Server, Palette, Shield, Zap } from 'lucide-react'

interface ExpertiseArea {
  title: string
  years: string
  level: number
  skills: string[]
  projects: number
  icon: React.ElementType
  color: 'primary' | 'secondary' | 'accent' | 'green' | 'orange' | 'purple'
  category: 'core' | 'backend' | 'devops' | 'ai' | 'mobile' | 'design'
  description: string
}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Frontend Development',
    years: '3+',
    level: 95,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
    projects: 25,
    icon: Code,
    color: 'primary',
    category: 'core',
    description: 'Building responsive, interactive user interfaces with modern frameworks'
  },
  {
    title: 'Backend Development',
    years: '3+',
    level: 92,
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    projects: 30,
    icon: Database,
    color: 'primary',
    category: 'backend',
    description: 'Designing scalable server architectures and robust database systems'
  },
  {
    title: 'Cloud & DevOps',
    years: '2+',
    level: 80,
    skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Vercel', 'Git'],
    projects: 15,
    icon: Cloud,
    color: 'accent',
    category: 'devops',
    description: 'Deploying and managing applications in cloud environments'
  },
  {
    title: 'AI/ML Integration',
    years: '1+',
    level: 70,
    skills: ['Python', 'TensorFlow', 'OpenAI API', 'LangChain', 'Pandas', 'scikit-learn'],
    projects: 8,
    icon: Brain,
    color: 'secondary',
    category: 'ai',
    description: 'Integrating machine learning models and AI capabilities into applications'
  },
  {
    title: 'Mobile Development',
    years: '1+',
    level: 75,
    skills: ['React Native', 'PWA', 'Responsive Design', 'Mobile-First', 'App Store'],
    projects: 12,
    icon: Smartphone,
    color: 'green',
    category: 'mobile',
    description: 'Creating cross-platform mobile applications and progressive web apps'
  },
  {
    title: 'Full-Stack Architecture',
    years: '2+',
    level: 88,
    skills: ['System Design', 'Microservices', 'API Design', 'Database Design', 'Caching'],
    projects: 20,
    icon: Server,
    color: 'purple',
    category: 'backend',
    description: 'Architecting complete application ecosystems from frontend to backend'
  },
  {
    title: 'UI/UX Design',
    years: '2+',
    level: 78,
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Accessibility'],
    projects: 18,
    icon: Palette,
    color: 'orange',
    category: 'design',
    description: 'Designing user-centered interfaces with focus on usability and aesthetics'
  },
  {
    title: 'Security & Performance',
    years: '2+',
    level: 82,
    skills: ['Authentication', 'Authorization', 'Performance Optimization', 'Security Audits'],
    projects: 16,
    icon: Shield,
    color: 'accent',
    category: 'core',
    description: 'Implementing secure applications with optimized performance'
  }
]

interface TechnicalExpertiseProps {
  className?: string
  showCategories?: boolean
  maxItems?: number
}

export default function TechnicalExpertise({ 
  className = '', 
  showCategories = true,
  maxItems 
}: TechnicalExpertiseProps) {
  const displayAreas = maxItems ? expertiseAreas.slice(0, maxItems) : expertiseAreas
  const categories = Array.from(new Set(expertiseAreas.map(area => area.category)))

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'core': return 'Core Development'
      case 'backend': return 'Backend & Architecture'
      case 'devops': return 'DevOps & Cloud'
      case 'ai': return 'AI/ML'
      case 'mobile': return 'Mobile Development'
      case 'design': return 'Design & UX'
      default: return category
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core': return 'primary'
      case 'backend': return 'purple'
      case 'devops': return 'accent'
      case 'ai': return 'secondary'
      case 'mobile': return 'green'
      case 'design': return 'orange'
      default: return 'primary'
    }
  }

  return (
    <div className={`${className} relative`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-accent/20 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-purple-500/20 rounded-full"></div>
      </div>

      {/* Expertise Journey Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 relative"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">My Technical Journey</h3>
          <p className="text-muted-foreground">From foundations to cutting-edge technologies</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">2021: Started Development Journey</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <span className="text-sm font-medium">2022: Enterprise Solutions</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            <span className="text-sm font-medium">2024: AI/ML Integration</span>
          </div>
        </div>
      </motion.div>

      {showCategories ? (
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const categoryAreas = displayAreas.filter(area => area.category === category)
            const categoryColor = getCategoryColor(category)
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="relative"
              >
                {/* Enhanced Category Header */}
                <div className="relative mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-2 h-12 bg-gradient-to-b from-${categoryColor} to-${categoryColor}/50 rounded-full mr-4`} />
                      <div>
                        <h3 className={`text-2xl font-bold text-${categoryColor} mb-1`}>
                          {getCategoryTitle(category)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {categoryAreas.length} specialization{categoryAreas.length > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    
                    {/* Category Stats */}
                    <div className="hidden md:flex items-center gap-4">
                      <div className="text-center">
                        <div className={`text-lg font-bold text-${categoryColor}`}>
                          {categoryAreas.reduce((sum, area) => sum + area.projects, 0)}
                        </div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold text-${categoryColor}`}>
                          {Math.round(categoryAreas.reduce((sum, area) => sum + area.level, 0) / categoryAreas.length)}%
                        </div>
                        <div className="text-xs text-muted-foreground">Avg Skill</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
                </div>
                
                {/* Enhanced Grid with Staggered Animation */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryAreas.map((area, index) => (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <ExpertiseCard 
                        area={area} 
                        index={index}
                        delay={categoryIndex * 0.1 + index * 0.05}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayAreas.map((area, index) => (
            <ExpertiseCard 
              key={area.title} 
              area={area} 
              index={index}
              delay={index * 0.1}
            />
          ))}
        </div>
      )}

      {/* Enhanced Summary Stats with Visual Elements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 relative"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">Expertise Overview</h3>
          <p className="text-muted-foreground">Comprehensive technical capabilities at a glance</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground mb-1">Years Experience</div>
              <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl border border-purple-500/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl font-bold text-purple-500 mb-2">8</div>
              <div className="text-sm text-muted-foreground mb-1">Technical Areas</div>
              <div className="w-full h-1 bg-purple-500/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl font-bold text-secondary mb-2">25+</div>
              <div className="text-sm text-muted-foreground mb-1">Technologies</div>
              <div className="w-full h-1 bg-secondary/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-secondary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-3xl font-bold text-accent mb-2">144</div>
              <div className="text-sm text-muted-foreground mb-1">Total Projects</div>
              <div className="w-full h-1 bg-accent/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

interface ExpertiseCardProps {
  area: ExpertiseArea
  index: number
  delay: number
}

function ExpertiseCard({ area, index, delay }: ExpertiseCardProps) {
  // Color mapping to ensure Tailwind classes are generated
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          border: 'hover:border-primary/30',
          bgAccent1: 'from-primary/10',
          bgAccent2: 'from-primary/5',
          iconBg: 'from-primary/20 to-primary/10',
          iconColor: 'text-primary',
          textColor: 'text-primary',
          proficiencyBg: 'from-primary via-primary/90 to-primary/70',
          indicator: 'bg-primary',
          skillBg: 'bg-primary/10',
          skillBorder: 'border-primary/20',
          skillHover: 'hover:bg-primary/20',
          projectBg: 'bg-primary/5',
          projectBorder: 'border-primary/10',
          projectIcon: 'text-primary',
          projectText: 'text-primary'
        }
      case 'secondary':
        return {
          border: 'hover:border-secondary/30',
          bgAccent1: 'from-secondary/10',
          bgAccent2: 'from-secondary/5',
          iconBg: 'from-secondary/20 to-secondary/10',
          iconColor: 'text-secondary',
          textColor: 'text-secondary',
          proficiencyBg: 'from-secondary via-secondary/90 to-secondary/70',
          indicator: 'bg-secondary',
          skillBg: 'bg-secondary/10',
          skillBorder: 'border-secondary/20',
          skillHover: 'hover:bg-secondary/20',
          projectBg: 'bg-secondary/5',
          projectBorder: 'border-secondary/10',
          projectIcon: 'text-secondary',
          projectText: 'text-secondary'
        }
      case 'accent':
        return {
          border: 'hover:border-accent/30',
          bgAccent1: 'from-accent/10',
          bgAccent2: 'from-accent/5',
          iconBg: 'from-accent/20 to-accent/10',
          iconColor: 'text-accent',
          textColor: 'text-accent',
          proficiencyBg: 'from-accent via-accent/90 to-accent/70',
          indicator: 'bg-accent',
          skillBg: 'bg-accent/10',
          skillBorder: 'border-accent/20',
          skillHover: 'hover:bg-accent/20',
          projectBg: 'bg-accent/5',
          projectBorder: 'border-accent/10',
          projectIcon: 'text-accent',
          projectText: 'text-accent'
        }
      case 'green':
        return {
          border: 'hover:border-green-500/30',
          bgAccent1: 'from-green-500/10',
          bgAccent2: 'from-green-500/5',
          iconBg: 'from-green-500/20 to-green-500/10',
          iconColor: 'text-green-500',
          textColor: 'text-green-500',
          proficiencyBg: 'from-green-500 via-green-500/90 to-green-500/70',
          indicator: 'bg-green-500',
          skillBg: 'bg-green-500/10',
          skillBorder: 'border-green-500/20',
          skillHover: 'hover:bg-green-500/20',
          projectBg: 'bg-green-500/5',
          projectBorder: 'border-green-500/10',
          projectIcon: 'text-green-500',
          projectText: 'text-green-500'
        }
      case 'orange':
        return {
          border: 'hover:border-orange-500/30',
          bgAccent1: 'from-orange-500/10',
          bgAccent2: 'from-orange-500/5',
          iconBg: 'from-orange-500/20 to-orange-500/10',
          iconColor: 'text-orange-500',
          textColor: 'text-orange-500',
          proficiencyBg: 'from-orange-500 via-orange-500/90 to-orange-500/70',
          indicator: 'bg-orange-500',
          skillBg: 'bg-orange-500/10',
          skillBorder: 'border-orange-500/20',
          skillHover: 'hover:bg-orange-500/20',
          projectBg: 'bg-orange-500/5',
          projectBorder: 'border-orange-500/10',
          projectIcon: 'text-orange-500',
          projectText: 'text-orange-500'
        }
      case 'purple':
        return {
          border: 'hover:border-purple-500/30',
          bgAccent1: 'from-purple-500/10',
          bgAccent2: 'from-purple-500/5',
          iconBg: 'from-purple-500/20 to-purple-500/10',
          iconColor: 'text-purple-500',
          textColor: 'text-purple-500',
          proficiencyBg: 'from-purple-500 via-purple-500/90 to-purple-500/70',
          indicator: 'bg-purple-500',
          skillBg: 'bg-purple-500/10',
          skillBorder: 'border-purple-500/20',
          skillHover: 'hover:bg-purple-500/20',
          projectBg: 'bg-purple-500/5',
          projectBorder: 'border-purple-500/10',
          projectIcon: 'text-purple-500',
          projectText: 'text-purple-500'
        }
      default:
        return {
          border: 'hover:border-primary/30',
          bgAccent1: 'from-primary/10',
          bgAccent2: 'from-primary/5',
          iconBg: 'from-primary/20 to-primary/10',
          iconColor: 'text-primary',
          textColor: 'text-primary',
          proficiencyBg: 'from-primary via-primary/90 to-primary/70',
          indicator: 'bg-primary',
          skillBg: 'bg-primary/10',
          skillBorder: 'border-primary/20',
          skillHover: 'hover:bg-primary/20',
          projectBg: 'bg-primary/5',
          projectBorder: 'border-primary/10',
          projectIcon: 'text-primary',
          projectText: 'text-primary'
        }
    }
  }

  const colors = getColorClasses(area.color)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`bg-gradient-to-br from-card to-card/50 rounded-xl p-6 glass hover:shadow-xl transition-all duration-300 group border border-muted ${colors.border} relative overflow-hidden`}
    >
      {/* Background Accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.bgAccent1} to-transparent rounded-bl-full`} />
      <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${colors.bgAccent2} to-transparent rounded-tr-full`} />
      
      {/* Header with Enhanced Visual Hierarchy */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <motion.div 
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
          whileHover={{ rotate: 5 }}
        >
          <area.icon className={`w-7 h-7 ${colors.iconColor}`} />
        </motion.div>
        <div className="text-right">
          <motion.div 
            className={`text-3xl font-bold ${colors.textColor} leading-none`}
            whileHover={{ scale: 1.1 }}
          >
            {area.years}
          </motion.div>
          <div className="text-xs text-muted-foreground font-medium">years</div>
        </div>
      </div>
      
      {/* Title with Better Typography */}
      <h4 className="text-lg font-bold mb-3 leading-tight relative z-10">{area.title}</h4>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed relative z-10">
        {area.description}
      </p>
      
      {/* Enhanced Proficiency Section */}
      <div className="mb-4 relative z-10">
        <div className="flex justify-between text-sm mb-3">
          <span className="font-semibold">Proficiency</span>
          <span className={`${colors.textColor} font-bold text-base`}>{area.level}%</span>
        </div>
        <div className="relative">
          <div className="h-3 bg-muted/50 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${colors.proficiencyBg} relative`}
              initial={{ width: 0 }}
              whileInView={{ width: `${area.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
            </motion.div>
          </div>
          {/* Skill level indicator */}
          <motion.div
            className={`absolute top-0 h-3 w-1 ${colors.indicator} rounded-full shadow-lg`}
            initial={{ left: 0 }}
            whileInView={{ left: `${area.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay + 0.4, ease: "easeOut" }}
            style={{ transform: 'translateX(-50%)' }}
          />
        </div>
      </div>
      
      {/* Enhanced Skills Tags */}
      <div className="space-y-3 mb-4 relative z-10">
        <div className="flex flex-wrap gap-1.5">
          {area.skills.slice(0, 3).map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.1 * skillIndex }}
              className={`inline-block px-3 py-1.5 ${colors.skillBg} text-xs font-medium rounded-full border ${colors.skillBorder} ${colors.skillHover} transition-colors`}
            >
              {skill}
            </motion.span>
          ))}
          {area.skills.length > 3 && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.3 }}
              className="inline-block px-3 py-1.5 bg-muted/30 text-xs font-medium rounded-full text-muted-foreground hover:bg-muted/50 transition-colors cursor-help"
              title={area.skills.slice(3).join(', ')}
            >
              +{area.skills.length - 3} more
            </motion.span>
          )}
        </div>
      </div>
      
      {/* Enhanced Projects Counter */}
      <motion.div 
        className={`flex items-center justify-between text-sm relative z-10 p-3 ${colors.projectBg} rounded-lg border ${colors.projectBorder}`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center">
          <Zap className={`w-4 h-4 mr-2 ${colors.projectIcon}`} />
          <span className="font-medium">{area.projects} projects</span>
        </div>
        <div className={`text-xs ${colors.projectText} font-semibold`}>
          {area.projects > 20 ? 'Expert' : area.projects > 10 ? 'Advanced' : 'Growing'}
        </div>
      </motion.div>
    </motion.div>
  )
} 