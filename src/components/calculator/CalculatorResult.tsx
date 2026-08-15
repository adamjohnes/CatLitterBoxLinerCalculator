import type { RefObject } from "react";
import { products } from "../../data/products";
import type { FitResult } from "../../lib/catPanCalculator";
import { ArrowUpRightIcon } from "../ui/ArrowUpRightIcon";

interface CalculatorResultProps {
  result: FitResult;
  resultRef: RefObject<HTMLDivElement | null>;
}

export function CalculatorResult({
  result,
  resultRef,
}: CalculatorResultProps) {
  return (
    <div
      ref={resultRef}
      tabIndex={-1}
      aria-live="polite"
      className="animate-rise-in mt-8 min-w-0 max-w-full overflow-hidden rounded-3xl bg-emerald-50 p-6 outline-none sm:p-7"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Your best fit
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-emerald-950">
            {result.size}
          </h3>
          <p className="mt-2 max-w-xl leading-7 text-stone-600">
            {result.summary}
          </p>
        </div>
        <div className="shrink-0 rounded-2xl bg-white px-4 py-3 text-sm text-stone-500 shadow-sm">
          <span className="block text-xs font-bold uppercase tracking-wider text-amber-700">
            Liner span needed
          </span>
          <strong className="mt-1 block whitespace-nowrap text-lg text-emerald-950">
            {result.requiredLength} × {result.requiredWidth} in
          </strong>
        </div>
      </div>
      <div
        aria-label="Recommended liner products"
        className="mt-5 flex w-full min-w-0 gap-3 overflow-x-auto pb-2"
      >
        {result.productIds.map((productId) => {
          const product = products[productId];

          return (
            <a
              key={productId}
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="group flex w-56 shrink-0 items-center gap-3 rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <img
                src={product.image}
                alt=""
                className="h-16 w-12 object-contain"
              />
              <span className="min-w-0 flex-1">
                <strong className="block text-sm text-emerald-950">
                  {product.name}
                </strong>
                <span className="mt-1 block text-xs font-semibold text-amber-700">
                  Shop {product.retailer}
                </span>
              </span>
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-emerald-950 transition group-hover:bg-amber-500">
                <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
