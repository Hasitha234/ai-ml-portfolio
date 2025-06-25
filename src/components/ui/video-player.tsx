'use client'

import { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-muted/20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
})

interface VideoPlayerProps {
  url: string
  playing?: boolean
  className?: string
  onError?: (error: any) => void
  onReady?: () => void
}

// Helper function to get optimized video path
const getOptimizedVideoPath = (url: string): string => {
  // If URL is already optimized or external, return as is
  if (url.includes('optimized') || !url.includes('/videos/')) {
    return url
  }
  
  // Convert to optimized path
  const fileName = url.split('/').pop()?.replace('.mp4', '-optimized.mp4') || url
  return url.replace(/\/videos\/([^/]+)$/, `/videos/optimized/${fileName}`)
}

export default function VideoPlayer({ 
  url, 
  playing = true, 
  className = '',
  onError,
  onReady 
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [useNativePlayer, setUseNativePlayer] = useState(false)
  const [currentUrl, setCurrentUrl] = useState(url)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Try optimized version first, fallback to original
    const optimizedUrl = getOptimizedVideoPath(url)
    setCurrentUrl(optimizedUrl)
    
    // Reset states when URL changes
    setHasError(false)
    setIsReady(false)
    setUseNativePlayer(false)
  }, [url])

  const handleError = (error: any) => {
    console.error('ReactPlayer error for', currentUrl, ':', error)
    
    // If optimized version failed, try original
    if (currentUrl.includes('optimized')) {
      console.log('Falling back to original video:', url)
      setCurrentUrl(url)
      setHasError(false)
      return
    }
    
    setHasError(true)
    setUseNativePlayer(true)
    onError?.(error)
  }

  const handleReady = () => {
    console.log('Video ready:', currentUrl)
    setIsReady(true)
    onReady?.()
  }

  const handleNativeVideoError = () => {
    console.error('Native video error for', currentUrl)
    
    // If optimized version failed, try original
    if (currentUrl.includes('optimized')) {
      console.log('Native player falling back to original video:', url)
      setCurrentUrl(url)
      return
    }
    
    setHasError(true)
  }

  const handleNativeVideoLoad = () => {
    console.log('Native video loaded:', currentUrl)
    setIsReady(true)
  }

  // Use native HTML5 video if ReactPlayer failed or for large files
  if (useNativePlayer || hasError) {
    return (
      <div className={`relative ${className}`}>
        <video
          ref={videoRef}
          src={currentUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onError={handleNativeVideoError}
          onLoadedData={handleNativeVideoLoad}
          onCanPlay={() => setIsReady(true)}
        />
        {!isReady && !hasError && (
          <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">Loading video...</p>
            </div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p className="text-sm text-red-500">Video unavailable</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <ReactPlayer
        url={currentUrl}
        playing={true}
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        controls={false}
        config={{
          file: {
            attributes: {
              preload: 'metadata',
              playsInline: true,
              muted: true,
              autoPlay: true,
              crossOrigin: 'anonymous'
            }
          }
        }}
        onError={handleError}
        onReady={handleReady}
        onStart={() => console.log('Video started:', currentUrl)}
        onPlay={() => console.log('Video playing:', currentUrl)}
        onPause={() => console.log('Video paused:', currentUrl)}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      
      {/* Loading state */}
      {!isReady && !hasError && (
        <div className="absolute inset-0 bg-muted/20 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-2"></div>
            <p className="text-sm text-muted-foreground">Loading video...</p>
            <p className="text-xs text-muted-foreground mt-1">
              {currentUrl.includes('optimized') ? 'Optimized version' : 'Original'}
            </p>
          </div>
        </div>
      )}
      
      {/* Play overlay */}
      {isReady && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
} 