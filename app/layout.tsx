import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-systems-engineer-fs.sadat-gis.chatgpt.site'),
  title: 'AI Systems Engineer — LLM, Agents & Machine Learning',
  description: 'Production AI systems, agentic workflows, RAG pipelines, and predictive machine learning—designed and shipped end to end.',
  openGraph: {
    title: 'AI that works in the wild.',
    description: 'LLM systems, intelligent agents, and predictive ML—designed and shipped end to end.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AI that works in the wild.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI that works in the wild.',
    description: 'LLM systems, intelligent agents, and predictive ML—designed and shipped end to end.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>;
}
