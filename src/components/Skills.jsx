import { useState } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMariadb,
  SiRailway,
  SiVercel,
  SiGit,
  SiLinux,
  SiDocker,
  SiWhatsapp,
} from 'react-icons/si'
import {
  IconWorld,
  IconDeviceMobile,
  IconServer,
  IconCloud,
  IconBadge,
  IconDatabase,
  IconApi,
  IconBolt,
  IconSparkle,
} from './icons'
import Reveal from './Reveal'

const CATEGORIES = [
  
  {
    key: 'frontend',
    title: 'Frontend',
    tabIcon: IconWorld,
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React Native', icon: IconDeviceMobile },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    tabIcon: IconServer,
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST APIs', icon: IconApi },
      { name: 'WebSocket', icon: IconBolt },
    ],
  },
  {
    key: 'dados',
    title: 'Banco de dados',
    tabIcon: IconDatabase,
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'OracleDB', icon: IconDatabase },
      { name: 'MariaDB', icon: SiMariadb },
    ],
  },
  {
    key: 'cloud',
    title: 'Cloud & DevOps',
    tabIcon: IconCloud,
    items: [
      { name: 'AWS', icon: IconCloud },
      { name: 'Railway', icon: SiRailway },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Git', icon: SiGit },
      { name: 'Linux', icon: SiLinux },
      { name: 'Docker', icon: SiDocker },
    ],
  },
  {
    key: 'ia',
    title: 'IA / Integração',
    tabIcon: IconSparkle,
    items: [
      { name: 'Agentes de IA', icon: IconSparkle },
      { name: 'WhatsApp Business API', icon: SiWhatsapp },
    ],
  },
]

export default function Skills() {
  const [active, setActive] = useState(CATEGORIES[0].key)
  const category = CATEGORIES.find((cat) => cat.key === active)

  return (
    <section id="habilidades" className="bg-white px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Ferramentas do dia a dia
          </h2>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Categorias de habilidades"
        >
          {CATEGORIES.map((cat) => {
            const TabIcon = cat.tabIcon
            const isActive = cat.key === active
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.key)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-deep text-white'
                    : 'bg-tint text-navy hover:bg-tint-strong'
                }`}
              >
                <TabIcon className="h-4 w-4" />
                {cat.title}
              </button>
            )
          })}
        </Reveal>

        <div
          key={category.key}
          role="tabpanel"
          className="mt-6 animate-fade-up rounded-2xl bg-white p-6 ring-1 ring-tint-strong sm:p-8"
        >
          <h3 className="text-lg font-bold text-navy">{category.title}</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {category.items.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-3 rounded-xl bg-tint/60 px-3 py-5 text-center transition-all hover:-translate-y-1 hover:bg-tint"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-deep ring-1 ring-tint-strong">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <span className="text-[13px] font-bold text-navy">{item.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        <Reveal
          delay={200}
          className="mt-6 flex flex-col items-center gap-5 rounded-2xl bg-navy px-7 py-7 sm:flex-row sm:justify-between"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-tint">
              <IconBadge className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-bold text-white">
                AWS Certified Cloud Practitioner
              </p>
              <p className="mt-0.5 flex items-center justify-center gap-1.5 text-[15px] text-white/70 sm:justify-start">
                <IconCloud className="h-4 w-4" />
                Amazon Web Services · 2025
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
