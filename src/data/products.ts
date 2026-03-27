export interface Product {
  id: string;
  name: string;
  slug: string;
  system: "125/90" | "150/100";
  range: "Glossy" | "Matt" | "Magnelis";
  description: string;
  features: string[];
  image: string;
  price?: string;
  category: string;
}

// Google Drive image URL helper
export function driveImage(fileId: string): string {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

// Placeholder file IDs - replace with actual Google Drive file IDs
const PLACEHOLDER_ID = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs";

export const colorOptions: Record<string, { name: string; hex: string }[]> = {
  Glossy: [
    { name: "RAL 9010 White", hex: "#f5f5f0" },
    { name: "RAL 8017 Brown", hex: "#45322e" },
    { name: "RAL 7024 Graphite", hex: "#474a51" },
    { name: "RAL 7016 Anthracite", hex: "#383e42" },
    { name: "RAL 6020 Green", hex: "#2e3a23" },
    { name: "RAL 3009 Oxide Red", hex: "#6d3329" },
    { name: "RAL 9005 Black", hex: "#0a0a0a" },
    { name: "RAL 6005 Moss Green", hex: "#2f4538" },
    { name: "RAL 3005 Wine Red", hex: "#5e2129" },
    { name: "RAL 5010 Blue", hex: "#0e4c92" },
  ],
  Matt: [
    { name: "MAT RAL 9005 Black", hex: "#0a0a0a" },
    { name: "MAT RAL 7016 Anthracite", hex: "#383e42" },
    { name: "MAT RAL 7024 Graphite", hex: "#474a51" },
    { name: "MAT RAL 8017 Brown", hex: "#45322e" },
    { name: "MAT RAL 9010 White", hex: "#f5f5f0" },
    { name: "MAT RAL 3009 Oxide Red", hex: "#6d3329" },
    { name: "MAT RAL 6020 Green", hex: "#2e3a23" },
  ],
  Magnelis: [
    { name: "Magnelis (Natural Zinc)", hex: "#b0b0a8" },
  ],
};

// Half Round 125/90 Products
const halfRound125Products: Product[] = [
  {
    id: "hr125-gutter",
    name: "Half Round Gutter 125mm",
    slug: "half-round-gutter-125",
    system: "125/90",
    range: "Glossy",
    description: "Bilka 125mm half round steel gutter. Premium quality steel guttering with a 125mm width, suitable for most residential properties. Available in a wide range of Glossy, Matt and Magnelis finishes.",
    features: ["125mm width", "0.6mm Bilka steel", "Half round profile", "Available in 2m & 4m lengths", "All RAL colours available"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £12.50/m",
    category: "Gutters",
  },
  {
    id: "hr125-downpipe",
    name: "Downpipe 90mm",
    slug: "downpipe-90",
    system: "125/90",
    range: "Glossy",
    description: "Bilka 90mm round downpipe to complement the 125mm half round gutter system. Precision-formed steel for reliable rainwater drainage.",
    features: ["90mm diameter", "0.6mm Bilka steel", "Round profile", "Available in 2m & 3m lengths", "Colour matched to gutters"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £10.80/m",
    category: "Downpipes",
  },
  {
    id: "hr125-external-bracket",
    name: "Gutter Bracket 125mm",
    slug: "gutter-bracket-125",
    system: "125/90",
    range: "Glossy",
    description: "Steel fascia bracket for securing the 125mm half round gutter. Adjustable design for precise gradient setting.",
    features: ["For 125mm gutters", "Heavy-duty steel", "Adjustable height", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £3.20",
    category: "Brackets & Fixings",
  },
  {
    id: "hr125-running-outlet",
    name: "Running Outlet 125/90mm",
    slug: "running-outlet-125",
    system: "125/90",
    range: "Glossy",
    description: "Running outlet connecting the 125mm gutter to the 90mm downpipe. Factory-formed for a watertight seal.",
    features: ["125mm gutter to 90mm downpipe", "Factory-formed seal", "Steel construction", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £8.50",
    category: "Outlets & Connectors",
  },
  {
    id: "hr125-stopend-external",
    name: "External Stop End 125mm",
    slug: "external-stop-end-125",
    system: "125/90",
    range: "Glossy",
    description: "External stop end for the 125mm half round gutter system. Provides a neat, sealed end to gutter runs.",
    features: ["For 125mm gutters", "Left or right hand", "Sealed finish", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £3.80",
    category: "Stop Ends",
  },
  {
    id: "hr125-union-bracket",
    name: "Union Bracket 125mm",
    slug: "union-bracket-125",
    system: "125/90",
    range: "Glossy",
    description: "Union bracket for joining two lengths of 125mm half round gutter. Provides both structural support and a watertight connection.",
    features: ["For 125mm gutters", "Joins gutter lengths", "Watertight seal", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £5.90",
    category: "Brackets & Fixings",
  },
  {
    id: "hr125-angle-external",
    name: "External Angle 125mm",
    slug: "external-angle-125",
    system: "125/90",
    range: "Glossy",
    description: "90° external angle piece for the 125mm half round gutter system. Allows gutter runs to turn external corners.",
    features: ["90° angle", "For 125mm gutters", "External corners", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £14.50",
    category: "Angles",
  },
  {
    id: "hr125-angle-internal",
    name: "Internal Angle 125mm",
    slug: "internal-angle-125",
    system: "125/90",
    range: "Glossy",
    description: "90° internal angle piece for the 125mm half round gutter system. Allows gutter runs to turn internal corners.",
    features: ["90° angle", "For 125mm gutters", "Internal corners", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £14.50",
    category: "Angles",
  },
  {
    id: "hr125-downpipe-bracket",
    name: "Downpipe Bracket 90mm",
    slug: "downpipe-bracket-90",
    system: "125/90",
    range: "Glossy",
    description: "Wall-mounted bracket for securing the 90mm downpipe. Adjustable standoff for different wall types.",
    features: ["For 90mm downpipes", "Wall-mounted", "Adjustable standoff", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £2.80",
    category: "Brackets & Fixings",
  },
  {
    id: "hr125-downpipe-shoe",
    name: "Downpipe Shoe 90mm",
    slug: "downpipe-shoe-90",
    system: "125/90",
    range: "Glossy",
    description: "Shoe/swan neck base for the 90mm downpipe. Directs water away from the wall at the base of the downpipe.",
    features: ["For 90mm downpipes", "Directs water away from wall", "Steel construction", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £6.50",
    category: "Downpipes",
  },
  {
    id: "hr125-offset-bend",
    name: "Offset Bend 90mm",
    slug: "offset-bend-90",
    system: "125/90",
    range: "Glossy",
    description: "Offset bend for the 90mm downpipe system. Used to navigate from the gutter outlet to the wall face.",
    features: ["For 90mm downpipes", "112.5° angle", "Steel construction", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £5.90",
    category: "Downpipes",
  },
];

// Half Round 150/100 Products
const halfRound150Products: Product[] = [
  {
    id: "hr150-gutter",
    name: "Half Round Gutter 150mm",
    slug: "half-round-gutter-150",
    system: "150/100",
    range: "Glossy",
    description: "Bilka 150mm half round steel gutter. Large capacity steel guttering with a 150mm width, ideal for larger properties and higher rainfall areas. Available in Glossy, Matt and Magnelis finishes.",
    features: ["150mm width", "0.6mm Bilka steel", "Half round profile", "Available in 2m & 4m lengths", "High capacity for larger roofs"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £15.80/m",
    category: "Gutters",
  },
  {
    id: "hr150-downpipe",
    name: "Downpipe 100mm",
    slug: "downpipe-100",
    system: "150/100",
    range: "Glossy",
    description: "Bilka 100mm round downpipe for the 150mm half round gutter system. Larger bore for increased water flow capacity.",
    features: ["100mm diameter", "0.6mm Bilka steel", "Round profile", "Available in 2m & 3m lengths", "High flow capacity"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £13.20/m",
    category: "Downpipes",
  },
  {
    id: "hr150-external-bracket",
    name: "Gutter Bracket 150mm",
    slug: "gutter-bracket-150",
    system: "150/100",
    range: "Glossy",
    description: "Heavy-duty fascia bracket for securing the 150mm half round gutter. Adjustable design to accommodate precise gradient setting.",
    features: ["For 150mm gutters", "Heavy-duty steel", "Adjustable height", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £3.80",
    category: "Brackets & Fixings",
  },
  {
    id: "hr150-running-outlet",
    name: "Running Outlet 150/100mm",
    slug: "running-outlet-150",
    system: "150/100",
    range: "Glossy",
    description: "Running outlet connecting the 150mm gutter to the 100mm downpipe. Factory-formed for a watertight seal.",
    features: ["150mm gutter to 100mm downpipe", "Factory-formed seal", "Steel construction", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £10.50",
    category: "Outlets & Connectors",
  },
  {
    id: "hr150-stopend-external",
    name: "External Stop End 150mm",
    slug: "external-stop-end-150",
    system: "150/100",
    range: "Glossy",
    description: "External stop end for the 150mm half round gutter system. Provides a neat, sealed end to gutter runs.",
    features: ["For 150mm gutters", "Left or right hand", "Sealed finish", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £4.50",
    category: "Stop Ends",
  },
  {
    id: "hr150-union-bracket",
    name: "Union Bracket 150mm",
    slug: "union-bracket-150",
    system: "150/100",
    range: "Glossy",
    description: "Union bracket for joining two lengths of 150mm half round gutter. Provides structural support and a watertight connection.",
    features: ["For 150mm gutters", "Joins gutter lengths", "Watertight seal", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £7.20",
    category: "Brackets & Fixings",
  },
  {
    id: "hr150-angle-external",
    name: "External Angle 150mm",
    slug: "external-angle-150",
    system: "150/100",
    range: "Glossy",
    description: "90° external angle piece for the 150mm half round gutter system. Allows gutter runs to turn external corners.",
    features: ["90° angle", "For 150mm gutters", "External corners", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £17.50",
    category: "Angles",
  },
  {
    id: "hr150-angle-internal",
    name: "Internal Angle 150mm",
    slug: "internal-angle-150",
    system: "150/100",
    range: "Glossy",
    description: "90° internal angle piece for the 150mm half round gutter system. Allows gutter runs to turn internal corners.",
    features: ["90° angle", "For 150mm gutters", "Internal corners", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £17.50",
    category: "Angles",
  },
  {
    id: "hr150-downpipe-bracket",
    name: "Downpipe Bracket 100mm",
    slug: "downpipe-bracket-100",
    system: "150/100",
    range: "Glossy",
    description: "Wall-mounted bracket for securing the 100mm downpipe. Adjustable standoff for different wall types.",
    features: ["For 100mm downpipes", "Wall-mounted", "Adjustable standoff", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £3.20",
    category: "Brackets & Fixings",
  },
  {
    id: "hr150-downpipe-shoe",
    name: "Downpipe Shoe 100mm",
    slug: "downpipe-shoe-100",
    system: "150/100",
    range: "Glossy",
    description: "Shoe/swan neck base for the 100mm downpipe. Directs water away from the wall at the base of the downpipe.",
    features: ["For 100mm downpipes", "Directs water away from wall", "Steel construction", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £7.80",
    category: "Downpipes",
  },
  {
    id: "hr150-offset-bend",
    name: "Offset Bend 100mm",
    slug: "offset-bend-100",
    system: "150/100",
    range: "Glossy",
    description: "Offset bend for the 100mm downpipe system. Used to navigate from the gutter outlet to the wall face.",
    features: ["For 100mm downpipes", "112.5° angle", "Steel construction", "Colour matched"],
    image: driveImage(PLACEHOLDER_ID),
    price: "From £7.20",
    category: "Downpipes",
  },
];

export const allProducts: Product[] = [...halfRound125Products, ...halfRound150Products];

export function getProductsBySystem(system: "125/90" | "150/100"): Product[] {
  return allProducts.filter((p) => p.system === system);
}

export function getProductBySlug(slug: string, system: "125/90" | "150/100"): Product | undefined {
  return allProducts.find((p) => p.slug === slug && p.system === system);
}

export function getProductCategories(system: "125/90" | "150/100"): string[] {
  const products = getProductsBySystem(system);
  return [...new Set(products.map((p) => p.category))];
}
