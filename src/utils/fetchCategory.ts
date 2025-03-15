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

export const fetchCategoryBySlug = async (slug: string) => {
  const request_data = {
    url: `http://localhost:8000/wp-json/wc/v3/products/categories?slug=${encodeURIComponent(
      slug
    )}`,
    method: "GET",
  };
  const authHeader = oauth.toHeader(oauth.authorize(request_data));

  try {
    const response = await axios.get(request_data.url, {
      headers: {
        ...authHeader,
      },
    });
    return response.data[0];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchCategory = async (slug: string) => {
  const category = await fetchCategoryBySlug(slug);

  if (!category.id) {
    console.error("Błąd: Nie znaleziono ID kategorii!");
    return [];
  }

  const request_data = {
    url: `http://localhost:8000/wp-json/wc/v3/products?category=${category.id}`,
    method: "GET",
  };
  const authHeader = oauth.toHeader(oauth.authorize(request_data));

  try {
    const response = await axios.get(request_data.url, {
      headers: {
        ...authHeader,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export async function fetchCategories() {
  const request_data = {
    url: `http://localhost:8000/wp-json/wc/v3/products/categories?per_page=100`,
    method: "GET",
  };
  const authHeader = oauth.toHeader(oauth.authorize(request_data));

  try {
    const response = await axios.get(request_data.url, {
      headers: {
        ...authHeader,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
