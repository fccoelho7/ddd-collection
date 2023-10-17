import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <strong>DDD</strong> <small>[Collection]</small>
    </span>
  ),
  project: {
    link: "https://github.com/fccoelho7/ddd-collection",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/fccoelho7/ddd-collection",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – DDD Collection",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="DDD Collection" />
      <meta
        property="og:description"
        content="A collection of practical and illustrative examples that demonstrate how to apply tactical DDD principles"
      />
    </>
  ),
  footer: {
    text: "DDD Collection",
  },
};

export default config;
