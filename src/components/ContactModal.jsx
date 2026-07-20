import { useEffect, useState } from 'react'
import { IconClose, IconMail, IconLinkedin, IconWhatsapp, IconCheck } from './icons'

const EMAIL = 'guilherme.men.nairne@gmail.com'

const CONTACTS = [
  {
    label: 'E-mail',
    value: EMAIL,
    copy: true,
    icon: IconMail,
  },
  {
    label: 'WhatsApp',
    value: '(44) 99869-6460',
    href: 'https://wa.me/5544998696460',
    icon: IconWhatsapp,
  },
  {
    label: 'LinkedIn',
    value: 'guilherme-men-nairne',
    href: 'https://www.linkedin.com/in/guilherme-men-linhares-nairne-332aa7181/',
    icon: IconLinkedin,
  },
]

export default function ContactModal({ onClose }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Formas de contato"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl sm:p-7"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-navy">Fale comigo</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-tint hover:text-navy"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          {CONTACTS.map((contact) => {
            const Icon = contact.copy && copied ? IconCheck : contact.icon
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tint text-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy">{contact.label}</span>
                  <span className="block text-[13px] text-ink/60">
                    {contact.copy && copied ? 'Copiado!' : contact.value}
                  </span>
                </span>
              </>
            )

            if (contact.copy) {
              return (
                <button
                  key={contact.label}
                  type="button"
                  onClick={copyEmail}
                  className="flex items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-tint"
                >
                  {content}
                </button>
              )
            }

            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-tint"
              >
                {content}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
