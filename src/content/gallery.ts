import type { ImageMetadata } from "astro";

import topperSteampunk from "@/assets/products/hats/topper-steampunk.jpg";
import gogglesBlack from "@/assets/products/goggles/goggles-black.jpg";
import gogglesOxblood from "@/assets/products/goggles/goggles-oxblood.jpg";
import satchelOxblood from "@/assets/products/bags/satchel-oxblood.jpg";
import satchelJade from "@/assets/products/bags/satchel-jade.jpg";
import satchelJadeDetail from "@/assets/products/bags/satchel-jade-detail.jpg";
import harlequinCrown from "@/assets/products/harlequin-crown.jpg";
import hare from "@/assets/products/hare.jpg";
import autumn from "@/assets/products/autumn.jpg";
import carnival from "@/assets/products/carnival.jpg";
import bastet from "@/assets/products/bastet.jpg";

export type GalleryCategory = "Hats" | "Goggles" | "Bags" | "Masks";

export interface GalleryItem {
  id: string;
  src: ImageMetadata;
  alt: string;
  caption?: string;
  category: GalleryCategory;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "topper-steampunk",
    src: topperSteampunk,
    alt: "Steampunk top hat in oxblood and electric blue",
    caption: "The Topper",
    category: "Hats",
  },
  {
    id: "goggles-oxblood",
    src: gogglesOxblood,
    alt: "Oxblood embossed leather goggles",
    caption: "Aviator Goggles — Oxblood",
    category: "Goggles",
  },
  {
    id: "goggles-black",
    src: gogglesBlack,
    alt: "Black leather goggles with copper stitching",
    caption: "Aviator Goggles — Onyx",
    category: "Goggles",
  },
  {
    id: "satchel-jade",
    src: satchelJade,
    alt: "Jade-green crossbody satchel",
    caption: "Jade Satchel",
    category: "Bags",
  },
  {
    id: "satchel-jade-detail",
    src: satchelJadeDetail,
    alt: "Close-up detail of the Jade Satchel's flap and stitching",
    caption: "Jade Satchel — detail",
    category: "Bags",
  },
  {
    id: "satchel-oxblood",
    src: satchelOxblood,
    alt: "Oxblood crossbody satchel",
    caption: "Oxblood Satchel",
    category: "Bags",
  },
  {
    id: "harlequin-crown",
    src: harlequinCrown,
    alt: "Harlequin crown mask",
    caption: "Harlequin Crown",
    category: "Masks",
  },
  {
    id: "hare",
    src: hare,
    alt: "Hare mask",
    caption: "Hare",
    category: "Masks",
  },
  {
    id: "autumn",
    src: autumn,
    alt: "Autumn leaf mask",
    caption: "Autumn",
    category: "Masks",
  },
  {
    id: "carnival",
    src: carnival,
    alt: "Carnival half-mask",
    caption: "Carnival",
    category: "Masks",
  },
  {
    id: "bastet",
    src: bastet,
    alt: "Bastet cat mask",
    caption: "Bastet",
    category: "Masks",
  },
];
