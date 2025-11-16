'use client'

import { motion } from 'framer-motion'
import { UserSquare, Sparkles, Heart, MessageSquare, GalleryVertical } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const features = [
  {
    icon: UserSquare,
    title: 'Individual Child Profiles with Parental Oversight',
    description: 'Ensures a personalized and safe experience managed by parents.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    icon: Sparkles,
    title: 'Personalized Content Feed',
    description: 'Delivers tailored educational videos and images across various subjects.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    icon: Heart,
    title: "'Like' Functionality",
    description: 'Allows children to interact with content they enjoy, fostering engagement.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    icon: MessageSquare,
    title: 'Strictly Moderated Comment Section',
    description: 'Promotes positive peer interaction and collaborative learning in a safe environment.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    icon: GalleryVertical,
    title: 'Instagram-style Interface',
    description: 'Intuitive and engaging design familiar to modern digital users, making learning fun.',
    image: '/placeholder.svg?height=300&width=400',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for Safe Learning
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to give your child a safe, engaging, and educational social media experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
