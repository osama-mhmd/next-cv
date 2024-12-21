import { compileMDX, CompileMDXResult } from "next-mdx-remote/rsc";
import fs from "node:fs";
import path from "node:path";
import { ReactElement } from "react";
import * as allComponents from "@/blogs-components";

import rehypeShiki from "@shikijs/rehype";

type Metadata = {
  title: string;
  description?: string;
  isPublished?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content: content };
}

function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: fs.PathLike) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir.toString(), file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts() {
  return getMDXData(path.join(process.cwd(), "src", "blogs"));
}

type PostProcess =
  | {
      ok: true;
      content: ReactElement;
      frontmatter: Metadata;
    }
  | {
      ok: false;
    };

export async function getPost(slug: string): Promise<PostProcess> {
  try {
    const rawContent = fs.readFileSync(
      path.join(process.cwd(), "src", "blogs", `${slug}.mdx`),
      "utf-8"
    );

    return {
      ok: true,
      ...(await compileMDX<Metadata>({
        source: rawContent,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            rehypePlugins: [
              [
                // night-owl, catppuccin-mocha, houston is great == one-dark-pro == plastic
                rehypeShiki,
                {
                  theme: "night-owl",
                  langs: ["js", "jsx", "ts", "tsx", "json", "css", "html"],
                },
              ],
            ],
          },
        },
        components: allComponents,
      })),
    };
  } catch (e) {
    console.log(e);
    return {
      ok: false,
    };
  }
}
