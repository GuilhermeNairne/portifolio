import { IconWorld, IconDeviceMobile, IconServer } from './icons'
import Reveal from './Reveal'

const CARDS = [
  {
    icon: IconWorld,
    title: 'Desenvolvimento de sites',
    text: 'Sites institucionais, e-commerces e aplicações web com React, Next.js e Tailwind CSS.',
  },
  {
    icon: IconDeviceMobile,
    title: 'Desenvolvimento de aplicativos',
    text: 'Apps mobile publicados na Apple Store e Google Play com React Native.',
  },
  {
    icon: IconServer,
    title: 'Backend',
    text: 'APIs REST robustas e seguras com Node.js, NestJS e bancos como PostgreSQL e MongoDB.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="bg-white px-6 py-20 lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-4xl">
       
        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
          Da lógica ao deploy
        </h2>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
          <p>
            Minha jornada na programação começou no curso técnico em
            Desenvolvimento de Sistemas, onde tive meu primeiro contato com
            lógica, algoritmos e as bases da área. Na sequência, aprofundei
            esse conhecimento na graduação em Engenharia de Software.
          </p>
          <p>
            Meu primeiro emprego foi como desenvolvedor web, criando sites
            institucionais com WordPress e cuidando também da parte visual
            com Canva e Photoshop.
          </p>
          <p>
            Hoje atuo como desenvolvedor full stack, com foco em frontend,
            construindo aplicações web e mobile do zero ao deploy — sempre
            buscando unir uma boa experiência de uso a um backend sólido por
            trás.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            key={title}
            delay={i * 100}
            className="flex flex-col items-start rounded-2xl bg-white p-7 ring-1 ring-tint-strong transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-tint-strong/50"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-deep">
              <Icon className="h-5.5 w-5.5" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
              {text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
