import { products, type Product } from "@/content/products";
import { galleryItems, type GalleryItem } from "@/content/gallery";
import { settings } from "@/content/settings";

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getGalleryItems(): GalleryItem[] {
  return galleryItems;
}

export function getRecentGalleryItems(limit = 8): GalleryItem[] {
  return galleryItems.slice(0, limit);
}

export function getGalleryCategories(): string[] {
  return Array.from(new Set(galleryItems.map((i) => i.category))).sort();
}

export function getSettings() {
  return settings;
}
