# AI Systems Engineer Portfolio + RAG Lab

A responsive AI engineering portfolio with an interactive retrieval-augmented generation (RAG) demonstration. It presents production AI capabilities, selected systems, delivery methodology, responsible-AI practices, and a hands-on pipeline experience in one deployable web application.

## What I built

- A professional portfolio for AI/ML engineering roles and client work
- An interactive question-and-answer interface that visualizes a RAG workflow
- Suggested prompts, loading feedback, retrieved evidence, confidence display, and safety-status indicators
- Case studies covering RAG, intelligent agents, predictive ML, evaluation, MLOps, and cloud delivery
- Responsive layouts for desktop, tablet, and mobile
- Open Graph and X metadata with a custom social-sharing image

## Technology stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Language | TypeScript | Type-safe application development |
| UI | React 19 | Components, state, and interactions |
| Framework | Vinext | Next.js-compatible application structure compiled with Vite |
| Styling | Tailwind CSS 4 | Responsive layout and visual design |
| Components | shadcn + Base UI | Accessible interface primitives |
| Icons | Lucide React | Consistent interface iconography |
| Runtime | Cloudflare Workers-compatible ESM | Edge-ready deployment output |
| Hosting | OpenAI Sites | Private production deployment |

## How the demo works

```text
User question
     ↓
Query embedding
     ↓
Hybrid retrieval from the knowledge base
     ↓
Reranking and safety validation
     ↓
Grounded answer with evidence and confidence
```

1. The visitor enters a question or chooses a suggested prompt.
2. React stores the question and starts the pipeline interaction.
3. The interface visualizes embedding, retrieval, reranking, guardrail, and generation stages.
4. A grounded response is selected for the demonstration topic.
5. Supporting documents, relevance scores, confidence, and safety checks are displayed.

## Important implementation note

The deployed RAG lab is an interactive front-end prototype. It uses local sample content and deterministic response logic so it is safe, fast, inexpensive, and easy to demonstrate without exposing an API key.

A production implementation would replace the local response layer with:

- A FastAPI or TypeScript API service
- An LLM provider such as OpenAI, Anthropic, Google, or a hosted open model
- An embedding model and vector database such as pgvector, Pinecone, or Weaviate
- Document ingestion, parsing, chunking, metadata, and versioning
- Hybrid retrieval, reranking, citations, prompt-injection protection, and output validation
- Authentication, rate limiting, caching, tracing, evaluation, and cost monitoring

## Application architecture

```text
Browser
  └── React portfolio and RAG workbench
        ├── Prompt input and suggested questions
        ├── Pipeline state and loading feedback
        ├── Grounded response renderer
        └── Evidence and guardrail indicators

Production extension
  └── REST API / AI gateway
        ├── Retrieval service → embeddings → vector database
        ├── Model router → LLM providers
        ├── Safety and validation layer
        └── Observability → traces, evaluations, latency, and cost
```

## Project structure

```text
app/
  layout.tsx      Site metadata, fonts, and root layout
  page.tsx        Portfolio content and interactive RAG demo
  globals.css     Theme tokens and global responsive styling
components/ui/    Reusable shadcn/Base UI components
public/
  og.png          Social-sharing preview image
.openai/
  hosting.json    Hosting project configuration
```

## Run locally

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Create the production build:

```bash
npm run build
```

## How to explain this project in an interview

### 30-second version

> I built a TypeScript and React AI engineering portfolio with an interactive RAG workbench. The interface demonstrates the complete user journey from a natural-language question through retrieval, reranking, safety checks, and a citation-backed answer. I designed it as a deterministic front-end prototype so it can be demonstrated without exposing model credentials, while keeping the architecture ready for a real API, vector database, and LLM provider.

### Technical version

> I used React state to control the query, loading, and response states, and composed accessible shadcn/Base UI primitives with Tailwind CSS. The application is structured with Vinext, which provides a Next.js-style model and Vite-based Cloudflare-compatible output. For production, I would place an AI gateway behind the UI, ingest and chunk source documents, store embeddings in pgvector or Pinecone, use hybrid retrieval and reranking, route the prompt to an appropriate LLM, validate the answer and citations, and monitor quality, latency, drift, and cost.

## Suggested LinkedIn description

Built and deployed an AI Systems Engineer portfolio featuring an interactive RAG operations lab. Developed with TypeScript, React 19, Vinext, Tailwind CSS, shadcn/Base UI, and a Cloudflare Workers-compatible runtime. The demo visualizes query embedding, hybrid retrieval, reranking, safety validation, grounded generation, evidence scores, and confidence. Designed the prototype for credential-free demonstration with a clear production path to FastAPI, an LLM provider, pgvector/Pinecone, observability, and continuous evaluation.

## Next production milestone

Connect the interface to a server-side AI gateway and a real document collection. Keep model keys server-side, add authentication and rate limits, create an evaluation dataset, and monitor answer quality, latency, and cost before opening access to external users.
