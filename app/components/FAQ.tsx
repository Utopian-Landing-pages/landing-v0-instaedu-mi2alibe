'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What age group is InstaEdu designed for?',
    answer: 'InstaEdu is specifically designed for children aged 6-12 years old.',
  },
  {
    question: 'How does InstaEdu ensure a safe environment for children?',
    answer: 'We utilize robust parental oversight features, a strictly moderated comment section, and carefully curated educational content to ensure a safe and positive learning space.',
  },
  {
    question: 'Is there a cost to use InstaEdu?',
    answer: 'InstaEdu offers a freemium model with basic content access. For full access to curated content, advanced parental controls, and an ad-free experience, we offer premium monthly ($9.99) and annual ($99.99) subscriptions.',
  },
  {
    question: 'What kind of content can my child find on InstaEdu?',
    answer: 'Children can explore a wide range of educational videos and images covering various subjects, all presented in an engaging and easy-to-understand Instagram-style format.',
  },
  {
    question: 'Can I monitor my child\'s activity on InstaEdu?',
    answer: 'Yes! InstaEdu provides comprehensive parental controls and oversight features, allowing you to monitor your child\'s activity, set time limits, and review the content they engage with.',
  },
  {
    question: 'How is content moderated on the platform?',
    answer: 'All content is carefully curated by our educational team, and our comment sections are strictly moderated using a combination of AI filtering and human review to ensure a positive and safe environment.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to know about InstaEdu and how it works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
