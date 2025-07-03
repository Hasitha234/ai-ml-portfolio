'use client'

import { motion } from 'framer-motion'
import TechnicalExpertise from '@/components/ui/technical-expertise'

export default function TechnicalExpertiseSection() {
  return (
    <section id="technical-expertise" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Years of hands-on experience across diverse technical domains. 
            From full-stack development foundations to cutting-edge AI integration, 
            here{`'`}s where I{`'`}ve invested my time and built real expertise.
          </p>
        </motion.div>

        <TechnicalExpertise showCategories={true} />

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-xl p-8 glass max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Experience Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              My technical journey reflects a <span className="text-primary font-semibold">foundation-first approach</span> — 
              building solid software engineering skills over 3+ years before expanding into AI/ML. 
              This gives me the unique ability to not just implement AI solutions, but to 
              <span className="text-secondary font-semibold"> architect them properly</span> within 
              robust, scalable applications that businesses can depend on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 