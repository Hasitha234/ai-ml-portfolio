'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Brain, Smartphone, Globe } from 'lucide-react'

const techCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'primary',
    technologies: [
      { name: 'React', level: 95, years: '3+' },
      { name: 'Next.js', level: 90, years: '2+' },
      { name: 'TypeScript', level: 88, years: '2+' },
      { name: 'Tailwind CSS', level: 92, years: '2+' },
      { name: 'Vue.js', level: 75, years: '1+' },
      { name: 'HTML/CSS', level: 98, years: '3+' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: 'secondary',
    technologies: [
      { name: 'Node.js', level: 92, years: '3+' },
      { name: 'Express.js', level: 90, years: '3+' },
      { name: 'PostgreSQL', level: 85, years: '2+' },
      { name: 'MongoDB', level: 82, years: '2+' },
      { name: 'FastAPI', level: 78, years: '1+' },
      { name: 'GraphQL', level: 70, years: '1+' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'accent',
    technologies: [
      { name: 'AWS', level: 80, years: '2+' },
      { name: 'Docker', level: 85, years: '2+' },
      { name: 'CI/CD', level: 75, years: '1+' },
      { name: 'Kubernetes', level: 65, years: '1+' },
      { name: 'Vercel', level: 90, years: '2+' },
      { name: 'Git', level: 95, years: '3+' },
    ]
  },
  {
    title: 'AI/ML & Data',
    icon: Brain,
    color: 'purple-500',
    technologies: [
      { name: 'Python', level: 82, years: '1+' },
      { name: 'TensorFlow', level: 70, years: '0.5' },
      { name: 'OpenAI API', level: 85, years: '0.5' },
      { name: 'LangChain', level: 80, years: '0.5' },
      { name: 'Pandas', level: 75, years: '0.5' },
      { name: 'scikit-learn', level: 72, years: '0.5' },
    ]
  },
  {
    title: 'Mobile & Cross-Platform',
    icon: Smartphone,
    color: 'green-500',
    technologies: [
      { name: 'React Native', level: 75, years: '1+' },
      { name: 'PWA', level: 85, years: '2+' },
      { name: 'Responsive Design', level: 95, years: '3+' },
      { name: 'Electron', level: 65, years: '1+' },
    ]
  },
  {
    title: 'Tools & Others',
    icon: Globe,
    color: 'orange-500',
    technologies: [
      { name: 'VS Code', level: 98, years: '3+' },
      { name: 'Figma', level: 80, years: '2+' },
      { name: 'Postman', level: 90, years: '3+' },
      { name: 'Jest', level: 85, years: '2+' },
      { name: 'Cypress', level: 75, years: '1+' },
      { name: 'Webpack', level: 70, years: '2+' },
    ]
  }
]

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return {
        bg: 'bg-primary/20',
        text: 'text-primary',
        gradient: 'bg-gradient-to-r from-primary to-primary/70'
      }
    case 'secondary':
      return {
        bg: 'bg-secondary/20',
        text: 'text-secondary',
        gradient: 'bg-gradient-to-r from-secondary to-secondary/70'
      }
    case 'accent':
      return {
        bg: 'bg-accent/20',
        text: 'text-accent',
        gradient: 'bg-gradient-to-r from-accent to-accent/70'
      }
    case 'purple-500':
      return {
        bg: 'bg-purple-500/20',
        text: 'text-purple-500',
        gradient: 'bg-gradient-to-r from-purple-500 to-purple-400'
      }
    case 'green-500':
      return {
        bg: 'bg-green-500/20',
        text: 'text-green-500',
        gradient: 'bg-gradient-to-r from-green-500 to-green-400'
      }
    case 'orange-500':
      return {
        bg: 'bg-orange-500/20',
        text: 'text-orange-500',
        gradient: 'bg-gradient-to-r from-orange-500 to-orange-400'
      }
    default:
      return {
        bg: 'bg-primary/20',
        text: 'text-primary',
        gradient: 'bg-gradient-to-r from-primary to-primary/70'
      }
  }
}

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical expertise across modern development technologies,
            with deep proficiency in full-stack development and growing AI/ML capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-xl p-6 glass hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(category.color).bg} flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${getColorClasses(category.color).text}`} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{tech.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{tech.years}</span>
                        <span className="text-xs font-semibold">{tech.level}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${getColorClasses(category.color).gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">AI/ML</div>
            <div className="text-sm text-muted-foreground">Specialized Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 