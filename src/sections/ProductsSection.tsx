import { ProductCard } from "../components/product/ProductCard";
import { productIds } from "../data/products";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="scroll-mt-6 px-5 py-8 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Shop For AlfaPet liners
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tighter text-emerald-950 sm:text-5xl">
              Find the liner that fits your cats' needs
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productIds.map((productId) => (
            <ProductCard key={productId} productId={productId} />
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-stone-500">
          Retailer links and availability may change. Each link opens the product
          listing supplied by the original calculator.
        </p>
      </div>
    </section>
  );
}
