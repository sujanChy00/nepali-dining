import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Image } from '@/components/ui/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { seo } from '@/lib/seo'
import { cn } from '@/lib/utils'
import { createFileRoute } from '@tanstack/react-router'
import { Clock, MapPin, Minus, Plus, Star, Truck } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/takeout')({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: 'Nepali Dining | Takeout',
      }),
    ],
  }),
})

function RouteComponent() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const [selectedTab, setSelectedTab] = useState('popular')
  const [deliveryAddress, setDeliveryAddress] = useState('')

  const addToCart = (itemId: string) => {
    setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
  }

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[itemId] > 1) {
        newCart[itemId]--
      } else {
        delete newCart[itemId]
      }
      return newCart
    })
  }

  const popularItems = [
    {
      id: 'momo',
      name: 'Chicken Momo',
      price: 12.99,
      description: 'Steamed dumplings with chicken filling and special sauce',
      rating: 4.8,
      dietary: ['s'],
    },
    {
      id: 'dal-bhat',
      name: 'Dal Bhat Set',
      price: 18.99,
      description:
        'Traditional Nepali meal with rice, lentils, curry, and pickles',
      rating: 4.9,
      dietary: ['v'],
    },
    {
      id: 'chow-mein',
      name: 'Chicken Chow Mein',
      price: 14.99,
      description: 'Stir-fried noodles with vegetables and tender chicken',
      rating: 4.7,
      dietary: [],
    },
    {
      id: 'sekuwa',
      name: 'Chicken Sekuwa',
      price: 16.99,
      description: 'Grilled marinated chicken skewers with traditional spices',
      rating: 4.8,
      dietary: ['s', 'gf'],
    },
    {
      id: 'thukpa',
      name: 'Chicken Thukpa',
      price: 13.99,
      description: 'Hearty noodle soup with chicken and fresh vegetables',
      rating: 4.6,
      dietary: [],
    },
  ]

  const dietaryLabels = {
    gf: { label: 'Gluten-Free', color: 'bg-green-100 text-green-800' },
    ve: { label: 'Vegan', color: 'bg-blue-100 text-blue-800' },
    v: { label: 'Vegetarian', color: 'bg-orange-100 text-orange-800' },
    s: { label: 'Spicy', color: 'bg-red-100 text-red-800' },
  }

  const subtotal = Object.entries(cart).reduce((total, [itemId, quantity]) => {
    const item = popularItems.find((i) => i.id === itemId)
    return total + (item?.price || 0) * quantity
  }, 0)

  const deliveryFee = subtotal > 25 ? 0 : 3.99
  const tax = subtotal * 0.08
  const total = subtotal + deliveryFee + tax

  return (
    <div className="py-20 max-w-6xl mx-auto">
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-4xl font-bold font-dosis">Order Takeout</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Authentic Nepali cuisine delivered fresh to your door. Available
          through DoorDash & UberEats.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex items-center justify-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <p className="font-medium">Delivery Time</p>
              <p className="text-muted-foreground">30-45 minutes</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Truck className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <p className="font-medium">Delivery Fee</p>
              <p className="text-muted-foreground">Free over ¥25</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div className="text-sm">
              <p className="font-medium">Delivery Area</p>
              <p className="text-muted-foreground">5 mile radius</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center base:flex-row flex-col gap-4 pt-6">
          <Button
            variant="outline"
            className="rounded-none border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Order on DoorDash
          </Button>
          <Button
            variant="outline"
            className="rounded-none border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Order on UberEats
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Dietary Information:</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(dietaryLabels).map(([key, info]) => (
                <Badge key={key} className={info.color}>
                  {key.toUpperCase()} - {info.label}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid w-full xs:grid-cols-4 grid-cols-2 xs:h-9 h-auto">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
              <TabsTrigger value="mains">Main Dishes</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>

            <TabsContent value="popular" className="mt-6">
              <div className="grid gap-4">
                {popularItems.map((item) => (
                  <Card
                    key={item.id}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex base:flex-row flex-col gap-4">
                      <div className="base:w-28 base:h-28 h-52 base:aspect-auto aspect-square rounded-lg overflow-hidden">
                        <Image
                          src="/logo.png"
                          alt={item.name}
                          className="w-full h-full base:object-cover object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">
                                  {item.rating}
                                </span>
                              </div>
                              <div className="flex gap-1">
                                {item.dietary.map((diet) => (
                                  <Badge
                                    key={diet}
                                    className={cn(
                                      'text-xs',
                                      dietaryLabels[
                                        diet as keyof typeof dietaryLabels
                                      ]?.color,
                                    )}
                                  >
                                    {diet.toUpperCase()}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="font-bold text-lg">
                            ¥{item.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2">
                          {cart[item.id] ? (
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => removeFromCart(item.id)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">
                                {cart[item.id]}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => addToCart(item.id)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              onClick={() => addToCart(item.id)}
                              className="rounded-none border-black base:w-max w-full border-2 hover:bg-black hover:text-white"
                            >
                              Add to Cart
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="appetizers" className="mt-6">
              <p className="text-center text-muted-foreground py-8">
                Appetizers menu coming soon...
              </p>
            </TabsContent>

            <TabsContent value="mains" className="mt-6">
              <p className="text-center text-muted-foreground py-8">
                Main dishes menu coming soon...
              </p>
            </TabsContent>

            <TabsContent value="beverages" className="mt-6">
              <p className="text-center text-muted-foreground py-8">
                Beverages menu coming soon...
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-dosis">Your Order</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.keys(cart).length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="space-y-3">
                    {Object.entries(cart).map(([itemId, quantity]) => {
                      const item = popularItems.find((i) => i.id === itemId)
                      if (!item) return null
                      return (
                        <div
                          key={itemId}
                          className="flex justify-between items-center"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              ¥{item.price} × {quantity}
                            </p>
                          </div>
                          <span className="font-medium">
                            ¥{(item.price * quantity).toFixed(2)}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>¥{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>
                        {deliveryFee === 0
                          ? 'FREE'
                          : `¥${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>¥{tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center font-bold">
                    <span>Total</span>
                    <span>¥{total.toFixed(2)}</span>
                  </div>

                  {subtotal < 25 && (
                    <p className="text-xs text-muted-foreground text-center">
                      Add ¥{(25 - subtotal).toFixed(2)} more for free delivery!
                    </p>
                  )}

                  <div className="space-y-3 pt-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="address">Delivery Address*</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your full delivery address"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Name*</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone*</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="time">Delivery Time</Label>
                      <Input
                        id="time"
                        placeholder="When would you like your order to be delivered?"
                        type="time"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="notes">Special Instructions</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special requests or delivery notes"
                        rows={2}
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full rounded-none border-black border-2 hover:bg-black hover:text-white font-semibold"
                    size="lg"
                    disabled={!deliveryAddress.trim()}
                  >
                    Place Order - ¥{total.toFixed(2)}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing an order, you agree to our terms and conditions
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
