import Link from "next/link";

const BlogSection = () => {
  return (
    <section className="section">
      <p className="sectionTitle">Blog</p>
      <p className="sectionSubtitle">
        Najlepsze artykuły, dowiesz sie jak urządzić dosonałą impeze.
      </p>
      <div>Lista blogów</div>
      <Link className="sectionBtn" href="/blog">
        Zobacz Wszystkie Wpisy
      </Link>
    </section>
  );
};

export default BlogSection;
