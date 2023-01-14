import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";

const postImportResult = import.meta.glob("./posts/*.mdx", { eager: true });
const posts = Object.values(postImportResult);

// https://github.com/withastro/rfcs/discussions/419

export const get = async () => {
  return rss({
    // `<title>` field in output xml
    title: "ryanmr.com blog",
    // `<description>` field in output xml
    description: "the blog for ryan rampersad",
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate,
      content: post.Content,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
};
