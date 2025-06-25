export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="w-3/4 h-12 bg-muted rounded-lg mx-auto mb-6 animate-pulse" />
          <div className="w-1/2 h-6 bg-muted rounded-lg mx-auto mb-12 animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-4 bg-muted rounded-lg animate-pulse">
                <div className="h-8 bg-background/50 rounded mb-2" />
                <div className="h-4 bg-background/50 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section Skeleton */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="w-1/3 h-10 bg-muted rounded-lg mx-auto mb-16 animate-pulse" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl bg-muted p-6 animate-pulse">
                <div className="aspect-video bg-background/50 rounded-lg mb-4" />
                <div className="h-6 bg-background/50 rounded mb-3 w-3/4" />
                <div className="h-4 bg-background/50 rounded mb-2" />
                <div className="h-4 bg-background/50 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section Skeleton */}
      <div className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="w-1/3 h-10 bg-muted rounded-lg mx-auto mb-16 animate-pulse" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="h-6 bg-muted rounded w-1/2" />
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="h-4 bg-muted rounded w-1/4" />
                      <div className="h-4 bg-muted rounded w-1/6" />
                    </div>
                    <div className="h-2 bg-muted rounded-full" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section Skeleton */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="w-1/3 h-10 bg-muted rounded-lg mx-auto mb-16 animate-pulse" />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 animate-pulse">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-muted rounded" />
                <div className="h-12 bg-muted rounded" />
              </div>
              <div className="h-12 bg-muted rounded" />
              <div className="h-32 bg-muted rounded" />
              <div className="h-12 bg-muted rounded w-1/3 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 