import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/articles/llm-model-selection',
        destination:
          'https://www.linkedin.com/posts/kumaraswamy-godugu_llmmodelselection-activity-7486789868027666432-Z5za',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
