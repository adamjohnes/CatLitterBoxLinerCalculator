import type { MeasurementKey } from "../lib/catPanCalculator";

export interface MeasurementField {
  key: MeasurementKey;
  label: string;
  helper: string;
}

export const measurementFields: MeasurementField[] = [
  { key: "length", label: "Length", helper: "Inside, front to back" },
  { key: "width", label: "Width", helper: "Inside, side to side" },
  { key: "front", label: "Front", helper: "Wall height" },
  { key: "back", label: "Back", helper: "Wall height" },
  { key: "left", label: "Left", helper: "Wall height" },
  { key: "right", label: "Right", helper: "Wall height" },
];
