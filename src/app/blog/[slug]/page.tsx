import { fetchBlogPostBySlug, getBlogPosts } from "@/utils/fetchBlog";
import { BlogPost } from "@/app/types/types";
import Image from "next/image";
import NextHead from "next/head";

interface BlogPageProps {
  params: { slug: string };
}

// export async function generateStaticParams() {
//   const posts = await getBlogPosts();

//   return (posts as unknown as BlogPost[]).map((post) => ({
//     slug: post.slug,
//   }));
// }

export async function generateMetadata({ params }: BlogPageProps) {
  const post = await fetchBlogPostBySlug(params.slug);
  return {
    title: post?.title?.rendered || "Brak tytułu",
    description:
      post?.excerpt?.rendered.replace(/<[^>]+>/g, "") || "Opis artykułu",
    openGraph: {
      title: post?.title?.rendered,
      description: post?.excerpt?.rendered.replace(/<[^>]+>/g, ""),
      type: "article",
      url: `https://twoja-strona.pl/blog/${params.slug}`,
      images: [
        {
          url: post?.featured_image_url || "/default-image.jpg",
          width: 1200,
          height: 630,
          alt: post?.title?.rendered || "Obrazek wyróżniający",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title?.rendered,
      description: post?.excerpt?.rendered.replace(/<[^>]+>/g, ""),
      images: [post?.featured_image_url || "/default-image.jpg"],
    },
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
      <NextHead>
        <title>{post?.title?.rendered}</title>
        <meta
          name="description"
          content={post?.excerpt?.rendered.replace(/<[^>]*>/g, "")}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post?.title?.rendered,
              image: [post?.featured_image_url || "/default-image.jpg"],
              datePublished: post?.date,
              dateModified: post?.modified || post?.date,
              author: {
                "@type": "Person",
                name: "Krzysztof",
              },
              publisher: {
                "@type": "Organization",
                name: "Twoja Firma",
                logo: {
                  "@type": "ImageObject",
                  url: "/logo.png",
                },
              },
              description: post?.excerpt?.rendered.replace(/<[^>]*>/g, ""),
            }),
          }}
        />
      </NextHead>
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
        <article className="max-w-1400 mx-auto px-4">
          {/* Obrazek wyróżniający */}
          <div className="flex justify-center">
            <Image
              src={post.featured_image_url || "/default-image.jpg"}
              width={1400}
              height={400}
              alt={post?.title?.rendered || "Obrazek wyróżniający"}
              loading="lazy"
              className="shadow-md max-h-[400px] object-cover w-full"
            />
          </div>
          <div className="max-w-800 mx-auto sm:px-4 bg-white py-4">
            {/* Tytuł */}
            <h1 className="text-4xl font-bold my-4 leading-tight">
              {post?.title?.rendered}
            </h1>

            {/* Meta informacje */}
            <div className="text-sm text-gray-500 mb-6">
              <p>
                Utworzone przez{" "}
                <span className="font-semibold text-gray-700">Krzysztof</span> |{" "}
                <time dateTime="2024-12-14">14 grudnia 2024</time>
              </p>
            </div>

            {/* Treść posta */}
            <section className="prose lg:prose-xl max-w-none ">
              <PostContent description={post?.content} />
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
