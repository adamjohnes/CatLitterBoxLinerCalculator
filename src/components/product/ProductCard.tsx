import { products } from "../../data/products";
import type { ProductId } from "../../types/product";
import { ArrowUpRightIcon } from "../ui/ArrowUpRightIcon";

export function ProductCard({ productId }: { productId: ProductId }) {
  const product = products[productId];

  return (
    <article className="group flex min-h-96 flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
      <div className="relative flex min-h-56 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-stone-100 p-6">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 shadow-sm">
          {product.retailer}
        </span>

        <img
          src={product.image}
          alt={`${product.name} AlfaPet cat pan liner package`}
          className="relative z-0 h-48 w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-end justify-between gap-4 pt-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
            Cat pan liner
          </p>
          <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-emerald-950">
            {product.name}
          </h3>
        </div>
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Shop ${product.name} at ${product.retailer}`}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-emerald-950 text-white transition group-hover:bg-amber-500 group-hover:text-emerald-950"
        >
          <ArrowUpRightIcon className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
