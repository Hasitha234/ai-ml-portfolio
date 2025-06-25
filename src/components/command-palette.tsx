'use client'

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { 
  Home, User, Briefcase, Code, Mail, FileText, 
  Moon, Sun, Download, Github, Linkedin, Twitter 
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-2xl bg-background border rounded-lg shadow-lg overflow-hidden">
        <Command.Input 
          placeholder="Type a command or search..."
          className="w-full px-4 py-3 text-lg border-b outline-none"
        />
        <Command.List className="max-h-96 overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="mb-2">
            <Command.Item onSelect={() => runCommand(() => router.push('/#'))}>
              <Home className="mr-2 h-4 w-4" /> Home
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push('/#about'))}>
              <User className="mr-2 h-4 w-4" /> About
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push('/#projects'))}>
              <Code className="mr-2 h-4 w-4" /> Projects
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push('/#contact'))}>
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push('/blog'))}>
              <FileText className="mr-2 h-4 w-4" /> Blog
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="mb-2">
            <Command.Item onSelect={() => runCommand(() => document.documentElement.classList.toggle('dark'))}>
              <Moon className="mr-2 h-4 w-4" /> Toggle Theme
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Social">
            <Command.Item onSelect={() => runCommand(() => window.open('https://github.com/yourusername', '_blank'))}>
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.open('https://linkedin.com/in/yourusername', '_blank'))}>
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  )
} 