import { connectToDatabase } from "./db";
import { RowDataPacket } from "mysql2";

interface Product {
  id: string;
  title: string;
  img_url: string;
  size: string;
  price: string;
  paper: string;
  envelope: boolean;
  description: string;
  collection: string;
  category: string;
}

interface Products {
  id: string;
  title: string;
}

export async function fetchAllProducts(): Promise<Products[]> {
  const connection = await connectToDatabase();
  if (!connection) {
    console.warn(
      "Database connection failed. Returning an empty product list."
    );
    return [];
  }
  try {
    const query = `SELECT id, title FROM posts`;
    const [rows] = await connection.execute<RowDataPacket[]>(query);
    return rows.map((product) => ({
      id: product.id,
      title: product.title,
    }));
  } finally {
    await connection.end();
  }
}

export async function fetchProductBySlug(
  slug: string
): Promise<Product | null> {
  if (!slug || typeof slug !== "string" || slug.length === 0) {
    throw new Error("Invalid slug");
  }
  const sanitizedSlug = slug.trim().toLocaleLowerCase();

  const connection = await connectToDatabase();
  if (!connection) {
    console.warn(
      "Database connection failed. Returning an empty product list."
    );
    return null;
  }

  try {
    const query = `
      SELECT id, title, img_url, size, price, paper, envelope, description, collection, category 
      FROM posts 
      WHERE slug = ? 
      LIMIT 1
    `;
    const [rows] = await connection.execute<RowDataPacket[]>(query, [
      sanitizedSlug,
    ]);
    if (rows.length > 0) {
      const row = rows[0];
      return {
        id: row.id,
        title: row.title,
        img_url: row.img_url,
        size: row.size,
        price: row.price,
        paper: row.paper,
        envelope: row.envelope,
        description: row.description,
        collection: row.collection,
        category: row.category,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching product by slug", error);
    throw new Error("Error fetching product by slug");
  } finally {
    await connection.end();
  }
}
