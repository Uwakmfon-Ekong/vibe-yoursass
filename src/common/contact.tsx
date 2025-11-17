"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 px-6 bg-white font-poppins" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Let's Talk Growth</h2>
            <p className="text-lg text-purple-600 font-semibold">Ready to scale your Saas?</p>
            <p className="text-lg text-purple-600 font-semibold">Get in touch with us today!</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-base font-semibold">
              Book a Strategy Call
            </Button>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jackson Fox"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jacksonfox@gmail.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Description"
                  rows={5}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-2 rounded-lg font-semibold"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
