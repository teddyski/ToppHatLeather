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

export type ProductCategory = "Hats" | "Goggles" | "Bags" | "Masks";

export interface Product {
  slug: string;
  title: string;
  category: ProductCategory;
  heroImage: ImageMetadata;
  heroAlt: string;
  gallery?: { src: ImageMetadata; alt: string }[];
  description: string[];
  materials?: string;
  dimensions?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "topper-steampunk",
    title: "The Topper",
    category: "Hats",
    heroImage: topperSteampunk,
    heroAlt:
      "Steampunk leather top hat in oxblood and electric blue, with matching goggles wrapped around the brim.",
    description: [
      "The signature piece. A full-height leather top hat, hand-cut from a single sheet, wet-formed over a sculpted block, and saddle-stitched in contrast thread.",
      "This one is dyed in oxblood and electric blue with hand-burnished edges. The matching goggles ride the brim and lift onto the crown when you actually need to see.",
    ],
    materials:
      "Vegetable-tanned cowhide, brass hardware, mineral glass, waxed linen thread.",
    dimensions: 'Custom-fit. Crown approx. 6" tall.',
    featured: true,
  },
  {
    slug: "goggles-oxblood",
    title: "Aviator Goggles — Oxblood",
    category: "Goggles",
    heroImage: gogglesOxblood,
    heroAlt:
      "Oxblood leather aviator goggles with embossed croc texture, contrast stitching, and an adjustable strap.",
    description: [
      "Embossed oxblood leather with a black band and brass fittings. Stitched by hand in the same waxed linen used on the satchels.",
      "Worn alone or wrapped around the brim of a hat — they hold their shape either way.",
    ],
    materials: "Embossed cowhide, brass buckles, smoked lenses.",
    featured: true,
  },
  {
    slug: "goggles-black",
    title: "Aviator Goggles — Onyx",
    category: "Goggles",
    heroImage: gogglesBlack,
    heroAlt:
      "Black leather aviator goggles with copper-orange contrast stitching and brass hardware.",
    description: [
      "All-black leather with copper-orange saddle stitching and antique brass. The classic of the line.",
    ],
    materials: "Vegetable-tanned cowhide, brass buckles, smoked lenses.",
  },
  {
    slug: "satchel-jade",
    title: "Jade Satchel",
    category: "Bags",
    heroImage: satchelJade,
    heroAlt:
      "Small crossbody satchel in jade-green dyed leather with a black flap, brass buckle, and saddle stitching.",
    gallery: [
      {
        src: satchelJadeDetail,
        alt: "Close-up of the jade satchel's flap, brass buckle, and contrast saddle stitching.",
      },
    ],
    description: [
      "A small crossbody in hand-dyed jade leather with a black flap and antique brass. The dye is applied wet so the color marbles into the grain — no two come out the same.",
      "Drawstring closure under the flap. Long enough strap to wear at the hip or across the chest.",
    ],
    materials: "Vegetable-tanned cowhide, hand-dyed; brass buckle.",
    dimensions: 'Approx. 7" wide × 7" tall.',
    featured: true,
  },
  {
    slug: "satchel-oxblood",
    title: "Oxblood Satchel",
    category: "Bags",
    heroImage: satchelOxblood,
    heroAlt:
      "Oxblood crossbody satchel in embossed leather with a black flap and adjustable strap.",
    description: [
      "Same pattern as the Jade, cut in embossed oxblood with a long adjustable strap.",
      "Quiet, weather-finished, and built to age in.",
    ],
    materials: "Embossed cowhide, brass buckle.",
    dimensions: 'Approx. 7" wide × 7" tall.',
  },
  {
    slug: "harlequin-crown",
    title: "Harlequin Crown",
    category: "Masks",
    heroImage: harlequinCrown,
    heroAlt:
      "White and black leather mask with gold accents and a crown of pointed horns.",
    description: [
      "A theatrical half-mask with a crown of leather points, riveted in brass and finished by hand.",
      "Wet-formed over a sculpted base and painted in layers — the gold and black are dyed into the leather, not laid on top.",
    ],
    materials: "Vegetable-tanned cowhide, brass rivets, leather lace ties.",
    dimensions: 'Approx. 11" wide × 12" tall.',
  },
  {
    slug: "hare",
    title: "Hare",
    category: "Masks",
    heroImage: hare,
    heroAlt:
      "Leather hare mask with tall ears, painted in metallic copper, gold, and green.",
    description: [
      "Long-eared, hand-stitched, finished in metallic copper, gold, and verdigris green.",
      "Each ear is shaped wet so it holds its curve. The seam down the muzzle is saddle-stitched in waxed thread.",
    ],
    materials: "Vegetable-tanned cowhide, waxed linen thread, metallic paint.",
    dimensions: 'Approx. 8" wide × 14" tall (ears extended).',
  },
  {
    slug: "autumn",
    title: "Autumn",
    category: "Masks",
    heroImage: autumn,
    heroAlt:
      "Black leather mask trimmed with three copper-painted maple leaves and gold dot accents.",
    description: [
      "Three sculpted maple leaves rise from a deep black half-mask, each veined and curled by hand.",
      "Subtle gold dot work follows the brow line.",
    ],
    materials: "Vegetable-tanned cowhide, brass rivets, metallic paint.",
    dimensions: 'Approx. 9" wide × 6" tall.',
  },
  {
    slug: "carnival",
    title: "Carnival",
    category: "Masks",
    heroImage: carnival,
    heroAlt:
      "Carnival half-mask with copper diamond pattern on the left and black with leaves on the right.",
    description: [
      "Two halves of one face — diamond harlequin on one side, autumn dark on the other.",
      "Built for the kind of evening where you do not want to be recognized at first glance.",
    ],
    materials: "Vegetable-tanned cowhide, leather lace ties.",
    dimensions: 'Approx. 9" wide × 5" tall.',
  },
  {
    slug: "bastet",
    title: "Bastet",
    category: "Masks",
    heroImage: bastet,
    heroAlt:
      "Black leather cat mask with gold Egyptian-style markings and an ankh between the eyes.",
    description: [
      "A feline mask drawn from Egyptian iconography. The ankh sits centered between the eyes; the brow lines curl into hieroglyph-like forms.",
      "Painted in real gold leaf over a hand-burnished black ground.",
    ],
    materials: "Vegetable-tanned cowhide, gold leaf, leather lace ties.",
    dimensions: 'Approx. 10" wide × 8" tall.',
  },
];
