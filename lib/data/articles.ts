import { Article } from '../types';

export const articles: Article[] = [
  {
    slug: 'llm-model-selection',
    date: '2026-09-14',
    title: "You're Probably Overpaying for Your LLM — Here's How to Stop",
    description:
      'A practical framework for choosing the right LLM based on cost, capability, and risk — not leaderboard hype.',
    content: `Most teams don't choose a model. They inherit one.

Someone picked the frontier model during a demo eighteen months ago, it worked, and nobody has revisited the decision since. Meanwhile pricing has shifted, three new mid-tier options have shipped, and your monthly bill keeps climbing without anyone asking whether the model still fits the job.

The uncomfortable finding: organizations typically overpay for LLMs by 2-3x, not because they picked a bad model, but because they never picked one on purpose. They picked whatever was easiest, and "easiest" and "right-sized for the workload" are rarely the same model.

Model selection isn't about finding the "best" LLM. There is no best — only the model that fits your workload, your budget, and your risk tolerance. Here's the framework for finding it.

## The Three Pillars: Cost, Capability, Risk

Every model decision is really a weighted trade-off between three things, and most teams only ever look at one.

**Cost** — input and output token pricing, hosting and inference overhead, context window size, caching and batching discounts, volume commitments.

**Capability** — benchmark scores like MMLU, coding and reasoning performance, context and retrieval quality, multimodal support, how well the model actually follows instructions.

**Risk** — data privacy and residency requirements, hallucination rate, IP and licensing exposure, vendor lock-in, and whatever SLA you're actually willing to stake production on.

The team that optimizes only for cost ends up with a model that can't hold up under real workloads. The team that optimizes only for capability ends up with a bill nobody can justify at scale. Neither team asked the question that actually matters: which of these three pillars is load-bearing for *this* use case?

The fix is a weighted scorecard. Decide, before you look at a single model, how much cost, capability, and risk each matter for the task in front of you — then score candidates against that weighting instead of against a leaderboard.

## Benchmarks Tell You Less Than You Think

MMLU, HumanEval, and MATH are the standard reference points: broad knowledge across 57 subjects, Python function completion from docstrings, and competition-level math reasoning, respectively. They're useful for a first pass — they are not useful for a final decision.

Benchmarks measure general capability. Your workload is specific. A model that tops the leaderboard on competition math can still underperform on your actual retrieval task, your actual document structure, your actual edge cases. The only benchmark that matters in the end is the one you run yourself, on your own task distribution, with your own data.

## Context Windows: Bigger Isn't the Same as Better

It's tempting to treat context window size as a straightforward capability metric — more tokens, more power. It isn't that simple.

Frontier-tier models now offer context windows well past a million tokens, mid-tier models sit in the hundreds of thousands, and budget-tier models stay leaner and faster. But attention degrades toward the ends of long contexts — the so-called "lost in the middle" effect — which means a model can technically hold a million tokens and still fail to retrieve the one fact buried in the middle of them.

**The rule that actually matters:** context window size does not equal usable context. If your workload depends on long-document retrieval, test retrieval quality directly on your data before you commit. Don't take the spec sheet's word for it.

Latency follows a similar logic. Real-time applications should prioritize low-latency models over marginally higher capability. Batch processing can trade latency for cost. Long-context workloads need their quality verified independently of their advertised size. Privacy-critical workloads may need a self-hosted model just to keep latency — and data — under your own control.

## Matching the Model to the Requirement

Once you know what you're optimizing for, the decision gets much simpler:

- **Complex reasoning or agentic tasks** → a frontier-tier model, checked against the latest reasoning benchmarks, not last quarter's.
- **High-volume, cost-sensitive workloads** → compare mid-tier and budget-tier options directly, and run a two-week pilot before committing either way.
- **Very long documents (500K+ tokens)** → test context quality on your own data specifically for attention degradation, not just token count.
- **Data privacy or on-premise requirements** → evaluate open-weight, self-hosted models, and budget for the MLOps overhead that comes with them.
- **Domain-specific fine-tuning** → an open-weight base plus custom training, with licensing verified up front, not after the fine-tune.
- **Rapid prototyping** → start with the cheapest viable option and upgrade only once results justify the spend.

## What Cost Actually Looks Like at Scale

Sticker price per token is the least useful number in this whole exercise. What actually determines your bill is input token cost, output token cost, context window size, whether caching or batch discounts apply, and whether you qualify for volume pricing.

The calculation is mechanical once you have real numbers:

1. Identify your actual monthly token volume — input plus output.
2. Pull current pricing directly from each provider's documentation, not from a comparison post.
3. Multiply out: (input tokens × input rate) + (output tokens × output rate).
4. Pilot each finalist on your real workload for two weeks.
5. Track cost against quality the entire time — not just at the end.

Pricing moves multiple times a quarter across every major provider. Any number in this article — or any comparison chart you find — is a snapshot, not a fact. Check the provider's own pricing page before you commit spend.

## The Open-Weight Trade-Off

Open-weight models remove the per-token fee entirely: no API bill, full data sovereignty, unrestricted fine-tuning, and the option to run fully offline. For privacy-sensitive or high-volume workloads, that's a real advantage.

It comes at a cost that doesn't show up on a pricing page: GPU infrastructure, model management, and MLOps expertise your team may not currently have. Self-hosted inference typically runs somewhere in the $0.50–$5.00/hour range depending on model size and configuration — and that's before accounting for the engineering time to keep it running reliably.

Open-weight is not the cheap option by default. It's the option that trades a per-token bill for a fixed infrastructure and headcount cost. Whether that trade makes sense depends entirely on your volume and your team's existing capacity.

## The Action Plan: Audit to Production

This isn't a one-time decision — it's a five-phase cycle:

**Week 1 — Audit.** Document what you're actually using today, measure the real capability gaps, and calculate current spend honestly.

**Weeks 2-3 — Benchmark.** Test two to three real candidates, measure latency and hallucination rate on your own data, and build the weighted scorecard from the three pillars above.

**Week 4 — Pilot.** Deploy the winner to staging, monitor for two full weeks, and gather actual user feedback — not just internal impressions.

**Week 5+ — Production.** Roll out gradually — 10%, then 50%, then 100% — keep a fallback model ready, and set alerts on cost, quality, and latency from day one.

**Ongoing.** Review cost against benchmarks monthly. Evaluate new releases quarterly — they don't stop shipping. Run the full audit again annually, because the model that was right a year ago may not be the model that's right now.

## The Part That Doesn't Change

Specific models, prices, and benchmark leaderboards will all be outdated within a quarter. That's not a flaw in this framework — it's the reason the framework exists. Cost, capability, and risk are permanent categories. The weighting between them is the only thing that's actually yours to decide.

You probably don't need to switch models. You probably need to find out whether you're still on the right one — and that starts with an audit, not a new subscription.`,
  }
];