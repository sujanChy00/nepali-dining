import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background text-foreground px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
          404
        </h1>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {children || 'Page Not Found'}
        </h2>
        <p className="max-w-md text-muted-foreground text-lg">
          {'The page you are looking for does not exist or has been moved.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.history.back()} variant="outline">
            Go Back
          </Button>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
