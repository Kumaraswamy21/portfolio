import { Article } from '../types';

export const articles: Article[] = [
  {
    slug: 'Structured Outputs',
    date: '2026-10-01',
    title: "Why Structured Outputs Matter in Production LLM Applications",
    description:
      'LLMs generate flexible language, but production software needs predictable data. Structured outputs use schemas to turn model responses into validated objects that can safely drive interfaces, workflows, tool calls, and storage.',
    url: 'https://www.linkedin.com/pulse/why-structured-outputs-matter-production-llm-kumaraswamy-godugu-pq7oc/',
  },
  {
    slug: 'What Is Generative AI?',
    date: '2026-07-25',
    title: "What Is Generative AI? A Software Engineer’s Mental Model",
    description:
      'Generative AI, often shortened to GenAI, refers to AI systems that generate new content from learned patterns.',
    url: 'https://www.linkedin.com/pulse/what-generative-ai-software-engineers-mental-model-kumaraswamy-godugu-xaudf/',
  }
];
