import type { Product, ProductId } from "../types/product";

export const products: Record<ProductId, Product> = {
  large: {
    name: "Large",
    retailer: "Amazon",
    image: "/images/large.png",
    href: "https://www.amazon.com/Alfapet-Disposable-12-count-Technology-Cleaners/dp/B084G86231/ref=sr_1_20?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609794179&sr=8-20",
  },
  "extra-giant": {
    name: "Extra-Giant",
    retailer: "Amazon",
    image: "/images/extra-giant.png",
    href: "https://www.amazon.com/Alfapet-Extra-giant-Elastic-Sta-put-Litter/dp/B016095M6G/ref=sr_1_15?dchild=1&keywords=cat+pan+liners+alfapet&qid=1610991048&sr=8-15",
  },
  "flat-bottom": {
    name: "Flat-Bottom",
    retailer: "Amazon",
    image: "/images/flat-bottom.png",
    href: "https://www.amazon.com/Alfapet-Drawstring-Disposal-Placement-Pan-Disposable/dp/B084G8GZHJ/ref=sr_1_25?dchild=1&keywords=alfapet+kitty+cat+elastic+litter+box+liners&qid=1611767423&sr=8-25",
  },
  "jumbo-amazon": {
    name: "Jumbo Sifting",
    retailer: "Amazon",
    image: "/images/jumbo.png",
    href: "https://www.amazon.com/Alfapet-Sta-Put-Elastic-Sifting-Litter/dp/B00U1O9BAA/ref=sr_1_10?dchild=1&keywords=alfapet+kitty+cat+elastic+litter+box+liners&qid=1611768287&sr=8-10",
  },
  "jumbo-walmart": {
    name: "Jumbo Sifting",
    retailer: "Walmart",
    image: "/images/walmart.jpg",
    href: "https://www.walmart.com/ip/Alfa-Pet-Sifting-Elastic-Cat-Pan-Liners/384544432",
  },
  "extra-giant-sifting": {
    name: "Extra-Giant Sifting",
    retailer: "Amazon",
    image: "/images/sifting.png",
    href: "https://www.amazon.com/Kitty-Cat-Alfa-Liners-Count/dp/B00IWUB36A/ref=sr_1_14?dchild=1&keywords=alfapet+kitty+cat+elastic+litter+box+liners&qid=1611768359&sr=8-14",
  },
  "super-jumbo": {
    name: "Super Jumbo",
    retailer: "Amazon",
    image: "/images/super-jumbo.png",
    href: "https://www.amazon.com/Alfapet-Disposable-Liners-5-Pack-Extra-Giant-Super-Jumbo/dp/B0898MMYXJ/ref=sr_1_18?dchild=1&keywords=alfapet+cat+pan+liners&qid=1609792159&sr=8-18",
  },
};

export const productIds = Object.keys(products) as ProductId[];
