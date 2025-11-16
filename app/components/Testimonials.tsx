'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Parent at Happy Homeschoolers',
    quote: "InstaEdu has transformed my son's screen time! He's learning so much and actually enjoys it. The parental controls give me peace of mind.",
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'David R.',
    role: 'Elementary School Teacher at Greenleaf Academy',
    quote: 'This platform is brilliant! It leverages the power of social media for genuine educational engagement. My students are always excited to share what they\'ve learned.',
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'Emily C.',
    role: 'Mother of two at Tech-Savvy Families',
    quote: 'Finally, an app where my kids can learn and interact safely. The moderation is excellent, and they never get bored. Highly recommend InstaEdu!',
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'Mark P.',
    role: 'Education Blogger at Future Learners',
    quote: 'InstaEdu is pioneering a new way for kids to consume educational content. It\'s intuitive, fun, and genuinely effective. A must-have for modern parents.',
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'Jessica T.',
    role: 'CEO of Kids\' Digital Literacy',
    quote: 'The blend of entertainment and education on InstaEdu is seamless. It\'s truly setting a new standard for children\'s online learning platforms.',
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
  {
    name: 'Dr. Alex G.',
    role: 'Child Psychologist at Mindful Kids Center',
    quote: 'The positive social interaction and curated content on InstaEdu are fantastic for a child\'s developmental growth. It\'s learning without the usual screen time guilt.',
    image: '/placeholder.svg?height=300&width=300',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Parents & Educators
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what parents, teachers, and education experts are saying about InstaEdu.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <Card className="bg-card border-2 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex gap-1 mb-4 justify-center md:justify-start">
                          {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl text-card-foreground mb-6 leading-relaxed italic">
                          "{testimonials[currentIndex].quote}"
                        </p>
                        <div>
                          <p className="font-bold text-card-foreground text-lg">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full w-12 h-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full w-12 h-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
