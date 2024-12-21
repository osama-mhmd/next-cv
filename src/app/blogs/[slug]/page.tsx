import { getPost } from "@/lib/utils";
import { notFound } from "next/navigation";

// styles
import "@/styles/blogs.css";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = await getPost(slug);

  if (post.ok)
    return (
      <section className="pt-36">
        <h1>{post.frontmatter.title}</h1>
        <article>{post.content}</article>
      </section>
    );
  else return notFound();
}
