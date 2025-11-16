'use client'

import { motion } from 'framer-motion'
import { Sparkles, Shield, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Ready to Transform Your Child's Screen Time?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto text-pretty">
            Join thousands of parents who trust InstaEdu to provide safe, engaging, and educational content for their children.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a href={PROJECT_URL} className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start Free Today
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            >
              <a href="#pricing">View Pricing</a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Shield className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">100% Safe</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Award className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">Award Winning</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">10K+ Families</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">Engaging Content</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
