import { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    category: 'AI & LLM Engineering',
    items: [
      {
        title: 'LLM Integration',
        description:
          'Building production AI workflows with Anthropic, OpenAI, Google Gemini, and Groq'
      },
      {
        title: 'RAG & AI Agents',
        description:
          'Designing retrieval-augmented and agentic workflows with tool calling and multi-step reasoning'
      },
      {
        title: 'Structured Outputs',
        description:
          'Building reliable AI responses with schema validation using Zod and Pydantic'
      },
      {
        title: 'Prompt Engineering',
        description:
          'Designing prompts for consistent, contextual, and application-ready LLM responses'
      }
    ]
  },
  {
    category: 'Full-Stack',
    items: [
      {
        title: 'Next.js',
        description:
          'Building modern full-stack applications with server-side workflows and AI integrations'
      },
      {
        title: 'TypeScript',
        description:
          'Type-safe application development with reliable APIs and structured data flows'
      },
      {
        title: 'React',
        description:
          'Creating responsive, accessible, and interactive user experiences'
      },
      {
        title: 'Python & FastAPI',
        description:
          'Building lightweight backend services and AI-powered API workflows'
      }
    ]
  },
  {
    category: 'Backend Engineering',
    items: [
      {
        title: 'Java & Spring Boot',
        description:
          '4+ years of production experience building enterprise backend services and APIs'
      },
      {
        title: 'Microservices',
        description:
          'Designing domain-driven services with Spring Cloud and independently deployable components'
      },
      {
        title: 'REST APIs',
        description:
          'Designing secure, scalable APIs for high-volume enterprise applications'
      },
      {
        title: 'Kafka & Messaging',
        description:
          'Building asynchronous, event-driven workflows with Kafka and RabbitMQ'
      }
    ]
  },
  {
    category: 'Data & Infrastructure',
    items: [
      {
        title: 'PostgreSQL & MySQL',
        description:
          'Designing schemas and optimizing database access with indexing, pooling, and pagination'
      },
      {
        title: 'Vector Databases',
        description:
          'Working with vector storage and retrieval for RAG-powered applications'
      },
      {
        title: 'Docker & CI/CD',
        description:
          'Containerizing applications and automating reliable build and deployment workflows'
      },
      {
        title: 'AWS',
        description:
          'Cloud experience with AWS services including EC2, RDS, and S3'
      }
    ]
  },
  {
    category: 'Security & Reliability',
    items: [
      {
        title: 'OAuth2 & JWT',
        description:
          'Implementing secure authentication, authorization, and token-based API access'
      },
      {
        title: 'Validation',
        description:
          'Enforcing reliable data contracts with Zod, Pydantic, and backend validation'
      },
      {
        title: 'Testing',
        description:
          'Writing reliable unit tests with JUnit and Mockito with strong test coverage'
      },
      {
        title: 'Observability',
        description:
          'Working with distributed tracing and monitoring for production-oriented systems'
      }
    ]
  }
];
