'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechStart Solutions',
    image: '/images/testimonials/sarah.jpg',
    stars: 5,
    text: 'Exceptional full-stack developer who delivered our SaaS platform on time and within budget. The code quality is outstanding, and the application handles our 10K+ users flawlessly. Highly recommend for any web development project.',
    category: 'software'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'E-commerce Plus',
    image: '/images/testimonials/michael.jpg',
    stars: 5,
    text: 'Built our entire e-commerce platform from scratch using React and Node.js. The performance optimizations resulted in 40% faster load times and 25% higher conversion rates. A true professional.',
    category: 'software'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'AI Research Lead',
    company: 'DataFlow Labs',
    image: '/images/testimonials/emily.jpg',
    stars: 5,
    text: 'Impressed by their ability to integrate AI features into our existing web application. The ChatGPT integration they implemented has transformed our customer service, handling 90% of queries automatically.',
    category: 'ai'
  },
  {
    name: 'James Wilson',
    role: 'Startup Founder',
    company: 'InnovateCorp',
    image: '/images/testimonials/james.jpg',
    stars: 5,
    text: 'What sets them apart is the combination of solid software engineering skills with cutting-edge AI knowledge. They built us a traditional web app and then enhanced it with intelligent features that wow our users.',
    category: 'hybrid'
  },
  {
    name: 'Lisa Thompson',
    role: 'Engineering Manager',
    company: 'ScaleUp Technologies',
    image: '/images/testimonials/lisa.jpg',
    stars: 5,
    text: 'Led our development team through a complex migration project. Excellent technical leadership, clean code practices, and great communication. The new architecture handles 10x more traffic than before.',
    category: 'software'
  },
  {
    name: 'David Park',
    role: 'Data Scientist',
    company: 'ML Innovations',
    image: '/images/testimonials/david.jpg',
    stars: 5,
    text: 'Helped us deploy our ML models into production with a beautiful web interface. They understand both the technical ML aspects and how to build user-friendly applications around them.',
    category: 'ai'
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me - from full-stack development projects to AI integrations.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-xl p-8 glass"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                        <div className="flex items-center mt-1">
                          {Array.from({ length: testimonial.stars }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 