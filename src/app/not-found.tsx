import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl mt-4">Page not found</p>
        <p className="text-muted-foreground mt-2">
          The page you{`'`}re looking for doesn{`'`}t exist.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
} 