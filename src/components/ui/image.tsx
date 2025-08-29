import { cn } from '@/lib/utils'
import { ImageOff } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ColorCombination,
  defaultColorCombinations,
  hashString,
  SVGPattern,
} from '../image-svg-pattern'

type Props = React.ComponentProps<'img'>
type ImageWrapperProps = React.ComponentProps<'div'>

const ImageWrapper = ({ children, className, style }: ImageWrapperProps) => {
  return (
    <div style={style} className={cn('relative', className)}>
      {children}
    </div>
  )
}

export const Image = (props: Props) => {
  const defaultSrc = '/favicon-32x32.png'
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(
    'loading',
  )
  const imgRef = useRef<HTMLImageElement>(null)

  const patternData = useMemo(() => {
    const seedValue = hashString(props.src || 'default')
    const colorIndex = seedValue % defaultColorCombinations.length
    const selectedColors = defaultColorCombinations[colorIndex]
    const randomSeed = seedValue % 1000
    const uniqueId = `${hashString(props.src || 'default')}-${seedValue}`.slice(
      0,
      9,
    )

    return {
      colors: selectedColors,
      uniqueId,
      randomSeed,
    }
  }, [props.src])

  useEffect(() => {
    setStatus('loading')

    const img = imgRef.current
    if (img && img.complete && img.naturalWidth > 0) {
      setStatus('loaded')
    }
  }, [props.src])

  if (!props.src) {
    console.warn('Image: src prop is required')
  }
  if (!props.alt) {
    console.warn('Image: alt prop is required for accessibility')
  }

  if (!props.src || status === 'error') {
    return (
      <ImageWrapper
        className={cn('h-full text-sm w-full @container', props.className)}
        style={props.style}
      >
        <div
          className={cn(
            'h-full w-full flex flex-col items-center justify-center bg-destructive/10 text-font',
            props.className,
          )}
        >
          <ImageOff className="size-20 @max-[300px]:size-10 mb-2 text-gray-600" />
          <span className="text-center @max-[300px]:text-xs text-muted-foreground">
            Error Loading Image
          </span>
          <img
            src={props?.src || ''}
            alt={props?.alt || ''}
            className="sr-only"
          />
        </div>
      </ImageWrapper>
    )
  }

  return (
    <ImageWrapper
      style={props.style}
      className={cn('h-full relative overflow-hidden w-full', props.className)}
    >
      {status === 'loading' && (
        <div
          className={cn('absolute inset-0 transition-opacity duration-500')}
          style={{ filter: 'blur(50px)' }}
          aria-hidden="true"
        >
          <SVGPattern
            colors={patternData.colors as ColorCombination}
            uniqueId={patternData.uniqueId}
            randomSeed={patternData.randomSeed}
          />
        </div>
      )}
      <img
        {...props}
        ref={imgRef}
        onLoad={(e) => {
          setStatus('loaded')
          props.onLoad?.(e)
        }}
        src={props.src || defaultSrc}
        onError={(e) => {
          setStatus('error')
          props.onError?.(e)
        }}
        className={cn(
          'size-full object-cover transition-opacity duration-500 ease-in-out',
          status === 'loading' ? 'opacity-0' : 'opacity-100',
          status === 'loaded' ? 'animate-blur-in' : '',
          props.className,
        )}
      />
    </ImageWrapper>
  )
}
