import axios from "axios";
import type { productObject } from "@/types/product_Type";

const API_URL = "https://exclusive-products-api-production.up.railway.app";

export async function getHookProducts() {
  const response = await axios.get<productObject[]>(
    `${API_URL}/products?isHook=true`
  );
  return response.data.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    mainImgSRC: product.mainImgSRC,
  }));
}

export async function getAllProducts() {
  const response = await axios.get<productObject[]>(`${API_URL}/products`);
  return response.data;
}
