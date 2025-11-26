'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, Calendar, Users, CheckCircle } from 'lucide-react'

export default function AdvisoryPage() {
  const [selectedService, setSelectedService] = useState<number>(0)

  const services = [
    {
      id: 1,
      title: "Consultoría de Implementación",
      description: "Asesoramiento completo para implementar sistemas ISO en tu organización",
      duration: "4-8 semanas",
      price: "Desde $1,999",
      includes: [
        "Diagnóstico inicial de tu organización",
        "Diseño del sistema de gestión",
        "Capacitación de personal clave",
        "Implementación y seguimiento",
        "Preparación para auditoría externa"
      ]
    },
    {
      id: 2,
      title: "Auditoría Interna",
      description: "Evaluación profesional de tu sistema de gestión vigente",
      duration: "1-3 días",
      price: "Desde $599",
      includes: [
        "Auditoría completa del sistema",
        "Identificación de no conformidades",
        "Recomendaciones de mejora",
        "Informe detallado",
        "Seguimiento post-auditoría"
      ]
    },
    {
      id: 3,
      title: "Capacitación Corporativa",
      description: "Talleres personalizados para tu equipo con expertos certificados",
      duration: "Flexible",
      price: "Desde $299/persona",
      includes: [
        "Talleres adaptados a tu industria",
        "Materiales de capacitación",
        "Ejercicios prácticos",
        "Certificado de participación",
        "Soporte post-capacitación"
      ]
    },
    {
      id: 4,
      title: "Mejora Continua",
      description: "Programa de optimización y actualización de tu sistema",
      duration: "Continuo",
      price: "Desde $1,499/mes",
      includes: [
        "Reuniones mensuales de revisión",
        "Actualización de documentación",
        "Análisis de métricas",
        "Identificación de oportunidades",
        "Soporte prioritario"
      ]
    }
  ]

  const advisors = [
    {
      name: "Juan García",
      title: "Consultor Principal ISO 9001",
      experience: "15+ años",
      avatar: "/professional-male.jpg"
    },
    {
      name: "María López",
      title: "Especialista ISO 14001 & 45001",
      experience: "12+ años",
      avatar: "/professional-female.png"
    },
    {
      name: "Carlos Rodríguez",
      title: "Auditor Principal Certificado",
      experience: "18+ años",
      avatar: "/professional-male-2.jpg"
    }
  ]

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
          <h1 className="text-4xl font-bold mb-4">Asesoramiento Profesional</h1>
          <p className="text-lg opacity-90">Nuestros expertos te acompañan en cada paso de tu transformación ISO</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(index)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedService === index
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-muted-foreground">Duración: {service.duration}</p>
                    <p className="text-xl font-bold text-primary mt-2">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Service Details */}
          <div className="mt-12 bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6">{services[selectedService].title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Incluye:</h4>
                <ul className="space-y-3">
                  {services[selectedService].includes.map((item: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-muted-foreground mb-2">Inversión</p>
                  <p className="text-3xl font-bold text-primary mb-6">{services[selectedService].price}</p>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Solicitar Consulta Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Nuestro Equipo de Expertos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border text-center hover:border-primary transition-colors">
                <img
                  src={advisor.avatar || "/placeholder.svg"}
                  alt={advisor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold mb-1">{advisor.name}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{advisor.title}</p>
                <p className="text-sm text-muted-foreground">{advisor.experience} de experiencia</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-lg opacity-90 mb-8">Solicita una consulta gratuita con nuestros expertos</p>
          <Link
            href="/contacto"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Agendar Consulta
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
