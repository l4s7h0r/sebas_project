"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-lg opacity-90">Estamos aquí para ayudarte con tus dudas y consultas</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Teléfono",
                content: "+56 9 3017 3642",
                subtext: "Sebastian Benitez, Gerente",
              },
              {
                icon: Mail,
                title: "Email",
                content: "sbenitez@utem.cl",
                subtext: "Respuesta en 24 horas",
              },
              {
                icon: MapPin,
                title: "Ubicación",
                content: "Santiago, Chile",
                subtext: "Oficina principal",
              },
            ].map((info, i) => (
              <div
                key={i}
                className="bg-card rounded-lg p-6 border border-border text-center hover:border-primary transition-colors"
              >
                <info.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="font-semibold text-primary mb-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Asunto *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consulta">Consulta General</option>
                    <option value="cursos">Información de Cursos</option>
                    <option value="asesoramiento">Asesoramiento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tu mensaje..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Respuesta Rápida",
                    desc: "Respondemos tus consultas en menos de 24 horas",
                  },
                  {
                    title: "Equipo Experto",
                    desc: "Consultores certificados con años de experiencia",
                  },
                  {
                    title: "Atención Personalizada",
                    desc: "Soluciones adaptadas a tu negocio específico",
                  },
                  {
                    title: "Soporte Completo",
                    desc: "Acompañamiento desde el primer contacto hasta la certificación",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-lg p-4 border border-border">
                    <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-accent/10 rounded-lg p-6 border border-accent">
                <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Horario de Atención
                </h3>
                <ul className="text-sm space-y-1">
                  <li>Lunes - Viernes: 9:00 - 18:00</li>
                  <li>Sábado: 10:00 - 14:00</li>
                  <li>Domingo: Cerrado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
