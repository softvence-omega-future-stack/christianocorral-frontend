import CategoryHeader from "@/components/product/CategoryHeader";
import ModelCard from "@/components/productDetails/ModelCard";
import QuestionFlow from "@/components/productDetails/QuestionFlow";
import { products, Product } from "@/lib/data/products";
import FAQComponent from "@/components/faq/FAQComponent";
import Wrapper from "@/components/layout/Wrapper";

type Props = { params: Promise<{ category: string; product: string }> };

export default async function ProductPage({ params }: Props) {
  const { category, product: productId } = await params;
  const lowerCategory = category.toLowerCase();
  const lowerProductId = productId.toLowerCase();

  const categoryProducts: Product[] = products[lowerCategory] || [];
  const product = categoryProducts.find((p) => p.id === lowerProductId);

  if (!product) {
    return (
      <div>
        <div className="mt-20 text-center text-gray-500">
          <h2 className="text-2xl font-semibold">Product not found</h2>
        </div>
      </div>
    );
  }

  const categoryName = (product.category ?? "").toUpperCase();

  return (
    <div>

      <Wrapper>
        <div className="mt-20 py-10">
        <CategoryHeader
          title={`Sell your ${product.name}`}
        />

        <ModelCard product={product} />
        <QuestionFlow product={product} />
      </div>
      </Wrapper>
      <FAQComponent brand={lowerCategory} title={`${categoryName} FAQs`} />

    </div>
  );
}
