import { useState } from 'react'
import { IconGithub, IconLinkedin, IconMail, IconWhatsapp, IconCheck } from './icons'

const EMAIL = 'guilhermemen2003@gmail.com'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contato" className="bg-navy px-6 py-16 text-center lg:px-10">
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        Vamos conversar?
      </h2>
      <p className="mx-auto mt-3 max-w-md text-white/70">
        Aberto a novas oportunidades e projetos. É só chamar.
      </p>

      <button
        type="button"
        onClick={copyEmail}
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-deep px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-mid"
      >
        {copied ? <IconCheck className="h-4.5 w-4.5" /> : <IconMail className="h-4.5 w-4.5" />}
        {copied ? 'E-mail copiado!' : EMAIL}
      </button>

      <div className="mt-8 flex items-center justify-center gap-5">
        <a
          href="https://wa.me/5544998696460"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp de Guilherme"
          className="text-white/60 transition-colors hover:text-white"
        >
          <IconWhatsapp className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/GuilhermeNairne"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub de Guilherme"
          className="text-white/60 transition-colors hover:text-white"
        >
          <IconGithub className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/guilherme-men-nairne"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn de Guilherme"
          className="text-white/60 transition-colors hover:text-white"
        >
          <IconLinkedin className="h-6 w-6" />
        </a>
      </div>

      <p className="mt-10 text-xs text-white/40">
        © {new Date().getFullYear()} Guilherme Men Linhares Nairne
      </p>
    </footer>
  )
}
