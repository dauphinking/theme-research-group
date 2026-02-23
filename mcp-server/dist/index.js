#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const BASE_URL = process.env.CSC_LAB_BASE_URL?.replace(/\/$/, "") || "https://www.csc-lab.com";
const DEFAULT_LANG = process.env.CSC_LAB_LANG || "zh";
const LANGUAGES = ["zh", "en", "fr"];
async function fetchJson(url) {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok)
        throw new Error(`HTTP ${res.status}: ${url}`);
    return res.json();
}
function lang(langParam) {
    const l = (langParam || DEFAULT_LANG).toLowerCase();
    return LANGUAGES.includes(l) ? l : DEFAULT_LANG;
}
async function getApiIndex(language) {
    const l = lang(language);
    const data = await fetchJson(`${BASE_URL}/${l}/api/index.json`);
    return JSON.stringify(data, null, 2);
}
async function getSection(section, language, limit) {
    const l = lang(language);
    const url = section === "authors"
        ? `${BASE_URL}/${l}/authors/index.json`
        : `${BASE_URL}/${l}/${section}/index.json`;
    const data = await fetchJson(url);
    let items = data.items || [];
    if (typeof limit === "number" && limit > 0)
        items = items.slice(0, limit);
    return JSON.stringify({ ...data, items }, null, 2);
}
async function getItemBySlug(section, slug, language) {
    const l = lang(language);
    const url = section === "authors"
        ? `${BASE_URL}/${l}/authors/index.json`
        : `${BASE_URL}/${l}/${section}/index.json`;
    const data = await fetchJson(url);
    const item = (data.items || []).find((p) => (p.slug || "").toLowerCase() === slug.toLowerCase());
    if (!item)
        return JSON.stringify({
            error: "Not found",
            slug,
            section,
            language: l,
        });
    return JSON.stringify(item, null, 2);
}
const optionalLang = z.string().optional().describe("Language: zh, en, fr");
const optionalLimit = z.number().optional().describe("Max items to return");
const slugParam = z.string().describe("Slug (e.g. yang-2025-input, bihui-jin)");
const mcpServer = new McpServer({
    name: "csc-lab",
    version: "1.0.0",
});
function toContent(text) {
    return { content: [{ type: "text", text }] };
}
mcpServer.registerTool("csc_lab_api_index", {
    description: "Get CSC Lab API index: endpoint URLs and available languages (zh, en, fr).",
    inputSchema: {
        lang: optionalLang,
    },
}, async ({ lang: langArg }) => toContent(await getApiIndex(langArg)));
mcpServer.registerTool("csc_lab_list_publications", {
    description: "List publications (papers) from SJTU CSC Lab. Returns title, authors, summary, date, url.",
    inputSchema: {
        lang: optionalLang,
        limit: optionalLimit,
    },
}, async ({ lang: langArg, limit }) => toContent(await getSection("publication", langArg, limit ?? 50)));
mcpServer.registerTool("csc_lab_get_publication", {
    description: "Get one publication by slug (e.g. yang-2025-input).",
    inputSchema: {
        slug: slugParam,
        lang: optionalLang,
    },
}, async ({ slug, lang: langArg }) => toContent(await getItemBySlug("publication", slug, langArg)));
mcpServer.registerTool("csc_lab_list_authors", {
    description: "List lab members/authors with role, interests, summary.",
    inputSchema: {
        lang: optionalLang,
        limit: optionalLimit,
    },
}, async ({ lang: langArg, limit }) => toContent(await getSection("authors", langArg, limit ?? 100)));
mcpServer.registerTool("csc_lab_get_author", {
    description: "Get one author by slug (e.g. bihui-jin).",
    inputSchema: {
        slug: slugParam,
        lang: optionalLang,
    },
}, async ({ slug, lang: langArg }) => toContent(await getItemBySlug("authors", slug, langArg)));
mcpServer.registerTool("csc_lab_list_projects", {
    description: "List research projects with summary, tags, url.",
    inputSchema: {
        lang: optionalLang,
        limit: optionalLimit,
    },
}, async ({ lang: langArg, limit }) => toContent(await getSection("project", langArg, limit ?? 50)));
mcpServer.registerTool("csc_lab_get_project", {
    description: "Get one project by slug.",
    inputSchema: {
        slug: slugParam,
        lang: optionalLang,
    },
}, async ({ slug, lang: langArg }) => toContent(await getItemBySlug("project", slug, langArg)));
mcpServer.registerTool("csc_lab_list_posts", {
    description: "List news/posts (lab updates, events).",
    inputSchema: {
        lang: optionalLang,
        limit: optionalLimit,
    },
}, async ({ lang: langArg, limit }) => toContent(await getSection("post", langArg, limit ?? 20)));
async function main() {
    const transport = new StdioServerTransport();
    await mcpServer.connect(transport);
    console.error("CSC Lab MCP server running on stdio (base URL: %s)", BASE_URL);
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
});
