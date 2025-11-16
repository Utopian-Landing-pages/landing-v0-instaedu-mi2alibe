'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Children learning"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/85 to-primary/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full blur-2xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Safe & Moderated Platform</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
          >
            InstaEdu: Fun, Safe Social Learning for Kids
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto text-pretty"
          >
            An Instagram-style platform where children aged 6-12 explore educational videos and images in a moderated environment with parental oversight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a href={PROJECT_URL} className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start Learning Today
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            >
              <a href="#features">Discover Features</a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-white/90"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Fully Moderated</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Age-Appropriate Content</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Parental Controls</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  )
}
