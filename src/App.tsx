import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 py-12 text-neutral-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.25),_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.15),_transparent_60%)]" />

      <div className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
          deploy ok
        </span>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            LuvaBet <span className="text-purple-400">VIP</span>
          </h1>
          <p className="text-base text-neutral-400 sm:text-lg">
            Página de teste — Vite + React + TypeScript + Tailwind CSS rodando na AWS.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          <Card label="Stack" value="React 19" />
          <Card label="Build" value="Vite 8" />
          <Card label="Styles" value="Tailwind v4" />
        </div>

        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg border border-purple-500/40 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-200 transition hover:border-purple-400 hover:bg-purple-500/20"
        >
          Cliques: {count}
        </button>

        <p className="font-mono text-xs text-neutral-500">{now.toISOString()}</p>
      </div>
    </main>
  )
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <p className="text-xs uppercase tracking-wider text-neutral-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-neutral-100">{value}</p>
    </div>
  )
}

export default App
