import { useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";

import {
  calculateLinerFit,
  validateMeasurements,
} from "../../lib/catPanCalculator";
import type {
  FitResult,
  MeasurementKey,
  Measurements,
  ValidationError,
} from "../../lib/catPanCalculator";
import { CalculatorResult } from "./CalculatorResult";
import { MeasurementForm } from "./MeasurementForm";
import type { MeasurementValues } from "./MeasurementForm";

const emptyMeasurements: MeasurementValues = {
  length: "",
  width: "",
  front: "",
  back: "",
  left: "",
  right: "",
};

export function LinerCalculator() {
  const [values, setValues] = useState(emptyMeasurements);
  const [result, setResult] = useState<FitResult | null>(null);
  const [error, setError] = useState<ValidationError | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const parsed = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
          key,
          value.trim() === "" ? undefined : Number(value),
        ]),
      ) as Partial<Record<MeasurementKey, number>>,
    [values],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validateMeasurements(parsed);

    if (validationError) {
      setResult(null);
      setError(validationError);
      if (validationError.field) {
        document.getElementById(validationError.field)?.focus();
      }
      return;
    }

    setError(null);
    setResult(calculateLinerFit(parsed as Measurements));
    window.setTimeout(() => resultRef.current?.focus(), 0);
  }

  function handleChange(field: MeasurementKey, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (error?.field === field) setError(null);
  }

  function reset() {
    setValues(emptyMeasurements);
    setResult(null);
    setError(null);
    document.getElementById("length")?.focus();
  }

  return (
    <section
      id="calculator"
      className="scroll-mt-24 px-5 pb-20 sm:px-8 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl border border-stone-200 bg-white shadow-xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-w-0 overflow-hidden bg-emerald-950 px-6 py-9 text-white sm:px-10 sm:py-12 lg:p-12">
            <div className="absolute -right-20 -top-20 size-64 rounded-full border-8 border-amber-500/10" />
            <p className="relative text-xs font-bold uppercase tracking-widest text-amber-300">
              Step 1 · Measure
            </p>
            <h2 className="relative mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Six quick measurements.
            </h2>
            <p className="relative mt-4 max-w-md leading-7 text-white/70">
              Measure the litter box in inches. For the four walls, measure from
              the inside floor to the top edge.
            </p>
            <div className="relative mt-8 rounded-3xl bg-white p-2 shadow-2xl shadow-black/20 sm:p-3">
              <img
                src="/images/measure.png"
                alt="Diagram showing the six litter box measurements"
                className="block h-auto w-full rounded-2xl"
              />
            </div>
          </div>

          <div className="min-w-0 px-6 py-9 sm:px-10 sm:py-12 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Step 2 · Enter dimensions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">
              Find your liner size.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-stone-500">
              Decimals are welcome. Every field is required.
            </p>

            <MeasurementForm
              values={values}
              error={error}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onReset={reset}
            />
            {result && (
              <CalculatorResult result={result} resultRef={resultRef} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
