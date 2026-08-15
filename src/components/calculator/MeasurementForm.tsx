import type { FormEventHandler } from "react";
import { measurementFields } from "../../data/measurementFields";
import type {
  MeasurementKey,
  ValidationError,
} from "../../lib/catPanCalculator";

export type MeasurementValues = Record<MeasurementKey, string>;

interface MeasurementFormProps {
  values: MeasurementValues;
  error: ValidationError | null;
  onChange: (field: MeasurementKey, value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onReset: () => void;
}

export function MeasurementForm({
  values,
  error,
  onChange,
  onSubmit,
  onReset,
}: MeasurementFormProps) {
  return (
    <form className="mt-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        {measurementFields.map((field) => (
          <label
            key={field.key}
            htmlFor={field.key}
            className="group rounded-2xl border border-stone-200 bg-stone-50 p-4 transition focus-within:border-amber-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-amber-500/10"
          >
            <span className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-emerald-950">
                {field.label}
              </span>
              <span className="text-xs text-stone-500">{field.helper}</span>
            </span>
            <span className="mt-3 flex items-center gap-2">
              <input
                id={field.key}
                type="number"
                inputMode="decimal"
                min="0"
                step="any"
                value={values[field.key]}
                aria-invalid={error?.field === field.key}
                aria-describedby={
                  error?.field === field.key ? "calculator-error" : undefined
                }
                onChange={(event) => onChange(field.key, event.target.value)}
                className="min-w-0 flex-1 border-0 bg-transparent text-2xl font-semibold text-emerald-950 outline-none placeholder:text-stone-300"
                placeholder="0"
              />
              <span className="rounded-full bg-stone-200 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-stone-600">
                in
              </span>
            </span>
          </label>
        ))}
      </div>

      {error && (
        <p
          id="calculator-error"
          role="alert"
          className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
        >
          {error.message}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg active:translate-y-0"
        >
          Find my fit
        </button>
        <button
          type="button"
          onClick={onReset}
          className="min-h-12 rounded-full border border-stone-300 px-6 py-3 font-semibold text-stone-600 transition hover:border-stone-400 hover:bg-stone-50"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
