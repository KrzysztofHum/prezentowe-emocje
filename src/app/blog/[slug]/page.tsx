import { fetchBlogPostBySlug, getBlogPosts } from "@/utils/fetchBlog";
import { BlogPost } from "@/app/types/types";
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

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold">Wpis nie znaleziony</h1>
      </div>
    );
  }
  return (
    <div className="max-w-800 pt-8 mx-auto">
      {/* <div className="flex flex-col sm:flex-row max-w-1400 mx-auto sm:px-4">
        <div className="sm:w-1/2 lg:w-2/3 w-full">
          <Image
            src={post?.featured_image_url || ""}
            width={400}
            height={400}
            alt="Picture of the author"
            layout="responsive"
          />
        </div>
      </div> */}
      <h1 className="text-5xl font-medium pb-4">
        {post?.title?.rendered}
      </h1>
      <div className="pb-4">
        <p>
          utworzone przez <span className="text-gray-600">Krzysztof</span> | <span>gru 14, 2024</span>
        </p>
      </div>
      <div className="pb-6">
        <PostContent description={post?.content} />
      </div>
    </div>
  );
}
