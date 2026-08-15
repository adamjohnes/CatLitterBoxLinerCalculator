export type MeasurementKey =
  | "length"
  | "width"
  | "front"
  | "back"
  | "left"
  | "right";

export type Measurements = Record<MeasurementKey, number>;

export type ProductId =
  | "large"
  | "extra-giant"
  | "flat-bottom"
  | "jumbo-amazon"
  | "jumbo-walmart"
  | "extra-giant-sifting"
  | "super-jumbo";

export type FitSize = "Large" | "Extra Giant or Jumbo" | "Super Jumbo";

export interface FitResult {
  size: FitSize;
  summary: string;
  productIds: ProductId[];
  requiredLength: number;
  requiredWidth: number;
}

export interface ValidationError {
  field?: MeasurementKey;
  message: string;
}

const labels: Record<MeasurementKey, string> = {
  length: "length",
  width: "width",
  front: "front height",
  back: "back height",
  left: "left height",
  right: "right height",
};

const sideLimits: Record<MeasurementKey, number> = {
  length: 27,
  width: 26,
  front: 13,
  back: 13,
  left: 13,
  right: 13,
};

export const measurementKeys = Object.keys(labels) as MeasurementKey[];

export function validateMeasurements(
  measurements: Partial<Record<MeasurementKey, number>>,
): ValidationError | null {
  for (const field of measurementKeys) {
    const value = measurements[field];

    if (value === undefined || !Number.isFinite(value) || value <= 0) {
      return {
        field,
        message: `Enter a positive number greater than zero for the ${labels[field]}.`,
      };
    }

    if (value > sideLimits[field]) {
      const subject =
        field === "length" || field === "width"
          ? `Your ${field}`
          : `Your ${field} side`;

      return {
        field,
        message: `${subject} is too large for any currently listed liner.`,
      };
    }
  }

  const requiredLength =
    measurements.length! + measurements.front! + measurements.back!;
  const requiredWidth =
    measurements.width! + measurements.left! + measurements.right!;

  if (requiredLength > 44 || requiredWidth > 42) {
    return {
      message:
        "At least one total liner dimension is too large for any currently listed liner.",
    };
  }

  return null;
}

export function calculateLinerFit(measurements: Measurements): FitResult {
  const requiredLength =
    measurements.length + measurements.front + measurements.back;
  const requiredWidth =
    measurements.width + measurements.left + measurements.right;

  if (requiredLength <= 31 && requiredWidth <= 34) {
    return {
      size: "Large",
      summary: "A Large liner gives your litter box the closest recommended fit.",
      productIds: ["large"],
      requiredLength,
      requiredWidth,
    };
  }

  if (requiredLength <= 38 && requiredWidth <= 36) {
    return {
      size: "Extra Giant or Jumbo",
      summary:
        "Choose from the Extra Giant, Jumbo, Flat-Bottom, or sifting options below.",
      productIds: [
        "extra-giant",
        "flat-bottom",
        "jumbo-amazon",
        "jumbo-walmart",
        "extra-giant-sifting",
      ],
      requiredLength,
      requiredWidth,
    };
  }

  return {
    size: "Super Jumbo",
    summary: "A Super Jumbo liner is the recommended fit for these measurements.",
    productIds: ["super-jumbo"],
    requiredLength,
    requiredWidth,
  };
}

