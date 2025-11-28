import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Essays",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "nigri.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",      // Latte Base
          lightgray: "#e6e9ef",  // Latte Mantle
          gray: "#9ca0b0",       // Latte Overlay0
          darkgray: "#5c5f77",   // Latte Subtext0
          dark: "#4c4f69",       // Latte Text
          secondary: "#40a02b",  // Latte Green
          tertiary: "#179299",   // Latte Teal (complementary)
          highlight: "rgba(64, 160, 43, 0.12)",
          textHighlight: "#40a02b88",
        },
        darkMode: {
          light: "#1e1e2e",      // Mocha Base
          lightgray: "#181825",  // Mocha Mantle
          gray: "#6c7086",       // Mocha Overlay0
          darkgray: "#cdd6f4",   // Mocha Text
          dark: "#cdd6f4",       // Mocha Text
          secondary: "#a6e3a1",  // Mocha Green
          tertiary: "#94e2d5",   // Mocha Teal (complementary)
          highlight: "rgba(166, 227, 161, 0.12)",
          textHighlight: "#a6e3a188",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
