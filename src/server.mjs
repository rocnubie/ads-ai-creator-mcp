import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "ads-ai-creator-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for Ads AI Creator (https://adsaicreator.com). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "styles",
    "site://ads-ai-creator/styles",
    {
      title: "Styles",
      description: "Supported image-generation styles and presets.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Ads AI Creator — Styles\n\nAds AI Creator generates ad creatives, copy, and visuals using AI so marketers can iterate on campaigns faster.\n\n## Site basics\n- Site ID: ads-ai-creator\n- Website: https://adsaicreator.com\n- Default locale: en\n- Locales: en\n\n## Public feature scope\n- image gen\n\n## Official website\nhttps://adsaicreator.com",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://ads-ai-creator/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Ads AI Creator Pricing\n\nCanonical pricing page: https://adsaicreator.com/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://ads-ai-creator/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nAds AI Creator generates ad creatives, copy, and visuals using AI so marketers can iterate on campaigns faster.\n\n## Where can I get help?\nsupport@adsaicreator.com\n\n## Which site is this?\nads-ai-creator (Ads AI Creator)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://ads-ai-creator/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://adsaicreator.com\n- Pricing: https://adsaicreator.com/pricing\n- Support: support@adsaicreator.com",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_styles",
    {
      description: "Return the canonical list of image-generation styles or presets the site exposes. (Ads AI Creator)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Ads AI Creator — Styles\n\nAds AI Creator generates ad creatives, copy, and visuals using AI so marketers can iterate on campaigns faster.\n\nCanonical website: https://adsaicreator.com" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for Ads AI Creator.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Ads AI Creator Pricing\n\nOfficial pricing: https://adsaicreator.com/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for Ads AI Creator (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://adsaicreator.com\n- Pricing: https://adsaicreator.com/pricing\n- Support: support@adsaicreator.com" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_ads_ai_creator",
    {
      description: "Summarize what the site is, who it's for, and how it works. — Ads AI Creator",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what Ads AI Creator (https://adsaicreator.com) is, who it's for, and how it works. Reference the canonical resources at site://ads-ai-creator/styles and site://ads-ai-creator/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "try_image_style_ads_ai_creator",
    {
      description: "Recommend a starting image-generation style for a stated goal. — Ads AI Creator",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to generate an image with Ads AI Creator (https://adsaicreator.com). Ask me what the subject is, recommend one style preset from site://ads-ai-creator/styles that fits, and write a prompt I can paste into the site." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
