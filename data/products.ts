export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specs: {
    material: string;
    capacity: string;
    care: string;
    origin: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const products: Product[] = [
  {
    id: "strictly-typed",
    name: "The Strictly Typed Mug",
    slug: "strictly-typed-mug",
    price: 24.99,
    description: "Strictly-typed coffee consumption. Ensures no runtime coffee spillages or type mismatches.",
    longDescription: "The Strictly Typed Mug is engineered for developers who refuse to compromise on type safety. Featuring a clean, compiler-blue handle and a robust matte finish, it enforces safe liquid handling patterns. Safe for any beverage, as long as it inherits from the Coffee base class.",
    image: "https://picsum.photos/seed/strictly-typed/600/600",
    features: [
      "No dynamic liquid allocation issues",
      "Type-safe handles to prevent thermal leaks",
      "Ergonomically sound grip architecture"
    ],
    specs: {
      material: "Premium Triple-Glazed Ceramic",
      capacity: "15 oz (440 ml)",
      care: "Dishwasher and Microwave safe (Compile-safe)",
      origin: "Crafted in Dev Sandbox"
    },
    seo: {
      title: "Strictly Typed Developer Mug | StackMug",
      description: "Buy the Strictly Typed Mug for type-safe coffee. Designed for software engineers, TypeScript fans, and strict compilers.",
      keywords: ["strictly typed", "typescript mug", "developer coffee mug", "coder mug", "programmer gifts"]
    }
  },
  {
    id: "git-push-force",
    name: "The 'git push --force' Vessel",
    slug: "git-push-force-vessel",
    price: 26.99,
    description: "For the brave who merge directly to production. Destructive yet undeniably efficient.",
    longDescription: "Sometimes, you just need to override the remote branch of your morning. The Git Push Force Mug features a warning-orange interior and a bold, declarative exterior. Warning: may cause unintended history rewrites in your team standups.",
    image: "https://picsum.photos/seed/git-force/600/600",
    features: [
      "High-impact resistant glaze for risky operations",
      "Vibrant orange warning accent inner-lining",
      "Forces a complete overwrite of tiredness"
    ],
    specs: {
      material: "High-Density Stoneware",
      capacity: "16 oz (470 ml)",
      care: "Hand wash recommended for long-lasting heat preservation",
      origin: "Engineered for Git Masters"
    },
    seo: {
      title: "Git Push Force Coffee Mug | StackMug",
      description: "The official git push --force coffee mug. Perfect gift for senior developers who override conflicts with absolute confidence.",
      keywords: ["git push force", "git mug", "developer humor mug", "funny programmer mug"]
    }
  },
  {
    id: "infinite-loop",
    name: "The Infinite Loop Espresso Set",
    slug: "infinite-loop-espresso",
    price: 19.99,
    description: "Double-walled glass with no exit condition. Sip, refill, repeat, infinite energy.",
    longDescription: "A sleek, double-walled borosilicate espresso set that holds your caffeine in suspension. Designed without an exit break statement, it ensures that your morning espresso remains hot while the outer glass stays cool. Maximum thermal efficiency, infinite loop safety.",
    image: "https://picsum.photos/seed/espresso/600/600",
    features: [
      "Thermal-isolated double wall borosilicate glass",
      "Suspended liquid visual effect",
      "Does not block or freeze the main thread"
    ],
    specs: {
      material: "Shatter-Resistant Borosilicate Glass",
      capacity: "5 oz (150 ml) per cup (Set of 2)",
      care: "Microwave safe, hand wash preferred",
      origin: "Designed in Switzerland"
    },
    seo: {
      title: "Infinite Loop Espresso Glass Set | StackMug",
      description: "Double-walled espresso glasses with a sleek, tech-inspired design. Keep your coffee hot without burning your fingers.",
      keywords: ["espresso glass", "double wall glass", "programmer coffee", "developer espresso", "tech mugs"]
    }
  },
  {
    id: "binary-overflow",
    name: "The Binary Overflow Stein",
    slug: "binary-overflow-stein",
    price: 29.99,
    description: "An extra-large mug wrapped in custom 1s and 0s. Will not trigger a buffer overflow.",
    longDescription: "For the backend engineers who think in low-level memory allocations. This oversized stein contains actual binary representations of the word 'COFFEE'. Its heavy-weight ceramic build ensures it won't crash when loaded with peak volumetric inputs.",
    image: "https://picsum.photos/seed/binary/600/600",
    features: [
      "Extra-large handle for extreme payload distribution",
      "Embossed binary texture for tactility",
      "Built-in buffer overflow protection"
    ],
    specs: {
      material: "Heavy-Cast Ceramic Stein",
      capacity: "20 oz (590 ml)",
      care: "Dishwasher safe",
      origin: "Assembled from Source"
    },
    seo: {
      title: "Binary Overflow Large Mug | StackMug",
      description: "An extra-large 20 oz programmer mug with binary detailing. Great for long coding sessions and debugging marathons.",
      keywords: ["binary mug", "oversized programmer mug", "large coffee mug", "backend developer gift"]
    }
  }
];
