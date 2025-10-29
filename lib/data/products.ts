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
    { id: "galaxy-s23", name: "Galaxy S23", category: "cellphone", image: "/products/download.jpeg", price: 850, brand: "Samsung" },
    { id: "galaxy-s22", name: "Galaxy S22", category: "cellphone", image: "/products/download.jpeg", price: 750, brand: "Samsung" },
    { id: "galaxy-note-20", name: "Galaxy Note 20", category: "cellphone", image: "/products/download.jpeg", price: 799, brand: "Samsung" },
    { id: "galaxy-note-10", name: "Galaxy Note 10", category: "cellphone", image: "/products/download.jpeg", price: 699, brand: "Samsung" },
    { id: "pixel-8-pro", name: "Pixel 8 Pro", category: "cellphone", image: "/products/download.jpeg", price: 799, brand: "Google" },
    { id: "pixel-7", name: "Pixel 7", category: "cellphone", image: "/products/download.jpeg", price: 699, brand: "Google" },
    { id: "pixel-6a", name: "Pixel 6a", category: "cellphone", image: "/products/download.jpeg", price: 449, brand: "Google" },
    { id: "oneplus-12", name: "OnePlus 12", category: "cellphone", image: "/products/download.jpeg", price: 699, brand: "OnePlus" },
    { id: "oneplus-11", name: "OnePlus 11", category: "cellphone", image: "/products/download.jpeg", price: 649, brand: "OnePlus" },
    { id: "oppo-find-x6", name: "Oppo Find X6", category: "cellphone", image: "/products/download.jpeg", price: 599, brand: "Oppo" },
    { id: "oppo-reno-10", name: "Oppo Reno 10", category: "cellphone", image: "/products/download.jpeg", price: 499, brand: "Oppo" },
    { id: "nothing-phone-2", name: "Nothing Phone 2", category: "cellphone", image: "/products/download.jpeg", price: 449, brand: "Nothing" },
    { id: "nothing-phone-1", name: "Nothing Phone 1", category: "cellphone", image: "/products/download.jpeg", price: 399, brand: "Nothing" },
    { id: "huawei-p50-pro", name: "Huawei P50 Pro", category: "cellphone", image: "/products/download.jpeg", price: 699, brand: "Huawei" },
    { id: "huawei-mate-40", name: "Huawei Mate 40", category: "cellphone", image: "/products/download.jpeg", price: 599, brand: "Huawei" },
    { id: "vivo-x90", name: "Vivo X90", category: "cellphone", image: "/products/download.jpeg", price: 549, brand: "Vivo" },
    { id: "motorola-edge-40", name: "Motorola Edge 40", category: "cellphone", image: "/products/download.jpeg", price: 449, brand: "Motorola" },
    { id: "sony-xperia-1-vi", name: "Sony Xperia 1 VI", category: "cellphone", image: "/products/download.jpeg", price: 999, brand: "Sony" },
    { id: "asus-rog-phone-7", name: "ASUS ROG Phone 7", category: "cellphone", image: "/products/download.jpeg", price: 799, brand: "ASUS" },
    { id: "nokia-x20", name: "Nokia X20", category: "cellphone", image: "/products/download.jpeg", price: 399, brand: "Nokia" },
    { id: "tecno-camon-20", name: "Tecno Camon 20", category: "cellphone", image: "/products/download.jpeg", price: 299, brand: "Tecno" },
    { id: "htc-u20", name: "HTC U20", category: "cellphone", image: "/products/download.jpeg", price: 349, brand: "HTC" },
    { id: "microsoft-surface-duo-2", name: "Microsoft Surface Duo 2", category: "cellphone", image: "/products/download.jpeg", price: 999, brand: "Microsoft" },
    { id: "lg-wing", name: "LG Wing", category: "cellphone", image: "/products/download.jpeg", price: 499, brand: "LG" },
    { id: "zte-axon-40", name: "ZTE Axon 40", category: "cellphone", image: "/products/download.jpeg", price: 399, brand: "ZTE" }
  ],

  // -------------------- iPhones --------------------
  iphone: [
    { id: "iphone-5", name: "iPhone 5", category: "iphone", image: "/products/download.jpeg", price: 199, brand: "Apple" },
    { id: "iphone-5s", name: "iPhone 5S", category: "iphone", image: "/products/download.jpeg", price: 249, brand: "Apple" },
    { id: "iphone-6", name: "iPhone 6", category: "iphone", image: "/products/download.jpeg", price: 299, brand: "Apple" },
    { id: "iphone-6-plus", name: "iPhone 6 Plus", category: "iphone", image: "/products/download.jpeg", price: 349, brand: "Apple" },
    { id: "iphone-6s", name: "iPhone 6S", category: "iphone", image: "/products/download.jpeg", price: 399, brand: "Apple" },
    { id: "iphone-6s-plus", name: "iPhone 6S Plus", category: "iphone", image: "/products/download.jpeg", price: 449, brand: "Apple" },
    { id: "iphone-7", name: "iPhone 7", category: "iphone", image: "/products/download.jpeg", price: 499, brand: "Apple" },
    { id: "iphone-7-plus", name: "iPhone 7 Plus", category: "iphone", image: "/products/download.jpeg", price: 549, brand: "Apple" },
    { id: "iphone-8", name: "iPhone 8", category: "iphone", image: "/products/download.jpeg", price: 599, brand: "Apple" },
    { id: "iphone-8-plus", name: "iPhone 8 Plus", category: "iphone", image: "/products/download.jpeg", price: 649, brand: "Apple" },
    { id: "iphone-x", name: "iPhone X", category: "iphone", image: "/products/download.jpeg", price: 699, brand: "Apple" },
    { id: "iphone-xs", name: "iPhone XS", category: "iphone", image: "/products/download.jpeg", price: 799, brand: "Apple" },
    { id: "iphone-xs-max", name: "iPhone XS Max", category: "iphone", image: "/products/download.jpeg", price: 849, brand: "Apple" },
    { id: "iphone-xr", name: "iPhone XR", category: "iphone", image: "/products/download.jpeg", price: 749, brand: "Apple" },
    { id: "iphone-11", name: "iPhone 11", category: "iphone", image: "/products/download.jpeg", price: 699, brand: "Apple" },
    { id: "iphone-11-pro", name: "iPhone 11 Pro", category: "iphone", image: "/products/download.jpeg", price: 999, brand: "Apple" },
    { id: "iphone-11-pro-max", name: "iPhone 11 Pro Max", category: "iphone", image: "/products/download.jpeg", price: 1099, brand: "Apple" },
    { id: "iphone-12", name: "iPhone 12", category: "iphone", image: "/products/download.jpeg", price: 799, brand: "Apple" },
    { id: "iphone-12-mini", name: "iPhone 12 Mini", category: "iphone", image: "/products/download.jpeg", price: 699, brand: "Apple" },
    { id: "iphone-12-pro", name: "iPhone 12 Pro", category: "iphone", image: "/products/download.jpeg", price: 999, brand: "Apple" },
    { id: "iphone-12-pro-max", name: "iPhone 12 Pro Max", category: "iphone", image: "/products/download.jpeg", price: 1099, brand: "Apple" },
    { id: "iphone-13", name: "iPhone 13", category: "iphone", image: "/products/download.jpeg", price: 799, brand: "Apple" },
    { id: "iphone-13-mini", name: "iPhone 13 Mini", category: "iphone", image: "/products/download.jpeg", price: 699, brand: "Apple" },
    { id: "iphone-13-pro", name: "iPhone 13 Pro", category: "iphone", image: "/products/download.jpeg", price: 999, brand: "Apple" },
    { id: "iphone-13-pro-max", name: "iPhone 13 Pro Max", category: "iphone", image: "/products/download.jpeg", price: 1099, brand: "Apple" },
    { id: "iphone-14", name: "iPhone 14", category: "iphone", image: "/products/download.jpeg", price: 799, brand: "Apple" },
    { id: "iphone-14-plus", name: "iPhone 14 Plus", category: "iphone", image: "/products/download.jpeg", price: 899, brand: "Apple" },
    { id: "iphone-14-pro", name: "iPhone 14 Pro", category: "iphone", image: "/products/download.jpeg", price: 999, brand: "Apple" },
    { id: "iphone-14-pro-max", name: "iPhone 14 Pro Max", category: "iphone", image: "/products/download.jpeg", price: 1099, brand: "Apple" },
    { id: "iphone-15", name: "iPhone 15", category: "iphone", image: "/products/download.jpeg", price: 899, brand: "Apple" },
    { id: "iphone-15-plus", name: "iPhone 15 Plus", category: "iphone", image: "/products/download.jpeg", price: 999, brand: "Apple" },
    { id: "iphone-15-pro", name: "iPhone 15 Pro", category: "iphone", image: "/products/download.jpeg", price: 1199, brand: "Apple" },
    { id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", category: "iphone", image: "/products/download.jpeg", price: 1299, brand: "Apple" },
    { id: "iphone-16", name: "iPhone 16", category: "iphone", image: "/products/download.jpeg", price: 999, brand: "Apple" },
    { id: "iphone-16-pro", name: "iPhone 16 Pro", category: "iphone", image: "/products/download.jpeg", price: 1299, brand: "Apple" },
    { id: "iphone-17", name: "iPhone 17", category: "iphone", image: "/products/download.jpeg", price: 1399, brand: "Apple" },
    { id: "iphone-17-pro", name: "iPhone 17 Pro", category: "iphone", image: "/products/download.jpeg", price: 1599, brand: "Apple" }
  ],

  // -------------------- MacBooks --------------------
  macbook: [
    { id: "macbook-air-2015", name: "MacBook Air 2015", category: "macbook", image: "/products/download.jpeg", price: 899, brand: "Apple" },
    { id: "macbook-air-2017", name: "MacBook Air 2017", category: "macbook", image: "/products/download.jpeg", price: 999, brand: "Apple" },
    { id: "macbook-air-m1", name: "MacBook Air M1", category: "macbook", image: "/products/download.jpeg", price: 1199, brand: "Apple" },
    { id: "macbook-air-m2", name: "MacBook Air M2", category: "macbook", image: "/products/download.jpeg", price: 1299, brand: "Apple" },
    { id: "macbook-pro-13-2015", name: "MacBook Pro 13\" 2015", category: "macbook", image: "/products/download.jpeg", price: 1099, brand: "Apple" },
    { id: "macbook-pro-13-2017", name: "MacBook Pro 13\" 2017", category: "macbook", image: "/products/download.jpeg", price: 1199, brand: "Apple" },
    { id: "macbook-pro-13-m1", name: "MacBook Pro 13\" M1", category: "macbook", image: "/products/download.jpeg", price: 1399, brand: "Apple" },
    { id: "macbook-pro-14-m2", name: "MacBook Pro 14\" M2", category: "macbook", image: "/products/download.jpeg", price: 1999, brand: "Apple" },
    { id: "macbook-pro-16-m2", name: "MacBook Pro 16\" M2", category: "macbook", image: "/products/download.jpeg", price: 2499, brand: "Apple" }
  ],

  // // -------------------- Laptops (Other brands) --------------------
  // laptop: [
  //   { id: "dell-xps-13", name: "Dell XPS 13", category: "laptop", image: "/products/download.jpeg", price: 1099, brand: "Dell" },
  //   { id: "dell-xps-15", name: "Dell XPS 15", category: "laptop", image: "/products/download.jpeg", price: 1299, brand: "Dell" },
  //   { id: "hp-spectre-x360", name: "HP Spectre x360", category: "laptop", image: "/products/download.jpeg", price: 1199, brand: "HP" },
  //   { id: "hp-envy-13", name: "HP Envy 13", category: "laptop", image: "/products/download.jpeg", price: 999, brand: "HP" },
  //   { id: "lenovo-yoga-9i", name: "Lenovo Yoga 9i", category: "laptop", image: "/products/download.jpeg", price: 1399, brand: "Lenovo" },
  //   { id: "lenovo-legion-5", name: "Lenovo Legion 5", category: "laptop", image: "/products/download.jpeg", price: 1299, brand: "Lenovo" },
  //   { id: "asus-rog-7", name: "ASUS ROG 7", category: "laptop", image: "/products/download.jpeg", price: 1499, brand: "ASUS" },
  //   { id: "acer-predator-15", name: "Acer Predator 15", category: "laptop", image: "/products/download.jpeg", price: 1399, brand: "Acer" }
  // ],

  // -------------------- iPads --------------------
  ipad: [
    { id: "ipad-pro-12-9", name: "iPad Pro 12.9\"", category: "ipad", image: "/products/download.jpeg", price: 1099, brand: "Apple" },
    { id: "ipad-pro-11", name: "iPad Pro 11\"", category: "ipad", image: "/products/download.jpeg", price: 799, brand: "Apple" },
    { id: "ipad-air-5", name: "iPad Air 5", category: "ipad", image: "/products/download.jpeg", price: 599, brand: "Apple" },
    { id: "ipad-mini-6", name: "iPad Mini 6", category: "ipad", image: "/products/download.jpeg", price: 499, brand: "Apple" }
  ],

  // -------------------- Apple Watches --------------------
  apple_watch: [
    { id: "apple-watch-series-7", name: "Apple Watch Series 7", category: "apple_watch", image: "/products/download.jpeg", price: 399, brand: "Apple" },
    { id: "apple-watch-series-8", name: "Apple Watch Series 8", category: "apple_watch", image: "/products/download.jpeg", price: 249, brand: "Apple" },
    { id: "apple-watch-ultra", name: "Apple Watch Ultra", category: "apple_watch", image: "/products/download.jpeg", price: 799, brand: "Apple" }
  ]
};
