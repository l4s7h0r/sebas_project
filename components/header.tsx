"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-20seba-20benitez.jpeg"
              alt="B&M Ingeniería e Innovación"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/cursos" className="text-foreground hover:text-primary transition-colors font-medium">
              Cursos
            </Link>
            <Link href="/asesoramiento" className="text-foreground hover:text-primary transition-colors font-medium">
              Asesoramiento
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 space-y-4 border-t border-border mt-4">
            <Link href="/cursos" className="block text-foreground hover:text-primary font-medium">
              Cursos
            </Link>
            <Link href="/asesoramiento" className="block text-foreground hover:text-primary font-medium">
              Asesoramiento
            </Link>
            <Link href="/contacto" className="block text-foreground hover:text-primary font-medium">
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
