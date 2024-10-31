import Link from "next/link";

const BlogSection = () => {
  return (
    <section>
      <p>Blog</p>
      <p>Najlepsze artykuły, dowiesz sie jak urządzić dosonałą impeze.</p>
      <div>Lista blogów</div>
      <Link href="/blog">Zobacz Wszystkie Wpisy</Link>
    </section>
  );
};

export default BlogSection;
