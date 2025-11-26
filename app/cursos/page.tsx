import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, Clock, Users, Award } from 'lucide-react'

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      code: "ISO 9001",
      title: "Sistema de Gestión de Calidad",
      description: "Aprende a implementar y mantener un sistema de gestión de calidad en tu organización",
      duration: "40 horas",
      level: "Intermedio",
      students: 234,
      price: "$499",
      image: "/iso-9001-certificate.png"
    },
    {
      id: 2,
      code: "ISO 14001",
      title: "Sistema de Gestión Ambiental",
      description: "Domina la gestión ambiental y cumple con regulaciones internacionales",
      duration: "35 horas",
      level: "Intermedio",
      students: 156,
      price: "$449",
      image: "/iso-14001-concept.png"
    },
    {
      id: 3,
      code: "ISO 45001",
      title: "Sistema de Gestión de Seguridad y Salud",
      description: "Protege a tu equipo con un sistema integral de seguridad y salud ocupacional",
      duration: "40 horas",
      level: "Intermedio",
      students: 189,
      price: "$499",
      image: "/iso-45001.jpg"
    },
    {
      id: 4,
      code: "ISO 50001",
      title: "Sistema de Gestión de Energía",
      description: "Optimiza el uso de energía en tu organización y reduce costos",
      duration: "30 horas",
      level: "Básico",
      students: 98,
      price: "$399",
      image: "/iso-50001.jpg"
    },
    {
      id: 5,
      code: "ISO 27001",
      title: "Sistema de Gestión de Seguridad de la Información",
      description: "Protege la información sensible de tu empresa con las mejores prácticas",
      duration: "45 horas",
      level: "Avanzado",
      students: 267,
      price: "$549",
      image: "/iso-27001.jpg"
    },
    {
      id: 6,
      code: "ISO 31000",
      title: "Sistema de Gestión de Riesgos",
      description: "Identifica y mitiga riesgos con un enfoque sistemático",
      duration: "35 horas",
      level: "Avanzado",
      students: 145,
      price: "$499",
      image: "/iso-31000.jpg"
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
          <h1 className="text-4xl font-bold mb-4">Nuestros Cursos</h1>
          <p className="text-lg opacity-90">Catálogo completo de certificaciones ISO profesionales</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="flex-1 bg-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link key={course.id} href={`/cursos/${course.id}`}>
                <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors h-full flex flex-col hover:shadow-lg">
                  <div className="h-40 bg-muted overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-primary font-bold text-sm mb-2">{course.code}</div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>

                    <div className="space-y-3 mb-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{course.students} estudiantes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="font-semibold">{course.level}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-xl font-bold text-primary">{course.price}</span>
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors font-semibold">
                        Inscribirse
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
