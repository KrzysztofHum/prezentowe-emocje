import axios from "axios";
import OAuth from "oauth-1.0a";
import crypto from "crypto";
const oauth = OAuth({
  consumer: {
    key: process.env.CONSUMER_KEY,
    secret: process.env.CONSUMER_SECRET,
  },
  signature_method: "HMAC-SHA1",
  hash_function(base_string, key) {
    return crypto.createHmac("sha1", key).update(base_string).digest("base64");
  },
});

export const getProducts = async () => {
  const request_data = {
    url: `https://wordpress.prezentowyswiat.pl/wp/wp-json/wc/v3/products`,
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

export const fetchProductBySlug = async (slug) => {
  const request_data = {
    url: `https://wordpress.prezentowyswiat.pl/wp/wp-json/wc/v3/products?slug=${encodeURIComponent(
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

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
