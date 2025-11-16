'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROJECT_URL } from '@/lib/constants'

const plans = [
  {
    name: 'Freemium',
    price: 'Free',
    period: '',
    features: [
      'Basic content access',
      'Limited features',
      'Standard support',
      'Community access',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Monthly Subscription',
    price: '$9.99',
    period: '/month',
    features: [
      'Full access to curated content',
      'Advanced parental controls',
      'Ad-free experience',
      'Priority support',
      'Monthly educational reports',
    ],
    cta: 'Subscribe Now',
    popular: false,
  },
  {
    name: 'Annual Subscription',
    price: '$99.99',
    period: '/year',
    features: [
      'Full access to curated content',
      'Advanced parental controls',
      'Ad-free experience',
      'Priority support',
      'Monthly educational reports',
      'Save 17% compared to monthly',
      'Exclusive content',
    ],
    cta: 'Save & Subscribe',
    popular: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Start free or unlock the full potential of safe, engaging learning for your child.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={plan.popular ? 'md:-mt-4' : ''}
            >
              <Card
                className={`h-full flex flex-col relative ${
                  plan.popular
                    ? 'border-primary border-2 shadow-2xl scale-105'
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-bold shadow-lg">
                      <Sparkles className="w-3 h-3 mr-1 inline" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-card-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    asChild
                    size="lg"
                    className={`w-full rounded-full ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90 shadow-lg'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <a href={PROJECT_URL}>{plan.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
