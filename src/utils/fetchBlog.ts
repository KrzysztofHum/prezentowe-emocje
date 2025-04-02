import axios from "axios";
import OAuth from "oauth-1.0a";
import crypto from "crypto";

const oauth = new OAuth({
  consumer: {
    key: process.env.CONSUMER_KEY!,
    secret: process.env.CONSUMER_SECRET!,
  },
  signature_method: "HMAC-SHA1",
  hash_function(base_string: string, key: string): string {
    return crypto.createHmac("sha1", key).update(base_string).digest("base64");
  },
});

interface Post {
  id: number;
  slug: string; // Dodany slug dla generowania linków
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string }; // Dodany excerpt do SEO
  date: string; // Data publikacji
  modified: string;
  featured_media: number;
  featured_image_url: string | null; // URL obrazka wyróżniającego
}

interface FeaturedImageResponse {
  source_url: string;
}

export const getFeaturedImageUrl = async (
  mediaId: number
): Promise<string | null> => {
  if (!mediaId) return null;

  const request_data = {
    url: `https://wordpress.prezentowyswiat.pl/wp/wp-json/wp/v2/media/${mediaId}`,
    method: "GET",
  };

  const authHeader = oauth.toHeader(oauth.authorize(request_data));

  try {
    const response = await axios.get<FeaturedImageResponse>(request_data.url, {
      headers: {
        ...authHeader,
      },
    });

    return response.data.source_url;
  } catch (error) {
    console.error("Error fetching featured image:", error);
    return null;
  }
};

export const getBlogPosts = async (): Promise<Post[]> => {
  const request_data = {
    url: "https://wordpress.prezentowyswiat.pl/wp/wp-json/wp/v2/posts",
    method: "GET",
  };

  const authHeader = oauth.toHeader(oauth.authorize(request_data));

  try {
    const response = await axios.get<Post[]>(request_data.url, {
      headers: {
        ...authHeader,
      },
    });

    const postsWithImages = await Promise.all(
      response.data.map(async (post) => ({
        ...post,
        featured_image_url: await getFeaturedImageUrl(post.featured_media),
      }))
    );

    return postsWithImages;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

export const fetchBlogPostBySlug = async (
  slug: string
): Promise<Post | null> => {
  const request_data = {
    url: `https://wordpress.prezentowyswiat.pl/wp/wp-json/wp/v2/posts?slug=${encodeURIComponent(
      slug
    )}`,
    method: "GET",
  };

  const authHeader = oauth.toHeader(oauth.authorize(request_data));

  try {
    const response = await axios.get<Post[]>(request_data.url, {
      headers: {
        ...authHeader,
      },
    });

    const blogWithImage = {
      ...response.data[0],
      featured_image_url: await getFeaturedImageUrl(
        response.data[0]?.featured_media
      ),
    };

    return response.data.length > 0 ? blogWithImage : null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
};
