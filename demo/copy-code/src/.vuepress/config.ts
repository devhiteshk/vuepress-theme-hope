import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";

const VuePress_BASE = process.env.VuePress_BASE as "/" | `/${string}/`;

export default defineUserConfig<DefaultThemeOptions>({
  base: VuePress_BASE || "/",

  title: "Copy Code",
  description: "Copy code button for VuePress2",

  themeConfig: {
    logo: "/logo.svg",
  },

  plugins: ["copy-code2"],
});