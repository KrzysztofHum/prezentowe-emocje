export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string | null;
  date_on_sale_from: string | null;
  date_on_sale_to: string | null;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: string[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number | null;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount: number | null;
  sold_individually: boolean;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  tags: string[];
  images: {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  }[];
  attributes: {
    id: number;
    name: string;
    slug: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
  }[];
  default_attributes: string[];
  variations: string[];
  grouped_products: string[];
  menu_order: number;
  price_html: string;
  related_ids: number[];
  meta_data: string[];
  stock_status: string;
  has_options: boolean;
  post_password: string;
  global_unique_id: string;
  _links: string; 
}

export interface BlogPost {
  id: number;
  date: string; 
  date_gmt: string; 
  slug: string; 
  status: "publish" | "future" | "draft" | "pending" | "private"; 
  type: "post"; 
  link: string; 
  title: { rendered: string }; 
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean }; 
  author: number; 
  featured_media: number; 
  categories: number[]; 
  tags: number[]; 
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    author: { embeddable: boolean; href: string }[];
    replies?: { embeddable: boolean; href: string }[];
  };
}

export type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count: number;
  parent: number;
  image?: {
    id: number;
    src: string;
    name: string;
    alt: string;
  } | null;
};