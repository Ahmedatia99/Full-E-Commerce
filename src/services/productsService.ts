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

export async function getAllProducts(
  pageNumber: number = 1,
  pageSize: number = 22
) {
  const response = await axios.get<productObject[]>(
    `${API_URL}/products?pagenumber=${pageNumber}&pageSize=${pageSize}`
  );
  return response.data;
}
export async function getProductsByCategory(
  category: string,
  pageNumber: number = 1,
  pageSize: number = 24
) {
  const response = await axios.get<productObject[]>(
    `${API_URL}/products?category=${category}&pagenumber=${pageNumber}&pageSize=${pageSize}`
  );
  return response.data;
}

export async function getFlashSalesProducts(pageNumber = 1, pageSize = 12) {
  const response = await axios.get<productObject[]>(
    `${API_URL}/products?isflash=true&pagenumber=${pageNumber}&pageSize=${pageSize}`
  );
  return response.data;
}

export async function getFlashSalesSectionProducts() {
  const response = await axios.get<productObject[]>(
    `${API_URL}/products?isflash=true&pagesize=7&sort=random`
  );
  return response.data;
}
export async function getBestSellingSectionProducts() {
  const response = await axios.get<productObject[]>(
    `${API_URL}/products?pagesize=7&sort=ratingCount`
  );
  return response.data;
}

export async function getExploreOurProuctsSectionProducts() {
  const response = await axios.get<productObject[]>(
    `${API_URL}/products?pagesize=7&sort=random`
  );
  return response.data;
}
