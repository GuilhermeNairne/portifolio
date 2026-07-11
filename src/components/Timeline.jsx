import Reveal from './Reveal'

const CAREER = [
  {
    role: 'Desenvolvedor Full Stack',
    org: 'Romagnole',
    period: 'Mai 2022 – Presente',
    current: true,
  },
  {
    role: 'Desenvolvedor Web',
    org: 'Bivox | Martch',
    period: 'Jun 2021 – Mai 2022',
  },
]

const EDUCATION = [
  {
    role: 'Bacharelado em Engenharia de Software',
    org: 'Unicesumar',
    period: 'Mar 2021 – Dez 2024',
  },
  {
    role: 'Técnico em Desenvolvimento de Sistemas',
    org: 'Senai-CTM',
    period: 'Mar 2019 – Nov 2020',
  },
]

function Group({ label, items }) {
  return (
    <div>
      <p className="relative pl-12 text-sm font-bold tracking-[0.14em] text-mid uppercase sm:pl-16">
        {label}
      </p>
      <ol className="mt-4 space-y-8">
        {items.map((item) => (
          <li key={item.role} className="relative pl-12 sm:pl-16">
            <span
              className={`absolute left-[13px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-white sm:left-[21px] ${
                item.current ? 'bg-deep' : 'bg-mid'
              }`}
              aria-hidden="true"
            />
            <p className="text-lg font-bold text-navy">{item.role}</p>
            <p className="mt-0.5 text-[15px] text-ink/70">
              {item.org} ·{' '}
              <span className="font-mono text-[13px]">{item.period}</span>
              {item.current && (
                <span className="ml-2 rounded-full bg-tint-strong px-2 py-0.5 text-xs font-bold text-deep">
                  atual
                </span>
              )}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="trajetoria" className="bg-tint/60 px-6 py-20 lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-3xl">
      
        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
          Carreira e Formação
        </h2>

        <div className="relative mt-12 before:absolute before:left-[13px] before:top-1 before:bottom-1 before:w-px before:bg-tint-strong sm:before:left-[21px]">
          <div className="space-y-14">
            <Group label="Carreira" items={CAREER} />
            <Group label="Formação" items={EDUCATION} />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
