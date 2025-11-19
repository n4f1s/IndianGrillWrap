import { MENU_CATEGORIES } from "@/lib/menuCategories";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";

// Pre-generate static paths for each category
export function generateStaticParams() {
  return MENU_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

type Props = {
  params: { slug: string };
};


export default async function CategoryPage(props: Props) {
  const { slug } = await props.params;
  const category = MENU_CATEGORIES.find((c) => c.slug === slug);

  if (!category) notFound();

  return (
    <main className="w-full h-full">
      <div className="wrapper max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-center">{category.label}</h1>
          {category.description && (
            <p className="text-base text-gray-700 mt-2 text-center">{category.description}</p>
          )}
          {/* {category.image && (
            <div className="mx-auto mt-6 max-w-xl rounded-xl overflow-hidden bg-neutral-100">
              <Image
                src={category.image}
                alt={category.label}
                width={800}
                height={300}
                className="object-cover w-full h-56"
              />
            </div>
          )} */}
        </div>

        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {category.productCards && category.productCards.length > 0 ? (
            category.productCards.map((item, i) => (
              <ProductCard
                key={i}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No menu items for this category yet.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
