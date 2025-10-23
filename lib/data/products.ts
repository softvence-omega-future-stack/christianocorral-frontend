// // lib/data/products.ts
// export type Product = {
//   id: number;
//   name: string;
//   category: string;
//   image: string;
// };

// export const products = {
//   iphone: [
//     {
//       id: "15-pro-max",
//       name: "iPhone 15 Pro Max",
//       image: "/products/download.jpeg",
//       category: "iphone",
//     },
//     {
//       id: "14-pro",
//       name: "iPhone 14 Pro",
//       image: "/products/download.jpeg",
//       category: "iphone",
//     },
//     {
//       id: "13",
//       name: "iPhone 13",
//       image: "/products/download.jpeg",
//       category: "iphone",
//     },
//   ],
//   macbook: [
//     {
//       id: "macbook-pro-m3",
//       name: "MacBook Pro M3",
//       image: "/products/download.jpeg",
//       category: "macbook",
//     },
//     {
//       id: "macbook-air-m2",
//       name: "MacBook Air M2",
//       image: "/products/download.jpeg",
//       category: "macbook",
//     },
//   ],
// };

export type Product = {
  id: string;
  name: string;
  image: string;
  category?: string;
  price?: number;
  brand?: string;
};

export const products: Record<string, Product[]> = {
  cellphone: [
    { id: "iphone-15-pro", name: "iPhone 15 Pro",category:"cellphone", image: "/products/download.jpeg", price: 1200, brand: "Apple" },
    { id: "iphone-14-pro", name: "iPhone 14 Pro", category:"cellphone", image: "/products/download.jpeg", price: 900, brand: "Apple" },
    { id: "galaxy-s23", name: "Galaxy S23", category:"cellphone", image: "/products/download.jpeg", price: 850, brand: "Samsung" },
    { id: "galaxy-s22", name: "Galaxy S22", category:"cellphone", image: "/products/download.jpeg", price: 750, brand: "Samsung" },
  ],
  iphone: [
    { id: "15-pro-max", name: "iPhone 15 Pro Max", image: "/products/download.jpeg", category: "iphone", price: 1099, brand: "Apple" },
    { id: "14-pro", name: "iPhone 14 Pro", image: "/products/download.jpeg", category: "iphone", price: 999, brand: "Apple" },
    { id: "13", name: "iPhone 13", image: "/products/download.jpeg", category: "iphone", price: 799, brand: "Apple" },
  ],
  macbook: [
    { id: "macbook-pro-m3", name: "MacBook Pro M3", image: "/products/download.jpeg", category: "macbook", price: 1999, brand: "Apple" },
    { id: "macbook-air-m2", name: "MacBook Air M2", image: "/products/download.jpeg", category: "macbook", price: 1299, brand: "Apple" },
  ],
  ipad: [
    { id: "ipad-pro-12-9", name: "iPad Pro 12.9\"", image: "/products/download.jpeg",category: "ipad", price: 1099, brand: "Apple" },
    { id: "ipad-air-5", name: "iPad Air 5", image: "/products/download.jpeg", category: "ipad", price: 599, brand: "Apple" },
  ],
  laptop: [
    { id: "dell-xps-13", name: "Dell XPS 13", image: "/products/download.jpeg", category: "laptop", price: 999, brand: "Dell" },
    { id: "hp-spectre-x360", name: "HP Spectre x360", image: "/products/download.jpeg", category: "laptop", price: 1199, brand: "HP" },
  ],
};
