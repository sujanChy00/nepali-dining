import { useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Progress } from './ui/progress'

export function NavigationProgress() {
  const navigation = useRouterState()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let progressInterval: NodeJS.Timeout

    if (navigation.isLoading) {
      setProgress(40)
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 90) {
            clearInterval(progressInterval)
            return prevProgress
          }
          return prevProgress + 10
        })
      }, 200)

      return () => clearInterval(progressInterval)
    } else if (!navigation.isLoading) {
      setProgress(100)
      const timer = setTimeout(() => {
        setProgress(0)
      }, 400)

      return () => {
        clearTimeout(timer)
        clearInterval(progressInterval)
      }
    }
  }, [navigation.isLoading])

  if (progress === 0) return null

  return (
    <Progress
      value={progress}
      className="fixed top-0 left-0 right-0 z-50 h-1 w-full rounded-none bg-transparent"
    />
  )
}
