import { getPosts } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Blogs() {
  const posts = getPosts();

  return (
    <section className="pt-36">
      <h1 className="text-center mb-6">Blogs</h1>
      <ul className="text-lg *:mb-4">
        {posts.map((post) => (
          <li key={post.slug}>
            {post.metadata.isPublished == "true" ||
            process.env.NODE_ENV == "development" ? (
              <Link className="text-blue-400" href={`/blogs/${post.slug}`}>
                {post.metadata.title}
              </Link>
            ) : (
              <span className="text-muted-foreground">
                <span className="text-amber-600 inline-flex items-center gap-1">
                  Soon <Icon icon="solar:arrow-right-broken" />
                </span>{" "}
                {post.metadata.title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
