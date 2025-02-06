import { fetchBlogPostBySlug, getBlogPosts } from "@/utils/fetchBlog";
import { BlogPost } from "@/app/types/types";
import Image from "next/image";
// import Image from "next/image";
interface BlogPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const post = await fetchBlogPostBySlug(params.slug);
  return {
    title: post ? post.title : "Product not found",
  };
}

interface PostContentProps {
  description: { rendered: string };
}

const PostContent: React.FC<PostContentProps> = ({ description }) => {
  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: description.rendered }}
    ></div>
  );
};

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await fetchBlogPostBySlug(params.slug);
  console.log(post);
  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold">Wpis nie znaleziony</h1>
      </div>
    );
  }
  return (
    <>
      <nav className="max-w-1400 mx-auto py-8 px-4">
        <ul className="flex items-center space-x-2 text-gray-600">
          <li>
            <a href="/" className="hover:text-primary">
              Strona główna
            </a>
          </li>
          <li>
            <span className="text-4xl">&#183;</span>
          </li>
          <li>
            <a href="/blog" className="hover:text-primary">
              Artykuły
            </a>
          </li>
          <li>
            <span className="text-4xl">&#183;</span>
          </li>
          <li className="text-primary font-semibold">Aktualny tytuł</li>
        </ul>
      </nav>
      <main>
        <article className="max-w-800 mx-auto px-4">
          <div className="flex flex-col sm:flex-row max-w-1400 mx-auto sm:px-4">
            <div className="sm:w-1/2 lg:w-2/3 w-full">
              <Image
                src={post.featured_image_url || ""}
                width={1200}
                height={400}
                alt="Picture of the author"
                layout="responsive"
              />
            </div>
          </div>
          <h1 className="text-5xl font-medium pb-4">{post?.title?.rendered}</h1>
          <div className="pb-4">
            <p>
              utworzone przez <span className="text-gray-600">Krzysztof</span> |{" "}
              <span>gru 14, 2024</span>
            </p>
          </div>
          <div className="pb-6">
            <PostContent description={post?.content} />
          </div>
        </article>
      </main>
    </>
  );
}
