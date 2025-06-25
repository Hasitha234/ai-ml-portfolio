'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Play, Pause } from 'lucide-react'

interface OptimizedVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  showControls?: boolean
}

export default function OptimizedVideo({
  src,
  poster,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  showControls = false
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (inView && autoPlay) {
      video.play().catch(e => {
        console.log('Autoplay prevented:', e)
        setIsPlaying(false)
      })
      setIsPlaying(true)
    } else if (!inView && autoPlay) {
      video.pause()
      setIsPlaying(false)
    }
  }, [inView, autoPlay])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  return (
    <div ref={ref} className={`relative group ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg">
          {poster && (
            <img 
              src={poster} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover opacity-50"
            />
          )}
        </div>
      )}
      
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        muted={muted}
        loop={loop}
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        onClick={showControls ? togglePlay : undefined}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause overlay */}
      {showControls && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="w-12 h-12 text-white" />
          ) : (
            <Play className="w-12 h-12 text-white" />
          )}
        </button>
      )}
    </div>
  )
} 