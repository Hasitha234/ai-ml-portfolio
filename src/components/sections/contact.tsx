'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle } from 'lucide-react'

const projectTypes = [
  'ChatGPT Integration',
  'Custom ML Model',
  'AI Web Application',
  'Data Science Consulting',
  'Other',
]

const budgetRanges = [
  'Under $2,000',
  '$2,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
]

export default function ContactSection() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Create mailto URL with form data
      const subject = encodeURIComponent(`New Project Inquiry: ${formData.projectType}`)
      const body = encodeURIComponent(`
Hello,

I'm interested in working with you on a project. Here are the details:

Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}

Message:
${formData.message}

Best regards,
${formData.name}
      `.trim())

      const mailtoURL = `mailto:hasithab66@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoURL
      
      // Show success message
      alert('Opening your email client... Please send the email to complete your inquiry.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
      })
      
    } catch (error) {
      alert('Something went wrong. Please try again or email me directly at hasithab66@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring AI-powered solutions to your business? Let&apos;s discuss
            your project and explore how we can collaborate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  required
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  required
                >
                  <option value="">Select a budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Availability Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-card rounded-xl p-6 glass">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <p className="mt-4 text-muted-foreground">
                Available for new projects starting July 2024. Book a consultation
                to discuss your project requirements.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="bg-card rounded-xl p-6 glass">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => {
                    window.location.href = 'mailto:hasithab66@gmail.com?subject=Quick Inquiry&body=Hello, I would like to discuss a project with you.'
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Email Me Directly
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open('https://wa.me/your-number', '_blank');
                    }
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong>Email:</strong> hasithab66@gmail.com<br/>
                Response time: Usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 