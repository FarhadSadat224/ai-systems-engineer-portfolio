'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Braces, BrainCircuit, Check, CloudCog, Code2, Database, Gauge, Layers3, Loader2, Network, Play, ShieldCheck, Sparkles, TerminalSquare, Workflow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const sources = [
  { title: 'Q3 support operations', score: '0.94', tag: 'OPS' },
  { title: 'Returns policy · v4.2', score: '0.89', tag: 'POLICY' },
  { title: 'Fulfillment incident log', score: '0.82', tag: 'INCIDENTS' },
];

const capabilities = [
  { icon: BrainCircuit, number: '01', title: 'LLM products', copy: 'Domain-tuned copilots, structured generation, evaluation harnesses, and model routing that balance quality with cost.' },
  { icon: Network, number: '02', title: 'Agentic systems', copy: 'Reliable agents with explicit tools, durable state, approval gates, observability, and graceful failure paths.' },
  { icon: Gauge, number: '03', title: 'Predictive ML', copy: 'Production pipelines for forecasting, ranking, classification, anomaly detection, and decision intelligence.' },
  { icon: CloudCog, number: '04', title: 'MLOps platforms', copy: 'Versioned data and models, automated evaluation, container delivery, drift alerts, and cost-aware serving.' },
];

const projects = [
  { index: '01', type: 'RAG · AGENTS', title: 'Ops intelligence copilot', copy: 'A citation-first assistant that turns fragmented policies, tickets, and incident logs into grounded operational answers.', metric: '2.3×', metricLabel: 'faster resolution', stack: ['LlamaIndex', 'pgvector', 'FastAPI', 'OpenAI'] },
  { index: '02', type: 'PREDICTIVE ML', title: 'Demand signal engine', copy: 'A probabilistic forecasting service with uncertainty bands, automated backtesting, and monitored feature drift.', metric: '31%', metricLabel: 'forecast error ↓', stack: ['PyTorch', 'MLflow', 'Airflow', 'Kubernetes'] },
  { index: '03', type: 'LLM EVALUATION', title: 'Model quality gateway', copy: 'An evaluation and routing layer that blocks unsafe output, tracks regressions, and selects the best model per task.', metric: '42%', metricLabel: 'inference cost ↓', stack: ['LangChain', 'W&B', 'Claude', 'Mistral'] },
];

export default function Home() {
  const [query, setQuery] = useState('Why did enterprise resolution time increase last quarter?');
  const [status, setStatus] = useState<'ready' | 'running' | 'done'>('ready');
  const answer = query.toLowerCase().includes('return')
    ? <>The current returns policy sends orders above <strong className="font-semibold text-white">$500 to manual review</strong>. That control reduced fraudulent refunds, but it added a median 11.4 hours to resolution time. A risk-scored approval lane is the highest-impact next step.</>
    : query.toLowerCase().includes('incident')
      ? <>The fulfillment incident affected <strong className="font-semibold text-white">14.7% of enterprise cases</strong> over 12 days. Queue depth normalized four days after recovery; unresolved policy-review cases—not the incident—remain the larger contributor.</>
      : <>Enterprise resolution time rose <strong className="font-semibold text-white">18% quarter-over-quarter</strong>, driven primarily by a policy change that routed high-value returns to manual review. A two-week fulfillment incident amplified the queue, but accounted for only 22% of the increase.</>;

  const runPipeline = () => {
    if (!query.trim() || status === 'running') return;
    setStatus('running');
    window.setTimeout(() => setStatus('done'), 1250);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="site-shell flex h-20 items-center justify-between border-b border-white/10">
        <a href="#top" className="group flex items-center gap-3" aria-label="AI systems engineer home">
          <span className="grid size-9 place-items-center rounded-full border border-lime-300/40 bg-lime-300 text-[12px] font-black text-[#07110c] transition-transform group-hover:rotate-6">FS</span>
          <span className="hidden text-sm font-semibold tracking-[-0.01em] text-white sm:inline">AI Systems Engineer</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a className="transition-colors hover:text-white" href="#work">Selected work</a>
          <a className="transition-colors hover:text-white" href="#approach">Approach</a>
          <a className="transition-colors hover:text-white" href="#contact">Contact</a>
        </div>
        <Button nativeButton={false} render={<a href="#lab" />} className="h-10 rounded-full bg-white px-5 text-[#07110c] hover:bg-lime-200">
          Open the lab <ArrowDownRight />
        </Button>
      </nav>

      <section id="top" className="site-shell relative grid min-h-[calc(100vh-80px)] items-center gap-10 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
        <div className="pointer-events-none absolute -left-48 top-12 size-[520px] rounded-full bg-lime-300/8 blur-[120px]" />
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-lime-300">
            <span className="size-2 animate-pulse rounded-full bg-lime-300" /> Available for ambitious AI builds
          </div>
          <h1 className="font-display text-[clamp(3.8rem,7.5vw,7.8rem)] leading-[0.84] tracking-[-0.07em] text-white">
            AI that works<br /><span className="text-lime-300">in the wild.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">I design and ship reliable LLM products, agentic workflows, and predictive systems—from first experiment to production telemetry.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="#work" />} className="h-12 rounded-full bg-lime-300 px-6 text-[#07110c] hover:bg-lime-200">Explore my work <ArrowRight /></Button>
            <Button nativeButton={false} variant="outline" render={<a href="#contact" />} className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">Start a conversation</Button>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/10 pt-6">
            {[['42%', 'lower inference cost'], ['99.9%', 'pipeline uptime'], ['2.3×', 'faster resolution']].map(([metric, label]) => (
              <div key={metric} className="pr-3"><div className="font-mono text-lg font-semibold text-white">{metric}</div><div className="mt-1 text-[11px] leading-4 text-slate-500">{label}</div></div>
            ))}
          </div>
        </div>

        <div id="lab" className="relative z-10 scroll-mt-6">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-lime-300/10 via-transparent to-sky-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0b1712]/95 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-3"><div className="flex gap-1.5" aria-hidden="true"><span className="size-2 rounded-full bg-red-400/70" /><span className="size-2 rounded-full bg-amber-300/70" /><span className="size-2 rounded-full bg-lime-300/70" /></div><span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">Context Lab / RAG-01</span></div>
              <Badge variant="outline" className="border-lime-300/25 bg-lime-300/8 text-lime-300"><span className="size-1.5 rounded-full bg-lime-300" /> Live demo</Badge>
            </div>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
                <div className="mb-4 flex items-center justify-between"><label htmlFor="query" className="text-sm font-medium text-white">Ask your operations data</label><span className="font-mono text-[10px] text-slate-500">3,842 CHUNKS</span></div>
                <Textarea id="query" value={query} onChange={(event) => { setQuery(event.target.value); setStatus('ready'); }} className="min-h-28 resize-none border-white/10 bg-black/20 p-4 leading-6 text-slate-200 placeholder:text-slate-600 focus-visible:border-lime-300/60 focus-visible:ring-lime-300/15" />
                <div className="mt-2 flex flex-wrap gap-1.5">{['Explain the returns policy', 'Summarize the incident'].map((prompt) => <button key={prompt} onClick={() => { setQuery(prompt); setStatus('ready'); }} className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] text-slate-500 transition-colors hover:border-lime-300/30 hover:text-lime-300">{prompt}</button>)}</div>
                <div className="mt-3 flex gap-2">
                  <Button onClick={runPipeline} disabled={!query.trim() || status === 'running'} className="h-10 flex-1 bg-lime-300 text-[#07110c] hover:bg-lime-200">{status === 'running' ? <><Loader2 className="animate-spin" /> Running pipeline</> : <><Play className="fill-current" /> Run pipeline</>}</Button>
                  <Button variant="outline" size="icon-lg" aria-label="View pipeline code" className="border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"><Braces /></Button>
                </div>
                <div className="mt-5 space-y-2.5">
                  {['Embed query', 'Hybrid retrieve', 'Rerank + guard', 'Generate answer'].map((step, index) => {
                    const active = status === 'running' ? index <= 1 : status === 'done';
                    return <div key={step} className="flex items-center gap-3 text-xs"><span className={`grid size-5 place-items-center rounded-full border ${active ? 'border-lime-300/50 bg-lime-300/15 text-lime-300' : 'border-white/10 text-slate-600'}`}>{status === 'done' ? <Check className="size-3" /> : index + 1}</span><span className={active ? 'text-slate-200' : 'text-slate-500'}>{step}</span></div>;
                  })}
                </div>
              </div>
              <div className="min-h-[390px] p-5">
                <div className="mb-4 flex items-center justify-between"><span className="text-sm font-medium text-white">Grounded response</span><span className="font-mono text-[10px] text-lime-300">CONFIDENCE 91%</span></div>
                {status === 'running' ? <div className="grid min-h-72 place-items-center text-center"><div><Loader2 className="mx-auto size-6 animate-spin text-lime-300" /><p className="mt-3 text-sm text-slate-500">Retrieving and validating context…</p></div></div> : <>
                  <p className="text-sm leading-6 text-slate-300">{answer}</p>
                  <div className="my-5 h-px bg-white/10" /><div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">Evidence retrieved</div>
                  <div className="space-y-2">{sources.map((source) => <div key={source.title} className="group flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.025] p-3 transition-colors hover:border-lime-300/25"><Database className="size-4 text-lime-300/80" /><div className="min-w-0 flex-1"><div className="truncate text-xs text-slate-300">{source.title}</div><div className="mt-0.5 font-mono text-[9px] text-slate-600">{source.tag}</div></div><span className="font-mono text-[10px] text-slate-500">{source.score}</span></div>)}</div>
                  <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500"><ShieldCheck className="size-3.5 text-lime-300" /> PII scrubbed · citations verified · prompt injection checked</div>
                </>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-white/10 bg-[#0a150f] py-24 sm:py-32">
        <div className="site-shell">
          <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-lime-300">Selected systems / 2024—26</div>
            <h2 className="font-display max-w-4xl text-4xl leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl">From ambiguous business problem to measurable production outcome.</h2>
          </div>
          <div>
            {projects.map((project) => (
              <article key={project.index} className="group grid gap-8 border-b border-white/10 py-10 transition-colors hover:border-lime-300/35 lg:grid-cols-[80px_1fr_0.65fr_0.45fr] lg:items-center">
                <span className="font-mono text-xs text-slate-600">/{project.index}</span>
                <div>
                  <div className="mb-3 font-mono text-[10px] tracking-[0.16em] text-lime-300">{project.type}</div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">{project.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{project.copy}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase text-slate-500">{item}</span>)}</div>
                </div>
                <div className="lg:border-l lg:border-white/10 lg:pl-8"><div className="font-mono text-4xl font-medium tracking-[-0.05em] text-lime-300">{project.metric}</div><div className="mt-1 text-xs text-slate-500">{project.metricLabel}</div></div>
                <div className="flex justify-end"><span className="grid size-11 place-items-center rounded-full border border-white/15 text-slate-400 transition-all group-hover:-rotate-12 group-hover:border-lime-300 group-hover:bg-lime-300 group-hover:text-[#07110c]"><ArrowDownRight /></span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="site-shell py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-lime-300">What I build</div>
            <h2 className="font-display mt-6 max-w-md text-5xl leading-[0.98] tracking-[-0.05em] text-white">Useful intelligence. Engineered responsibly.</h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">The work spans product discovery, data foundations, modeling, API design, deployment, and the observability needed to keep systems honest.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, number, title, copy }) => (
              <div key={number} className="group min-h-72 bg-[#07110c] p-7 transition-colors hover:bg-[#0c1a13] sm:p-9">
                <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-lime-300"><Icon /></span><span className="font-mono text-[10px] text-slate-600">{number}</span></div>
                <h3 className="mt-12 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 transition-colors group-hover:text-slate-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-lime-300 py-20 text-[#07110c] sm:py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">How I ship</div>
            <h2 className="font-display mt-6 text-5xl leading-[0.94] tracking-[-0.06em] sm:text-7xl">Prototype fast.<br />Prove it.<br />Productionize.</h2>
          </div>
          <div className="grid gap-px border-y border-[#07110c]/25">
            {[
              ['01', 'Frame', 'Define the decision, success metric, risks, and cheapest useful experiment.'],
              ['02', 'Build', 'Instrument the data path, establish baselines, and iterate against real evaluations.'],
              ['03', 'Ship', 'Deploy with guardrails, versioning, observability, fallbacks, and a clear owner.'],
              ['04', 'Improve', 'Use production signals to tune quality, latency, reliability, and unit economics.'],
            ].map(([n, title, copy]) => <div key={n} className="grid grid-cols-[44px_95px_1fr] gap-3 border-b border-[#07110c]/20 py-5 last:border-0"><span className="font-mono text-xs opacity-55">{n}</span><span className="font-semibold">{title}</span><span className="text-sm leading-5 opacity-65">{copy}</span></div>)}
          </div>
        </div>
      </section>

      <section className="site-shell py-24 sm:py-32">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><div className="font-mono text-xs uppercase tracking-[0.18em] text-lime-300">Production toolkit</div><h2 className="font-display mt-5 text-4xl tracking-[-0.045em] text-white sm:text-5xl">The right tool for the constraint.</h2></div>
          <div className="font-mono text-[10px] text-slate-600">MODEL-AGNOSTIC / CLOUD-NATIVE / API-FIRST</div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Sparkles, 'Models', 'GPT-4 · Claude · Gemini · Mistral · LLaMA'],
            [Workflow, 'Orchestration', 'LangChain · LlamaIndex · CrewAI · Custom'],
            [Database, 'Data & retrieval', 'Pinecone · Weaviate · pgvector · Chroma'],
            [TerminalSquare, 'Infrastructure', 'AWS · GCP · Azure · Docker · Kubernetes'],
            [Layers3, 'Machine learning', 'PyTorch · TensorFlow · Hugging Face · sklearn'],
            [ShieldCheck, 'Responsible AI', 'Bias tests · validators · red teams · guardrails'],
            [Gauge, 'Observability', 'MLflow · W&B · traces · drift · cost telemetry'],
            [Code2, 'Delivery', 'FastAPI · REST · GitHub Actions · Terraform'],
          ].map(([Icon, label, copy]) => {
            const IconComponent = Icon as typeof Sparkles;
            return <div key={label as string} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"><IconComponent className="size-5 text-lime-300" /><div className="mt-8 text-sm font-semibold text-white">{label as string}</div><p className="mt-2 text-xs leading-5 text-slate-500">{copy as string}</p></div>;
          })}
        </div>
      </section>

      <section id="contact" className="site-shell pb-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1a13] px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border-[70px] border-lime-300/5" />
          <div className="relative z-10 max-w-4xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-lime-300">Let’s work together</div>
            <h2 className="font-display mt-6 text-5xl leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl">Have a hard AI problem?<br /><span className="text-slate-500">Let’s make it shippable.</span></h2>
            <p className="mt-7 max-w-xl text-sm leading-6 text-slate-400">Available for AI engineering roles, focused consulting, and product collaborations where reliability matters as much as the demo.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button nativeButton={false} render={<a href="mailto:?subject=AI%20project%20inquiry" />} className="h-12 rounded-full bg-lime-300 px-6 text-[#07110c] hover:bg-lime-200">Start a conversation <ArrowRight /></Button>
              <Button variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white">Back to top</Button>
            </div>
          </div>
        </div>
        <footer className="flex flex-col justify-between gap-5 py-8 text-xs text-slate-600 sm:flex-row sm:items-center"><span>© 2026 AI Systems Engineer</span><span className="font-mono">DESIGN · BUILD · DEPLOY · IMPROVE</span></footer>
      </section>
    </main>
  );
}
