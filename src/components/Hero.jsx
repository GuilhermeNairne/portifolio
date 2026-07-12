import { IconGithub, IconLinkedin, IconDownload, IconMail } from './icons'
import CoverIllustration from './CoverIllustration'
import Reveal from './Reveal'
import wallpaper from '../assets/walpaper.jpg'

const STATS = [
  { value: '5+', label: 'anos de experiência' },
  { value: '20+', label: 'tecnologias' },
]

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 px-6 pt-14 pb-20 md:pt-20 md:pb-28 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Reveal className="max-w-xl text-center lg:text-left">
          <h1 className="mt-2 text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Olá, eu sou o Guilherme
          </h1>

          <p className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            Do frontend ao backend.
            <br />
            <span className="text-deep">Do zero ao deploy.</span>
          </p>

          <dl className="mt-8 flex items-start justify-center gap-8 lg:justify-start">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-navy">{stat.value}</dd>
                <dd className="font-mono text-xs">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="mailto:guilhermemen2003@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-deep px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-navy"
            >
              <IconMail className="h-4.5 w-4.5" />
              Fale comigo
            </a>
            {/* TODO: substituir href pelo PDF real do currículo em /assets */}
            <a
              href="/assets/curriculo-guilherme-nairne.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-deep/30 bg-white/70 px-6 py-3 text-[15px] font-bold text-deep transition-colors hover:bg-white"
            >
              <IconDownload className="h-4.5 w-4.5" />
              Meu currículo
            </a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-5 lg:justify-start">
            <a
              href="https://github.com/GuilhermeNairne"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Guilherme"
              className="text-ink/60 transition-colors hover:text-deep"
            >
              <IconGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/guilherme-men-nairne"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Guilherme"
              className="text-ink/60 transition-colors hover:text-deep"
            >
              <IconLinkedin className="h-6 w-6" />
            </a>
          </div>
        </Reveal>

       <Reveal delay={150} className="w-full max-w-sm shrink-0 lg:max-w-md -mt-6 lg:-mt-10">
  <CoverIllustration />
</Reveal>
      </div>
    </section>
  )
}
