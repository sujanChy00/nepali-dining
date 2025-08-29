import { ItemViewer } from '@/components/item-viewer'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Image } from '@/components/ui/image'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { seo } from '@/lib/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: 'Nepali Dining | Menu',
      }),
    ],
  }),
})

const menuData = {
  ALL: {
    sections: [
      {
        title: 'Small Bites & Specials',
        items: [
          {
            name: 'Momo (Nepali Dumplings)',
            price: '¥12',
            description:
              'Steamed dumplings filled with chicken and spices, served with achar',
            details:
              'Handmade momo with minced chicken, onion, garlic, coriander, and Nepali spices, served with tomato-sesame achar',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Chatamari',
            price: '¥10',
            description: 'Rice crepe topped with spiced minced meat and egg',
            details:
              'Newari-style rice flour crepe, minced buffalo or chicken, beaten egg, coriander, and scallions',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Sekuwa',
            price: '¥14',
            description:
              'Charcoal-grilled marinated meat with traditional spices',
            details:
              'Buff, chicken, or pork pieces marinated in garlic, ginger, cumin, coriander, and mustard oil, slow-grilled over charcoal',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
      {
        title: "'Shareables'",
        items: [
          {
            name: 'Aloo Sadeko',
            price: '¥8',
            description:
              'Spiced potato salad tossed with mustard oil and Nepali herbs',
            details:
              'Boiled potatoes, red onion, chili, timur (Sichuan pepper), coriander, roasted sesame, mustard oil',
            addOn: '+ Boiled egg (+¥3)',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Samay Baji',
            price: '¥18',
            description: 'Traditional Newari festival platter to share',
            details:
              'Beaten rice, black soybeans, bara (lentil patties), egg, choila (spiced grilled meat), pickles, and seasonal sides',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
    ],
  },
  FOOD: {
    sections: [
      {
        title: 'Appetizers',
        items: [
          {
            name: 'Yomari',
            price: '¥9',
            description: 'Steamed rice dumpling with sweet filling',
            details:
              'Rice flour dough filled with jaggery and sesame paste, steamed and served warm',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Kwati Soup',
            price: '¥11',
            description: 'Nine-bean sprout soup, a traditional festival dish',
            details:
              'Mixed bean sprouts, ginger, garlic, Nepali spices, served hot with ghee',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Gundruk Soup',
            price: '¥10',
            description: 'Tangy soup made with fermented leafy greens',
            details:
              'Traditional Nepali fermented mustard leaves, tomato, garlic, and timur-flavored broth',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
      {
        title: 'Mains',
        items: [
          {
            name: 'Dal Bhat Tarkari',
            price: '¥20',
            description: 'Nepali staple: rice with lentil soup and vegetables',
            details:
              'Steamed rice, yellow lentil soup, seasonal vegetable curry, tomato achar, optional meat curry add-on',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Thakali Khana Set',
            price: '¥24',
            description: 'Traditional Thakali set meal with rice and sides',
            details:
              'Steamed rice, black lentil dal, mustard greens, potato curry, pickles, timur achar, meat curry of choice (chicken, buff, or mutton)',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Sel Roti with Aloo Curry',
            price: '¥16',
            description: 'Homemade rice doughnut with spiced potato curry',
            details:
              'Crispy fried rice flour bread ring, served with mildly spiced potato and pea curry',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
    ],
  },
  DRINKS: {
    sections: [
      {
        title: 'Tea & Coffee',
        items: [
          {
            name: 'Nepali Chiya',
            price: '¥4',
            description: 'Spiced milk tea with cardamom and ginger',
            details:
              'Ceylon black tea brewed with milk, cardamom, ginger, and sugar',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Butter Tea (Su Chiya)',
            price: '¥5',
            description: 'Tibetan-style tea with butter and salt',
            details:
              'Black tea churned with ghee (yak butter) and salt, traditional Himalayan drink',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Filter Coffee',
            price: '¥6',
            description: 'Locally roasted Nepali coffee, served hot or iced',
            details:
              'Single-origin coffee from Gulmi & Ilam regions, medium roast',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
      {
        title: 'Juices & Soft Drinks',
        items: [
          {
            name: 'Lassi',
            price: '¥7',
            description: 'Refreshing yogurt drink, sweet or salty',
            details: 'Buffalo yogurt, cardamom, sugar or salt, served chilled',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Sugarcane Juice',
            price: '¥6',
            description: 'Fresh-pressed sugarcane juice with lime',
            details: 'Organic sugarcane pressed to order, splash of lime, ice',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
    ],
  },
  LUNCH: {
    sections: [
      {
        title: 'Local Drinks',
        items: [
          {
            name: 'Tongba (Millet Beer)',
            price: '¥10',
            description: 'Traditional warm alcoholic millet drink',
            details:
              'Fermented millet seeds served in a wooden vessel, sipped with hot water',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Raksi',
            price: '¥12',
            description: 'Homemade Nepali distilled spirit',
            details:
              'Clear distilled liquor from rice, millet, or barley, traditional in Nepali households',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Aila',
            price: '¥14',
            description: 'Newari ceremonial liquor',
            details:
              'Strong distilled spirit made from rice, traditionally served during feasts and festivals',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
      {
        title: 'Wines & Imported',
        items: [
          {
            name: 'Himalayan Red Wine',
            price: '¥18',
            description: 'Nepal-grown grapes, medium-bodied red',
            details: 'Notes of plum, cherry, and spice, produced in Mustang',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Imported Beer - Gorkha',
            price: '¥8',
            description: 'Popular Nepali lager',
            details: '5% ABV, crisp and smooth, brewed in Nepal',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Imported Beer - Tuborg',
            price: '¥7',
            description: 'International lager widely enjoyed in Nepal',
            details: '4.6% ABV, refreshing and light-bodied',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
      {
        title: 'Craft Brews',
        items: [
          {
            name: 'Everest Lager',
            price: '¥6',
            description: 'Classic Nepali lager beer',
            details: 'Crisp, light, brewed with Himalayan spring water',
            image: '/placeholder.svg?height=200&width=300',
          },
          {
            name: 'Sherpa Ale',
            price: '¥7',
            description: 'Local craft ale brewed in Kathmandu Valley',
            details: 'Medium body, malty finish, subtle hops',
            image: '/placeholder.svg?height=200&width=300',
          },
        ],
      },
    ],
  },
}

type TabType = keyof typeof menuData

function RouteComponent() {
  const tabs: TabType[] = ['ALL', 'FOOD', 'DRINKS', 'LUNCH']

  return (
    <div className="max-w-6xl mx-auto py-20">
      <Tabs defaultValue="ALL" className="w-full" variant="underline">
        <ScrollArea>
          <ScrollBar orientation="horizontal" />
          <TabsList className="grid w-full max-w-4xl mx-auto sm:gap-x-0 gap-x-6 grid-cols-4 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-xs whitespace-nowrap block"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        {tabs.map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-12">
            {menuData[tab].sections.map((section, sectionIndex) => (
              <section key={sectionIndex}>
                <h2 className="text-2xl font-bold text-center mb-8 text-accent-foreground">
                  {section.title}
                </h2>
                <div className="grid grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <ItemViewer key={itemIndex} item={item}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Card className="p-0 block overflow-hidden cursor-pointer">
                            <div className="grid grid-cols-12">
                              <section className="col-span-5">
                                <AspectRatio ratio={16 / 9}>
                                  <Image src="/logo.png" alt={item.name} />
                                </AspectRatio>
                              </section>
                              <CardContent className="space-y-1.5 col-span-7 pt-2">
                                <div className="flex gap-3">
                                  <h3 className="font-inter line-clamp-1">
                                    {item.name}
                                  </h3>
                                  <Badge className="bg-green-50 text-green-600">
                                    {item.price}
                                  </Badge>
                                </div>
                                <p className="text-accent-foreground text-left font-dosis line-clamp-2 text-sm">
                                  {item.description}
                                </p>
                              </CardContent>
                            </div>
                            <Separator />
                            <div className="p-4">
                              <p className="text-muted-foreground text-left font-dosis line-clamp-2">
                                {item.details}
                              </p>
                            </div>
                          </Card>
                        </TooltipTrigger>
                        <TooltipContent>{item.name}</TooltipContent>
                      </Tooltip>
                    </ItemViewer>
                  ))}
                </div>
              </section>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
