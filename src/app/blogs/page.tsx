import { getPosts } from "@/lib/utils";
import Link from "next/link";

export default function Blogs() {
  const posts = getPosts();

  return (
    <section className="pt-36">
      <h1 className="text-center mb-6">Blogs</h1>
      <ul className="list-disc">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link className="link" href={`/blogs/${post.slug}`}>
              {post.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
