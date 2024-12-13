import { fetchData } from "../../utils/db";
import { createSlug } from "../../utils/createSlug";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const data = await fetchData();
  return data.map((item) => ({ slug: createSlug(item.title) }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const data = await fetchData();
  const post = data.find((item) => createSlug(item.title) === params.slug);
  return { title: post?.title || "Post Not Found" };
}

export default async function ProductPage({ params }: { params: Params }) {
  const data = await fetchData();
  const post = data.find((item) => createSlug(item.title) === params.slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Score: {post.score}</p>
    </div>
  );
}
