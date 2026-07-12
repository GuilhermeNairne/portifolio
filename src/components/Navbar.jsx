import { useEffect, useState } from 'react'
import { IconMenu, IconClose } from './icons'
import logo from '../assets/logo_letra_branca.png'

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
    const sections = LINKS.map((l) => ({ id: l.id, el: document.getElementById(l.id) })).filter(
      (s) => s.el,
    )

    let ticking = false

    const updateActive = () => {
      ticking = false

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActive(LINKS[LINKS.length - 1].id)
        return
      }

      const line = window.innerHeight * 0.4
      let current = sections[0]?.id ?? ''
      for (const section of sections) {
        if (section.el.getBoundingClientRect().top <= line) {
          current = section.id
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateActive)
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50  border-tint-strong/70 bg-[#67b3e6] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-10">
        <a href="#topo" className="flex h-9 w-9 items-center justify-center" aria-label="Voltar ao topo">
          <img src={logo} alt="" className="h-10 w-full" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative py-1 font-mono text-sm text-white transition-colors hover:text-navy ${
                active === link.id ? 'font-medium text-navy' : ''
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
              className={`rounded-md px-2 py-2.5 font-mono text-sm ${
                active === link.id ? 'bg-tint font-medium text-navy' : 'text-ink/80'
              }`}
            >
              <span className="text-mid"></span>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
