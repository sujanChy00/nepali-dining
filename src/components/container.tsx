import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: 'center' | 'default'
}

export const Container = ({ variant = 'default', ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        'xl:w-[1200px] w-full mx-auto xl:px-0 px-5',
        props.className,
        variant === 'center' ? 'flex items-center justify-center' : '',
      )}
    />
  )
}
