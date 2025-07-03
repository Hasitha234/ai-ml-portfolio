'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useAnalytics } from '@/hooks/useAnalytics'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { trackError } = useAnalytics()

  useEffect(() => {
    // Log the error to our analytics
    trackError(error.message, error.digest)
  }, [error, trackError])

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Something went wrong!</h2>
          <p className="text-muted-foreground">
            {process.env.NODE_ENV === 'development' 
              ? error.message 
              : 'An unexpected error occurred. Please try again later.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.location.href = '/'}
            variant="outline"
          >
            Go Home
          </Button>
          <Button
            onClick={() => reset()}
            variant="default"
          >
            Try Again
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 text-left">
            <details className="text-sm text-muted-foreground">
              <summary className="cursor-pointer">Error Details</summary>
              <pre className="mt-2 p-4 bg-muted rounded-lg overflow-auto">
                {error.stack}
              </pre>
            </details>
          </div>
        )}
      </div>
    </div>
  )
} 