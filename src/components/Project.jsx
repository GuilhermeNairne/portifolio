import { IconImage } from './icons'
import Reveal from './Reveal'

/* TODO: substituir pelo nome, descrição, stack e link (repo/demo) do projeto pessoal assim que definidos. */
export default function Project() {
  return (
    <section id="projeto" className="bg-tint/60 px-6 py-20 lg:px-10 lg:py-28">
      <Reveal className="mx-auto max-w-5xl">
      
        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
          Em breve
        </h2>

        <div className="mt-8 rounded-2xl border border-dashed border-tint-strong bg-tint/40 p-8">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
            {/* TODO: descrição do projeto pessoal */}
            Estou preparando um projeto pessoal para mostrar aqui, com nome,
            descrição, stack utilizada e link para o repositório ou demo.
            Volte em breve para conferir.
          </p>
        </div>

        {/* TODO: substituir pelos screenshots reais em /assets/project-screenshot-{1..5}.jpg */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-tint-strong bg-tint/40 text-mid/60"
            >
              <IconImage className="h-8 w-8" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
