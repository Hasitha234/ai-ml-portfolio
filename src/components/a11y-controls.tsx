'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Minimize2, Type, Zap } from 'lucide-react'

export default function A11yControls() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    
    if (reducedMotion) {
      root.classList.add('reduce-motion')
    } else {
      root.classList.remove('reduce-motion')
    }

    if (largeText) {
      root.classList.add('large-text')
    } else {
      root.classList.remove('large-text')
    }

    if (highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
  }, [reducedMotion, largeText, highContrast])

  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setReducedMotion(!reducedMotion)}
        className={reducedMotion ? 'bg-primary text-primary-foreground' : ''}
        title="Toggle reduced motion"
      >
        <Minimize2 className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setLargeText(!largeText)}
        className={largeText ? 'bg-primary text-primary-foreground' : ''}
        title="Toggle large text"
      >
        <Type className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setHighContrast(!highContrast)}
        className={highContrast ? 'bg-primary text-primary-foreground' : ''}
        title="Toggle high contrast"
      >
        <Zap className="h-4 w-4" />
      </Button>
    </div>
  )
} 