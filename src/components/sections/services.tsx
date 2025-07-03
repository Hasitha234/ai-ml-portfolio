'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Database, LineChart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Complete web applications built with modern technologies and best practices. My core expertise with 3+ years of proven experience.',
    icon: Code,
    pricing: '$3,000 - $15,000',
    features: [
      'React/Next.js applications',
      'Node.js/Express APIs',
      'Database design (SQL/NoSQL)',
      'Cloud deployment (AWS/Vercel)',
      'Responsive UI/UX design',
      'Performance optimization',
    ],
    popular: true,
    badge: 'Core Expertise',
  },
  {
    title: 'Enterprise Software Solutions',
    description: 'Scalable architectures and enterprise-grade applications for growing businesses. Built on solid software engineering foundations.',
    icon: Database,
    pricing: '$5,000 - $25,000',
    features: [
      'Microservices architecture',
      'API development & integration',
      'Database optimization',
      'Code review & refactoring',
      'Technical documentation',
      'Team leadership & collaboration',
    ],
    popular: false,
    badge: 'High Demand',
  },
  {
    title: 'AI/ML Integration Services',
    description: 'Add intelligent features to your existing applications with AI/ML capabilities. Growing expertise with practical focus.',
    icon: Brain,
    pricing: '$2,000 - $8,000',
    features: [
      'OpenAI/LLM integration',
      'Intelligent automation',
      'AI-powered features',
      'Data processing pipelines',
      'ML model integration',
      'Performance monitoring',
    ],
    popular: false,
    badge: 'Emerging Skill',
  },
  {
    title: 'Modern Tech Stack Consulting',
    description: 'Expert guidance on technology selection, architecture planning, and development best practices.',
    icon: LineChart,
    pricing: '$150/hour',
    features: [
      'Tech stack selection',
      'Architecture planning',
      'DevOps setup & CI/CD',
      'Performance audits',
      'Code quality assessment',
      'Team training & mentoring',
    ],
    popular: false,
    badge: 'Strategic',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offered</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional development services built on 3+ years of solid software engineering experience,
            from full-stack web applications to enterprise solutions and emerging AI integration capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card rounded-xl p-6 glass hover:shadow-lg transition-all duration-300 ${
                service.popular ? 'ring-2 ring-primary/30 scale-105' : ''
              } ${
                service.title === 'Enterprise Software Solutions' || 
                service.title === 'AI/ML Integration Services' || 
                service.title === 'Modern Tech Stack Consulting'
                  ? 'ring-2 ring-secondary/20 border-l-4 border-l-secondary/40' 
                  : ''
              }`}
            >
              {service.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${
                    service.badge === 'Core Expertise' 
                      ? 'bg-gradient-to-r from-primary to-secondary'
                      : service.badge === 'High Demand'
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                      : service.badge === 'Emerging Skill'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                      : 'bg-gradient-to-r from-gray-500 to-gray-600'
                  }`}>
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Featured Services Badge */}
              {(service.title === 'Enterprise Software Solutions' || 
                service.title === 'AI/ML Integration Services' || 
                service.title === 'Modern Tech Stack Consulting') && (
                <div className="absolute top-4 right-4">
                  <span className="text-white text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-secondary to-accent">
                    ⭐ Featured
                  </span>
                </div>
              )}
              
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <div className="text-2xl font-bold text-primary mb-4">
                {service.pricing}
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 