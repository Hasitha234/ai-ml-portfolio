'use client'

import { motion } from 'framer-motion'
import ExperienceTimeline from '@/components/ui/experience-timeline'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Development Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From learning my first line of code to building intelligent applications - 
            a comprehensive timeline of my software development career and recent expansion into AI/ML
          </p>
        </motion.div>

        <ExperienceTimeline />
      </div>
    </section>
  )
} 