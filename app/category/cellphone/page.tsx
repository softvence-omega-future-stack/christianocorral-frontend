// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import { products } from "@/lib/data/products";
// import Link from "next/link";

// export default function CellphoneCategoryPage() {
//   // Extract brands dynamically from cellphone products
//   const cellphoneProducts = products["cellphone"] || [];
//   const brands = Array.from(new Set(cellphoneProducts.map(p => p.brand))); // unique brands

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="mt-20 px-6 lg:px-20 py-10">
//         <h1 className="text-3xl font-bold mb-6">Select a Brand</h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {brands.map((brand) => (
//             <Link
//               key={brand}
//               href={`/cellphone/${brand}`} // brand page
//               className="p-4 border rounded-lg text-center hover:shadow-lg transition"
//             >
//               {brand}
//             </Link>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/lib/data/products";
import Link from "next/link";

export default function CellphoneCategoryPage() {
  // Extract brands from cellphone products
  const cellphoneProducts = products["cellphone"] || [];
  const brands = Array.from(
    new Set(
      cellphoneProducts
        .map((p) => p.brand)
        .filter((b): b is string => typeof b === "string" && b.length > 0)
    )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-20 px-6 lg:px-20 py-10">
        <h1 className="text-3xl font-bold mb-6">Select a Brand</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/category/cellphone/${brand.toLowerCase()}`}
              className="p-4 border rounded-lg text-center hover:shadow-lg transition"
            >
              {brand}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
