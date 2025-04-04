"use client"

import type React from "react"

import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Send, Loader2 } from "lucide-react"

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setIsSubmitting(true)

    emailjs.sendForm(
      'service_tl27hki', // Reemplaza con tu Service ID de EmailJS
      'template_kzfqi0j', // Reemplaza con tu Template ID de EmailJS
      form.current,
      'CKpDmE8kFTilyVEsS' // Reemplaza con tu Public Key de EmailJS
    )
      .then(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          form.current?.reset()
        }, 3000)
      })
      .catch((error) => {
        console.error('Error:', error)
        setIsSubmitting(false)
      })
  }

  if (isSuccess) {
    return <SuccessMessage />
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="from_name" name="from_name" label="First Name" placeholder="Your first name" required />
          <FormField id="lastName" name="lastName" label="Last Name" placeholder="Your last name" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="from_email" name="from_email" label="Email" type="email" placeholder="your@email.com" required />
          <FormField id="phone_number" name="phone_number" label="Phone" type="tel" placeholder="+123 456 7890" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="childAge">Child's Age</Label>
          <Select name="childAge">
            <SelectTrigger id="childAge">
              <SelectValue placeholder="Select age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="1-2">1-2 years</SelectItem>
              <SelectItem value="2-3">2-3 years</SelectItem>
              <SelectItem value="3-4">3-4 years</SelectItem>
              <SelectItem value="4-5">4-5 years</SelectItem>
              <SelectItem value="5+">More than 5 years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service of Interest</Label>
          <Select name="service">
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fullDay">Full day</SelectItem>
              <SelectItem value="halfDay">Half day</SelectItem>
              <SelectItem value="extended">Extended hours</SelectItem>
              <SelectItem value="weekend">Weekends</SelectItem>
              <SelectItem value="summer">Summer program</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="How can we help you?" rows={4} required />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" required />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the privacy policy and terms of service
            </Label>
            <p className="text-sm text-muted-foreground">Your data will be treated confidentially.</p>
          </div>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}

interface FormFieldProps {
  id: string
  name?: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
}

function FormField({ id, name, label, placeholder, type = "text", required = false }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name || id} type={type} placeholder={placeholder} required={required} />
    </div>
  )
}

function SuccessMessage() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
        <p className="text-muted-foreground">
          Thank you for contacting us. We will get back to you as soon as possible.
        </p>
      </div>
    </div>
  )
}
