import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { seo } from '@/lib/seo'
import { cn } from '@/lib/utils'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/reservation')({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: 'Nepali Dining | Reservation',
      }),
    ],
  }),
})

function RouteComponent() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 })
  const [api, setApi] = useState<CarouselApi>()

  const ITEMS_PER_LOAD = 20

  const generateDate = (dayOffset: number) => {
    const date = new Date()
    date.setDate(date.getDate() + dayOffset)
    return {
      date,
      dateStr: date.toISOString().split('T')[0],
      dayName: date.toLocaleDateString('en', { weekday: 'short' }),
      monthName: date.toLocaleDateString('en', { month: 'short' }),
      dayNumber: date.getDate(),
      index: dayOffset,
    }
  }

  const visibleDates = Array.from(
    { length: visibleRange.end - visibleRange.start },
    (_, i) => generateDate(visibleRange.start + i),
  )

  const handleTodayClick = () => {
    const today = new Date().toISOString().split('T')[0]
    setSelectedDate(today)

    setVisibleRange({ start: 0, end: 20 })

    if (api) {
      api.scrollTo(0)
    }
  }

  const handleEndReach = () => {
    setVisibleRange((prev) => ({
      start: prev.start,
      end: prev.end + ITEMS_PER_LOAD,
    }))
  }

  return (
    <div className="py-20">
      <Card className="rounded-none shadow-none md:max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-dosis text-xl">
            Reservation at Nepali Dining
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-12">
            <div className="space-y-6">
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Select Date*</Label>
                  <Button
                    type="button"
                    onClick={handleTodayClick}
                    className="text-sm "
                    variant="ghost"
                  >
                    Today
                  </Button>
                </div>
                <Carousel
                  opts={{
                    dragFree: true,
                  }}
                  setApi={setApi}
                  onEndReach={handleEndReach}
                >
                  <CarouselContent>
                    {visibleDates.map((dateObj) => {
                      const { dateStr, dayName, monthName, dayNumber, index } =
                        dateObj
                      const isSelected = selectedDate === dateStr
                      return (
                        <CarouselItem
                          key={index}
                          className="sm:basis-1/6 base:basis-1/4 basis-1/2"
                          data-index={index}
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedDate(dateStr)}
                            className={cn(
                              'w-full p-3 rounded-lg border text-center transition-colors',
                              isSelected
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-background hover:bg-muted border-border',
                            )}
                          >
                            <div className="text-xs font-medium">{dayName}</div>
                            <div className="text-lg font-semibold">
                              {dayNumber}
                            </div>
                            <div className="text-xs">{monthName}</div>
                          </button>
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                  <CarouselNext className="-right-4 shadow-sm" />
                  <CarouselPrevious className="-left-4 shadow-sm" />
                </Carousel>
              </section>
              <div className="grid grid-cols-12 items-center gap-6">
                <section className="grid gap-y-3 xs:col-span-6 col-span-12">
                  <Label htmlFor="name">Your name*</Label>
                  <Input
                    placeholder="john doe"
                    className="h-12"
                    id="name"
                    required
                  />
                </section>
                <section className="grid gap-y-3 xs:col-span-6 col-span-12">
                  <Label htmlFor="phone">Phone number*</Label>
                  <Input
                    placeholder="+81529055944"
                    required
                    className="h-12"
                    id="phone"
                  />
                </section>
                <section className="grid gap-y-3 xs:col-span-6 col-span-12">
                  <Label htmlFor="people">Number Of People*</Label>
                  <Select>
                    <SelectTrigger
                      id="people"
                      className="w-full data-[size=default]:h-12 data-[size=sm]:h-12"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 20 }).map((_, index) => (
                        <SelectItem key={index} value={index.toString()}>
                          {index + 1} people
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </section>
                <section className="grid gap-y-3 xs:col-span-6 col-span-12">
                  <Label htmlFor="time">Time*</Label>
                  <Input
                    placeholder="10:00 AM"
                    className="h-12"
                    id="time"
                    type="time"
                    required
                  />
                </section>
                <section className="grid gap-y-3 col-span-12">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input
                    placeholder="s****@gmail.com"
                    className="h-12"
                    id="email"
                  />
                </section>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Make Reservation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
