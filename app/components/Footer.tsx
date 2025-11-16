'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PROJECT_NAME } from '@/lib/constants'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
    Support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Safety Guidelines', href: '#' },
      { label: 'Parent Resources', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'COPPA Compliance', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Stay Updated with InstaEdu
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest educational tips, platform updates, and parenting resources delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 rounded-full"
              />
              <Button type="submit" size="lg" className="rounded-full">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-card-foreground">
                {PROJECT_NAME}
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Making screen time meaningful for children aged 6-12 through safe, engaging, and educational social learning.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-muted hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-card-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 {PROJECT_NAME}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ for safe learning experiences
          </p>
        </div>
      </div>
    </footer>
  )
}
