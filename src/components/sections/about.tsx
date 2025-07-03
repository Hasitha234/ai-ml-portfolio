'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Brain, Award, Users, Zap } from 'lucide-react'

const skills = [
  { name: 'JavaScript/TypeScript', level: 95, category: 'core' },
  { name: 'React/Next.js', level: 92, category: 'core' },
  { name: 'Node.js/Express', level: 90, category: 'core' },
  { name: 'Database Design', level: 85, category: 'core' },
  { name: 'System Architecture', level: 88, category: 'software' },
  { name: 'API Development', level: 92, category: 'software' },
  { name: 'Cloud Deployment', level: 80, category: 'software' },
  { name: 'DevOps/CI-CD', level: 75, category: 'software' },
  { name: 'Python/ML', level: 70, category: 'ai' },
  { name: 'LLM Integration', level: 85, category: 'ai' },
  { name: 'Data Processing', level: 72, category: 'ai' },
  { name: 'AI Model Deployment', level: 68, category: 'ai' },
]

const achievements = [
  {
    icon: Code,
    title: '50+ Applications Built',
    description: 'Full-stack web applications serving thousands of users',
    color: 'primary'
  },
  {
    icon: Database,
    title: '100K+ Users Served',
    description: 'Scalable systems handling high-traffic workloads',
    color: 'secondary'
  },
  {
    icon: Brain,
    title: '10+ AI Integrations',
    description: 'Successfully integrated AI features into existing apps',
    color: 'accent'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Led development teams and mentored junior developers',
    color: 'primary'
  }
]

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    container: ref
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate full-stack developer with 3+ years of experience building scalable web applications,
            now expanding into AI/ML to create intelligent solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-primary" />
                My Development Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Started as a curious developer in 2021, I&apos;ve spent over 3 years mastering the art of 
                full-stack web development. From building my first React component to architecting 
                enterprise-scale applications, I&apos;ve consistently focused on writing clean, maintainable code 
                and delivering exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 2024, I began exploring the fascinating world of AI and machine learning. What started 
                as curiosity about ChatGPT integrations has evolved into a deep passion for building 
                intelligent applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I combine my solid foundation in software engineering with cutting-edge AI technologies 
                to create applications that are not just functional, but truly intelligent.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-4 glass"
                >
                  <div className={`w-10 h-10 rounded-lg bg-${achievement.color}/20 flex items-center justify-center mb-3`}>
                    <achievement.icon className={`w-5 h-5 text-${achievement.color}`} />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ y }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-primary" />
              Technical Skills
            </h3>

            {/* Core Development Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Core Development (3+ years)</h4>
              {skills.filter(skill => skill.category === 'core').map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/70"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Software Engineering Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-secondary">Software Engineering</h4>
              {skills.filter(skill => skill.category === 'software').map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-secondary to-secondary/70"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI/ML Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent">AI/ML Integration </h4>
              {skills.filter(skill => skill.category === 'ai').map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-accent/70"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 