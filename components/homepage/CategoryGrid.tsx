// // components/homepage/CategoryGrid.tsx
// import Wrapper from "../layout/Wrapper";
// import Link from "next/link";
// import { categories } from "@/lib/data/categories";
// import Image from "next/image";

// export default function CategoryGrid() {
//   return (
//     <section className="py-16">
//       <Wrapper>
//         <h2 className="text-3xl font-bold text-center mb-12">Start Selling</h2>

//         {/* ---------- First 3 cards ---------- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           {categories.slice(0, 3).map((cat) => (
//             <CategoryCard key={cat.slug} cat={cat} />
//           ))}
//         </div>

//         {/* ---------- Last 2 cards – centered ---------- */}
//         {categories.length > 3 && (
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
//               {categories.slice(3, 5).map((cat) => (
//                 <CategoryCard key={cat.slug} cat={cat} />
//               ))}
//             </div>
//           </div>
//         )}
//       </Wrapper>
//     </section>
//   );
// }


// function CategoryCard({ cat }: { cat: { slug: string; name: string; image: string } }) {
//   return (
//     <Link
//       href={`/category/${cat.slug}`}
//       className="group flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-200"
//     >
//       {/* ----- Responsive square image ----- */}
//       <div className="flex justify-center items-center relative w-full aspect-square overflow-hidden">
//         <Image
//           src={cat.image}
//           alt={cat.name}
//           className="object-cover group-hover:scale-120 transition-transform duration-300"
//           height={240}
//           width={240}
//           priority={false}
//         />
//       </div>

//       {/* ----- Title ----- */}
//       <div className="py-4 px-2 text-center w-full">
//         <h3 className="text-lg font-medium text-gray-800 line-clamp-2">
//           {cat.name}
//         </h3>
//       </div>
//     </Link>
//   );
// }


// components/homepage/CategoryGrid.tsx
import Wrapper from "../layout/Wrapper";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import Image from "next/image";

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <Wrapper>
        <h2 className="text-3xl font-bold text-center mb-12">Start Selling</h2>

        {/* ---------- First 3 cards ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.slice(0, 3).map((cat) => (
            <CategoryCard key={cat.slug} cat={cat} />
          ))}
        </div>

        {/* ---------- Last 2 cards – centered ---------- */}
        {categories.length > 3 && (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
              {categories.slice(3, 5).map((cat) => (
                <CategoryCard key={cat.slug} cat={cat} />
              ))}
            </div>
          </div>
        )}
      </Wrapper>
    </section>
  );
}

function CategoryCard({ cat }: { cat: { slug: string; name: string; image: string } }) {
  return (
    <Link
      href={`/category/${cat.slug}`}
      className="group flex flex-col items-center justify-center rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-200"
    >
      {/* ----- Fixed-size square image (all cards same size) ----- */}
      <div className="flex items-center justify-center relative w-55 h-44 md:h-62 lg:h-70 mt-4">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      {/* ----- Title ----- */}
      <div className="py-4 px-2 text-center w-full">
        <h3 className="text-lg font-medium text-gray-800 line-clamp-2">
          {cat.name}
        </h3>
      </div>
    </Link>
  );
}