# Ads AI Creator MCP

A minimal, read-only MCP for Ads AI Creator.

This package is generated from the MSA multi-site system and is built for one very specific job:
- provide a real MCP that can be installed and indexed
- keep the setup simple with local `stdio`
- avoid backend integration and API quota costs
- send users back to the official Ads AI Creator website

Official website: https://adsaicreator.com

## About Ads AI Creator

Ads AI Creator is an AI-powered platform that generates professional video advertisements from product images, descriptions, or scripts — no camera, studio, or video editing experience required. Users supply source material and the platform handles the rest: selecting or customizing an AI avatar, writing copy, adding voiceover in the chosen language, and exporting a finished video formatted for the target ad channel. The result is a production-ready ad in minutes rather than days. The platform is designed for teams and individuals who need consistent creative output at a volume that traditional production workflows cannot sustain.

## Key Features

- **AI Avatar Library**: A broad selection of realistic AI presenters with filters for gender, apparent age, and language, enabling brand-consistent spokesperson selection across campaigns.
- **Integrated AI Copywriting**: Automated generation of headlines, calls-to-action, and body text optimized for ad performance, reducing the need for a dedicated copywriter on every variation.
- **Multi-Language Voiceover**: Native-quality audio output in 50+ languages, making it practical to adapt a single campaign for international markets without re-recording.
- **Bulk Variation Generation**: Multiple ad versions with different visuals, scripts, or CTAs can be produced simultaneously, supporting structured A/B testing without proportional increases in production time.
- **Platform-Specific Export**: One-click export in formats and aspect ratios optimized for TikTok, Instagram, YouTube, Facebook, and Google Ads, removing the manual reformatting step between channels.
- **4K Output and Compliance Checks**: Broadcast-resolution exports paired with automated checks against major platform advertising policies before delivery.
- **RESTful API**: Programmatic access for teams that want to integrate ad generation into existing marketing automation pipelines or internal tools.

## Use Cases

- **E-commerce product launches**: Convert product photos and a short brief into a polished video ad ready to run on Meta or TikTok within the same working session.
- **Performance marketing iteration**: Generate dozens of headline and visual combinations in one batch, then route them into an A/B testing framework to find the highest-converting variant quickly.
- **Agency content at scale**: Manage multiple client accounts by producing differentiated creative for each brand from a shared avatar and copy library, without per-project production overhead.
- **International market entry**: Adapt an existing ad concept into 10 or 20 language versions with localized voiceover in a single workflow, avoiding separate localization vendors.
- **Dropshipping and solo operators**: Produce credible, spokesperson-driven ads without hiring a video crew or contracting a freelance editor, keeping production costs proportional to early-stage budgets.

## Who Is It For

Ads AI Creator is built for marketers, e-commerce operators, and creative teams whose output demands outpace traditional production capacity. Performance marketers who run continuous creative refresh cycles will find the bulk generation and A/B tooling directly useful. E-commerce brand owners and dropshippers working with limited budgets get access to video ad production that was previously gated behind agency retainers or full production crews. Agencies handling multiple accounts benefit from the speed and language coverage when scaling client deliverables. The platform also suits growth-focused teams that want to maintain a presence across several ad channels simultaneously without expanding headcount to match the creative workload.

## Core Site Functions

- Image generation and editing workflows for prompts, references, and visual iteration.

## Why This Site Is Good

- The MCP points users to the official Ads AI Creator website instead of a third-party landing page.
- It keeps the package lightweight and easy to install because everything is static and read-only.
- It gives AI clients canonical links for docs, pricing, and support in one place.
- Useful when users want fast visual output without switching between multiple tools.

## Official Links

- Website: https://adsaicreator.com
- Docs: https://adsaicreator.com/docs
- Pricing: https://adsaicreator.com
- Contact: https://adsaicreator.com
- Support: support@adsaicreator.com

## Site Metadata

- Site ID: ads-ai-creator
- Site Name: Ads AI Creator
- Default language: en
- Available languages: en
- Feature tags: `image-gen`

## MCP Resources

- `site://meta`
- `site://pages/overview`
- `site://pages/pricing`
- `site://pages/faq`
- `site://pages/links`

## Why This MCP Is Useful

- It is a real MCP package, not just a README-only repository.
- It is lightweight enough for quick indexing and easy local installation.
- It gives AI clients structured access to official website context and links.
- It is simple to fork, publish, and maintain for directory submissions.

## Quick Start

Install dependencies:

```bash
pnpm install
```

Run the server:

```bash
pnpm start
```

Run tests:

```bash
pnpm test
```

## Claude Desktop Example

```json
{
  "mcpServers": {
    "ads-ai-creator": {
      "command": "pnpm",
      "args": [
        "--dir",
        "/absolute/path/to/exports/ads-ai-creator",
        "start"
      ]
    }
  }
}
```

## Directory Submission Notes

- Repo type: local `stdio` MCP
- Maintenance model: generated from the MSA multi-site source
- Primary goal: directory indexing, official link discovery, and lightweight client install
