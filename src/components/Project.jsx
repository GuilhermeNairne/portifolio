import { useState } from 'react'
import { IconTask, IconFinance, IconBell, IconArrow } from './icons'
import Reveal from './Reveal'
import Lightbox from './Lightbox'
import tarefa1 from '../assets/tarefa1.png'
import tarefa2 from '../assets/tarefa2.png'
import financeiro from '../assets/financeiro.png'
import notificacao from '../assets/notificacao.png'

const SCREENSHOTS = [
  { src: tarefa1, alt: 'Gerenciador de tarefas — calendário mensal' },
  { src: tarefa2, alt: 'Gerenciador de tarefas — categorias' },
  { src: financeiro, alt: 'Controle financeiro — painel de resumo' },
  { src: notificacao, alt: 'Módulo de notificações' },
]

/* TODO: adicionar nome do projeto e stack utilizada. */
export default function Project() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projeto" className="bg-tint/60 px-6 py-20 lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-5xl">
      
        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
          Projeto Pessoal
        </h2>

         <div className="mt-8 rounded-2xl border border-dashed border-tint-strong bg-tint/40 p-8">
  <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
    Projeto pessoal feito para auxiliar em atividades do dia a dia, com o
    objetivo de aumentar a produtividade e organização. Até o momento, o site
    possui três funcionalidades principais:
  </p>

  <ul className="mt-6 space-y-5">
    <li className="flex gap-4">
      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tint text-deep">
        <IconTask className="h-4 w-4" />
      </span>
      <div>
        <p className="font-semibold text-ink">Gerenciador de tarefas</p>
        <p className="mt-1 text-ink/70">
          Adição de tarefas para dias específicos, organizadas por categoria,
          com painéis e gráficos de acompanhamento.
        </p>
      </div>
    </li>

    <li className="flex gap-4">
      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tint text-deep">
        <IconFinance className="h-4 w-4" />
      </span>
      <div>
        <p className="font-semibold text-ink">Controle financeiro</p>
        <p className="mt-1 text-ink/70">
          Registro de receitas e despesas, gráficos de fluxo de caixa e um
          painel de resumo financeiro.
        </p>
      </div>
    </li>

    <li className="flex gap-4">
      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tint text-deep">
        <IconBell className="h-4 w-4" />
      </span>
      <div>
        <p className="font-semibold text-ink">Módulo de notificações</p>
        <p className="mt-1 text-ink/70">
          Lembretes para atividades importantes, com envio automático por
          e-mail e WhatsApp.
        </p>
      </div>
    </li>
  </ul>

  <div className="mt-8 flex flex-col items-start gap-3 border-t border-tint-strong pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink/70">
          Quer testar na prática? O projeto está no ar e disponível para uso.
        </p>
        <a
          href="https://projeto-pessoal-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-deep px-5 py-2.5 font-semibold text-white transition-colors hover:bg-navy"
        >
          Acessar plataforma
          <IconArrow className="h-4 w-4" />
        </a>
      </div>
</div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SCREENSHOTS.map((shot) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setSelected(shot)}
              aria-label={`Ampliar: ${shot.alt}`}
              className="aspect-video overflow-hidden rounded-xl ring-1 ring-tint-strong transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-tint-strong/50"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="h-full w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      </Reveal>

      {selected && (
        <Lightbox src={selected.src} alt={selected.alt} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
