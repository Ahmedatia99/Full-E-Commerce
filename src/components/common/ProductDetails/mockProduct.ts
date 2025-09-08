// mockProducts.ts
export interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
  description: string;
  stock: number;
  rating: number;
  stars: number;
  colors: { name: string; value: string }[];
  sizes: string[];
  quantity: number;
  liked: boolean;
  delivery: boolean;
  returnDelivery: number;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Havic HV G-92 Gamepad",
    images: [
      "/assets/pDetails1.png",
      "/assets/pDetails2.png",
      "/assets/pDetails3.png",
      "/assets/pDetails4.png",
      "/assets/pDetails5.png",
      
    ],
    price: 192.0,
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive...",
    stock: 5,
    rating: 150,
    stars: 4.5,
    colors: [
      { name: "Blue", value: "#A0BCE0" },
      { name: "Red", value: "#E07575" },
      
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1,
    liked: false,
    delivery: false,
    returnDelivery: 15,
  },
  {
    id: "2",
    title: "Sony WH-1000XM4 Headphones",
    images: ["/assets/irelia.jpeg", "/assets/cat.jpg"],
    price: 349.99,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology.",
    stock: 1,
    rating: 420,
    stars: 4.8,
    colors: [
      { name: "Black", value: "#A0BCE0" },
      { name: "Silver", value: "#C0C0C0" },
      { name: "red", value: "#E07575" },
    ],
    sizes: ["XS", "S"],
    quantity: 1,
    liked: true,
    delivery: false,
    returnDelivery: 0,
  },
];
