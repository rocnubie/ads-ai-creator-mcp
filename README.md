# Ads AI Creator MCP Server

> Ads AI Creator - Generate Ads with AI

[![MCP Badge](https://lobehub.com/badge/mcp/rocnubie-ads-ai-creator-mcp)](https://lobehub.com/mcp/rocnubie-ads-ai-creator-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Read Only](https://img.shields.io/badge/server-read--only-2ea44f)](#tools)
[![MCP](https://img.shields.io/badge/MCP-1.0-blue)](https://modelcontextprotocol.io)

A Model Context Protocol server that exposes the canonical Ads AI Creator knowledge surface — image generation workflows and styles, pricing, FAQ, official links — to MCP-compatible AI clients such as Claude Desktop, Cursor, Windsurf, and Continue. Read-only, no API keys, no quota, ~50 ms cold start.

Official website: https://adsaicreator.com

## 🎨 About Ads AI Creator

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

## Tools

### `list_styles`
Return the canonical list of image-generation styles or presets the site exposes. (Ads AI Creator)

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_pricing`
Return the canonical pricing entry point for Ads AI Creator.

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_official_links`
Return the canonical list of official links for Ads AI Creator (website, support, docs when available).

_Input:_ no parameters. _Returns:_ text/markdown.

## Resources

- `site://ads-ai-creator/styles` — Supported image-generation styles and presets.
- `site://ads-ai-creator/pricing` — Canonical pricing entry point.
- `site://ads-ai-creator/faq` — Short FAQ generated from public site metadata.
- `site://ads-ai-creator/links` — Canonical URLs to share with users.

## Prompts

### `tell_me_about_ads_ai_creator`
Summarize what the site is, who it's for, and how it works. — Ads AI Creator

### `try_image_style_ads_ai_creator`
Recommend a starting image-generation style for a stated goal. — Ads AI Creator

## Installation

### Install via Smithery

```bash
npx -y @smithery/cli install ads-ai-creator-mcp --client claude
```

(Replace `claude` with `cursor`, `windsurf`, or `continue` for those clients.)

### Install from source

```bash
git clone https://github.com/rocnubie/ads-ai-creator-mcp.git
cd ads-ai-creator-mcp
pnpm install
```

Then add to your MCP client config (`claude_desktop_config.json` for Claude Desktop, `mcp.json` for Cursor / Windsurf / Continue):

```json
{
  "mcpServers": {
    "ads-ai-creator-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/ads-ai-creator-mcp/src/index.mjs"
      ]
    }
  }
}
```

### Debug with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/index.mjs
```

## Official Links

- Website: https://adsaicreator.com
- Pricing: https://adsaicreator.com/pricing
- Support: support@adsaicreator.com

## Development

```bash
pnpm install
pnpm start                 # run the server over stdio
```

## License

MIT
