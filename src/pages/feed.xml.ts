import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('posts'))
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
    
  const siteUrl = "https://balamura.li";

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Balamurali Pandranki</title>
        <link>${siteUrl}</link>
        <description>Enterprise Architect, Leader, and Cloud Native enthusiast.</description>
        <language>en</language>
        <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${posts
          .map(
            (post) => `
            <item>
              <title><![CDATA[${post.data.title}]]></title>
              <link>${siteUrl}/blog/${post.id}</link>
              <guid>${siteUrl}/blog/${post.id}</guid>
              <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
              <description><![CDATA[${post.data.description}]]></description>
            </item>
          `
          )
          .join("")}
      </channel>
    </rss>`.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
