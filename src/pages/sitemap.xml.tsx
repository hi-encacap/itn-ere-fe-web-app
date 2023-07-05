import { categoryService, postService } from "@services/index";
import { addWWWToURL, getCategoryPageLink, getPostDetailLink } from "@utils/helper";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";

interface SiteMapLinkItemType {
  link: string;
  lastModified?: string;
  changeFrequency?: string;
  priority?: number;
}

const generateSiteMap = (homeURL: string, items: SiteMapLinkItemType[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${`<url><loc>${homeURL}</loc></url>`}
      ${items
        .map(
          ({ link, lastModified, changeFrequency, priority }) => `
            <url>
              <loc>${homeURL}${link}</loc>
              ${lastModified ? `<lastmod>${lastModified}</lastmod>` : ""}
              ${changeFrequency ? `<changefreq>${changeFrequency}</changefreq>` : ""}
              ${priority ? `<priority>${priority}</priority>` : ""}
            </url>
          `
        )
        .join("")}
    </urlset>
  `;
};

const SiteMap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const homeURL = req.headers.host && addWWWToURL(`https://${req.headers.host}`);

  const [categories, posts] = await Promise.all([
    categoryService.getCategories(),
    postService.getPosts({
      expand: "category.parent",
    }),
  ]);

  const categoryItems: SiteMapLinkItemType[] = categories.map((category) => ({
    link: getCategoryPageLink(category),
    lastModified: dayjs(category.updatedAt).format("YYYY-MM-DD"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const postItems: SiteMapLinkItemType[] = posts.map((post) => ({
    link: getPostDetailLink(post),
    lastModified: dayjs(post.updatedAt).format("YYYY-MM-DD"),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const sitemap = generateSiteMap(homeURL as string, [...categoryItems, ...postItems]);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
