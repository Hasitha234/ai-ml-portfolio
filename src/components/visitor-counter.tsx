'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye } from 'lucide-react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    // Get count from localStorage or initialize to 1
    const storedCount = localStorage.getItem('visitorCount')
    const initialCount = storedCount ? parseInt(storedCount) : 0

    // Increment count for this visit
    const newCount = initialCount + 1
    localStorage.setItem('visitorCount', newCount.toString())
    setCount(newCount)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-card/80 backdrop-blur-sm border rounded-full px-4 py-2 flex items-center gap-2 text-sm"
    >
      <Eye className="w-4 h-4 text-muted-foreground" />
      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          className="font-medium"
        >
          {count.toLocaleString()} views
        </motion.span>
      </AnimatePresence>
    </motion.div>
  )
} 