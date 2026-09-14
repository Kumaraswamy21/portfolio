import type { Metadata } from 'next';
import BioText from '../../components/about/BioText';
import ProfileCard from '../../components/about/ProfileCard';

export const metadata: Metadata = {
  title: 'About',
  description: 'A bit about me and what I do.',
};

const bioParagraphs = [
  `I'm a full-stack engineer who enjoys turning complex ideas into simple, reliable experiences. I spent the early part of my career building production systems with Java, and today I'm bringing that same engineering mindset to AI-native applications.`,

  `I like working where software meets intelligence — building with Next.js, TypeScript, Python, and LLMs to create applications that don't just work, but feel thoughtful and useful. From AI-powered resume scoring to conversational cinema assistants, support-ticket workflows, and intelligent systems built with RAG and agentic patterns, I enjoy turning ideas into products people can actually use.`,

  `I'm particularly interested in the space between AI capability and software reliability. Structured outputs, validation, clean APIs, retrieval pipelines, tool calling, and well-designed systems may not always be the flashy part of an AI application, but they're what make it dependable. I enjoy bringing strong software engineering fundamentals into AI development and building systems that are intelligent without becoming unnecessarily complicated.`,

  `I believe great software doesn't need to be complicated to be powerful. Build with curiosity, keep it simple, and make every layer count.`,
];

export default function AboutPage() {
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
      <div className="min-w-0">
        <h1 className="text-display mb-10 max-w-3xl text-foreground">
          I&apos;m Kumaraswamy. I build thoughtful web apps and developer experiences.
        </h1>
        <BioText paragraphs={bioParagraphs} />
      </div>

      <div>
        <ProfileCard />
      </div>
    </div>
  );
}
