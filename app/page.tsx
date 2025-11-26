import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Award, Video, Zap } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <p className="text-sm font-medium">Nuevo curso ISO 45001 disponible. Comienza tu certificación hoy.</p>
          </div>
          <Link href="/cursos" className="text-sm font-medium hover:underline whitespace-nowrap">
            Ver más →
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Certificación <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ISO Profesional</span>
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
            Obtén las certificaciones ISO más demandadas con nuestros cursos profesionales, asesoramiento experto y soporte completo.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/cursos"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all hover:shadow-lg"
            >
              Explorar Cursos
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/asesoramiento"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Solicitar Asesoramiento
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-balance">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Cursos Completos",
                description: "Contenido estructurado y actualizado con las normas ISO vigentes"
              },
              {
                icon: Users,
                title: "Asesoramiento Experto",
                description: "Consultores certificados disponibles para guiar tu proceso"
              },
              {
                icon: Video,
                title: "Videos Interactivos",
                description: "Aprende con videos de alta calidad y ejemplos reales"
              },
              {
                icon: Award,
                title: "Certificaciones Reconocidas",
                description: "Obtén certificaciones válidas internacionalmente"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold">Cursos Destacados</h2>
            <Link href="/cursos" className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-2">
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                code: "ISO 9001",
                title: "Sistema de Gestión de Calidad",
                duration: "40 horas",
                price: "$499"
              },
              {
                code: "ISO 14001",
                title: "Sistema de Gestión Ambiental",
                duration: "35 horas",
                price: "$449"
              },
              {
                code: "ISO 45001",
                title: "Sistema de Gestión de Seguridad y Salud",
                duration: "40 horas",
                price: "$499"
              }
            ].map((course, i) => (
              <Link key={i} href={`/cursos/${i}`} className="group">
                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all h-full hover:shadow-lg">
                  <div className="text-primary font-bold text-lg mb-2">{course.code}</div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">{course.title}</h3>
                  <div className="flex justify-between items-center text-sm text-foreground/60 mb-4">
                    <span>{course.duration}</span>
                    <span className="text-accent font-semibold">{course.price}</span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-all font-medium">
                    Ver Detalles
                  </button>
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
