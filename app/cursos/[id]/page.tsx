'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, Play, Clock, Users, Award, CheckCircle } from 'lucide-react'

interface CourseDetailProps {
  params: {
    id: string
  }
}

// Sample course data
const courseData: Record<string, any> = {
  '1': {
    code: "ISO 9001",
    title: "Sistema de Gestión de Calidad",
    description: "Aprende a implementar y mantener un sistema de gestión de calidad en tu organización",
    longDescription: "Este curso completo te proporciona los conocimientos necesarios para implementar, mantener y mejorar un Sistema de Gestión de Calidad según los requisitos de ISO 9001:2015. Incluye casos prácticos reales y ejemplos de implementación en diferentes tipos de organizaciones.",
    duration: "40 horas",
    level: "Intermedio",
    students: 234,
    price: "$499",
    instructor: "Juan García",
    instructorTitle: "Consultor Certificado ISO 9001",
    sampleVideos: [
      {
        id: 1,
        title: "Introducción a ISO 9001",
        duration: "12:34",
        thumbnail: "/iso-9001-intro.jpg"
      },
      {
        id: 2,
        title: "Principios de Gestión de Calidad",
        duration: "18:45",
        thumbnail: "/quality-principles.jpg"
      },
      {
        id: 3,
        title: "Procesos y Documentación",
        duration: "15:22",
        thumbnail: "/process-documentation.jpg"
      }
    ],
    modules: [
      {
        title: "Módulo 1: Fundamentos de ISO 9001",
        lessons: 8,
        duration: "5 horas"
      },
      {
        title: "Módulo 2: Requisitos de Implementación",
        lessons: 12,
        duration: "8 horas"
      },
      {
        title: "Módulo 3: Documentación y Registros",
        lessons: 10,
        duration: "7 horas"
      },
      {
        title: "Módulo 4: Auditoría y Mejora Continua",
        lessons: 9,
        duration: "6 horas"
      },
      {
        title: "Módulo 5: Casos de Estudio",
        lessons: 7,
        duration: "5 horas"
      },
      {
        title: "Módulo 6: Examen y Certificación",
        lessons: 5,
        duration: "4 horas"
      }
    ],
    benefits: [
      "Certificado internacionalmente reconocido",
      "Acceso de por vida al contenido del curso",
      "Soporte de expertos disponible",
      "Ejercicios prácticos y casos de estudio",
      "Grupo de estudiantes activo",
      "Actualizaciones futuras incluidas"
    ]
  }
}

export default function CourseDetail({ params }: CourseDetailProps) {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const course = courseData[params.id] || courseData['1']

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/cursos" className="inline-flex items-center gap-2 mb-6 hover:opacity-80">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-accent font-bold text-lg mb-3">{course.code}</div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg opacity-90 mb-6">{course.longDescription}</p>
              <div className="flex gap-6 mb-6">
                <div>
                  <div className="text-sm opacity-75">Duración</div>
                  <div className="text-xl font-semibold">{course.duration}</div>
                </div>
                <div>
                  <div className="text-sm opacity-75">Nivel</div>
                  <div className="text-xl font-semibold">{course.level}</div>
                </div>
                <div>
                  <div className="text-sm opacity-75">Estudiantes</div>
                  <div className="text-xl font-semibold">{course.students}</div>
                </div>
              </div>
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Inscribirse Ahora - {course.price}
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="bg-white/20 rounded-lg aspect-video flex items-center justify-center mb-6">
                <Play className="w-16 h-16 opacity-50" />
              </div>
              <h3 className="font-semibold mb-2">Instructor</h3>
              <p className="font-bold">{course.instructor}</p>
              <p className="text-sm opacity-75">{course.instructorTitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Videos Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Videos de Muestra</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {course.sampleVideos.map((video: any) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className={`rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activeVideo === video.id
                    ? 'border-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="relative bg-muted aspect-video flex items-center justify-center group">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <Play className="absolute w-12 h-12 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 bg-card">
                  <h4 className="font-semibold text-left mb-2">{video.title}</h4>
                  <p className="text-sm text-muted-foreground text-left">{video.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {activeVideo && (
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center mb-8">
              <div className="text-center text-muted-foreground">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Reproductor de video - Video {activeVideo}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contenido del Curso</h2>
          <div className="space-y-4">
            {course.modules.map((module: any, index: number) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.lessons} lecciones • {module.duration}</p>
                  </div>
                  <div className="text-primary font-semibold">{index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">¿Qué Incluye Este Curso?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
