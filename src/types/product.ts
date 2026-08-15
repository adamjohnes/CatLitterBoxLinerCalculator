export type ProductId =
  | "large"
  | "extra-giant"
  | "flat-bottom"
  | "jumbo-amazon"
  | "jumbo-walmart"
  | "extra-giant-sifting"
  | "super-jumbo";

export interface Product {
  name: string;
  retailer: string;
  image: string;
  href: string;
}
