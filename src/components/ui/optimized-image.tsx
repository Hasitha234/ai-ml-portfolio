'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: string
  onLoad?: () => void
  onError?: (error: Error) => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallback = '/images/placeholder.jpg',
  priority = false,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // Intersection Observer setup
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Handle successful load
  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  // Handle load error
  const handleError = (error: Error) => {
    setError(error)
    onError?.(error)
  }

  // Generate responsive sizes based on image dimensions
  const getSizes = () => {
    if (!width || !height) return '100vw'

    const numWidth = typeof width === 'string' ? parseInt(width) : width
    const numHeight = typeof height === 'string' ? parseInt(height) : height
    const aspectRatio = numWidth / numHeight
    
    if (aspectRatio > 2) {
      return '100vw'
    } else if (aspectRatio > 1) {
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    } else {
      return '(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw'
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden',
        !isLoaded && 'animate-pulse bg-muted',
        className
      )}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    >
      {inView && (
        <>
          {/* Blur placeholder */}
          {!isLoaded && !error && (
            <Image
              src={fallback}
              alt="Loading placeholder"
              fill
              className="object-cover blur-lg scale-110"
              priority={priority}
            />
          )}

          {/* Main image */}
          <Image
            src={error ? fallback : src}
            alt={alt}
            width={width}
            height={height}
            className={cn(
              'object-cover transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            sizes={getSizes()}
            priority={priority}
            quality={90}
            onLoad={handleLoad}
            onError={() => handleError(new Error(`Failed to load image: ${src}`))}
            {...props}
          />

          {/* Error state */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-destructive/10">
              <p className="text-sm text-destructive">Failed to load image</p>
            </div>
          )}
        </>
      )}
    </div>
  )
} 