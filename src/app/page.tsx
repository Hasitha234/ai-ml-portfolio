import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import ExperienceSection from '@/components/sections/experience'
import TechnicalExpertiseSection from '@/components/sections/technical-expertise'
import ProjectsSection from '@/components/sections/projects'
import ServicesSection from '@/components/sections/services'
import TechStackSection from '@/components/sections/tech-stack'
import TestimonialsSection from '@/components/sections/testimonials'
import ContactSection from '@/components/sections/contact'
import Navbar from '@/components/ui/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechnicalExpertiseSection />
        <ProjectsSection />
        <ServicesSection />
        <TechStackSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  )
} 