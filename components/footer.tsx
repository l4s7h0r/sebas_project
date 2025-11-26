import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-20seba-20benitez.jpeg"
                alt="B&M Ingeniería e Innovación"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">B&M Ingeniería e Innovación</h3>
            <p className="text-sm opacity-75">Plataforma profesional de certificaciones ISO</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cursos" className="hover:text-accent transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/asesoramiento" className="hover:text-accent transition-colors">
                  Asesoramiento
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:sbenitez@utem.cl" className="hover:text-accent transition-colors">
                  sbenitez@utem.cl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+56930173642" className="hover:text-accent transition-colors">
                  +56 9 3017 3642
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} B&M Ingeniería e Innovación. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
