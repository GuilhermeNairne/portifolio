import { useEffect, useState } from 'react'
import { IconMenu, IconClose } from './icons'

const LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projeto', label: 'Projeto' },
  { id: 'contato', label: 'Contato' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-tint-strong/70 bg-[#67b3e6] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-10">
        <a
          href="#topo"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-deep text-sm font-bold text-tint"
          aria-label="Voltar ao topo"
        >
          GN
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative py-1 text-[15px] text-white transition-colors hover:text-navy ${
                active === link.id ? 'font-bold text-navy' : ''
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-[1px] left-0 h-[2px] w-full bg-mid transition-opacity ${
                  active === link.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-navy md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-tint-strong bg-white px-6 pb-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-md px-2 py-2.5 text-[15px] ${
                active === link.id ? 'bg-tint font-bold text-navy' : 'text-ink/80'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
