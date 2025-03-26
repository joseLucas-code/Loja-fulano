import { productData } from './productData';

export function getAllProducts() {
  return productData.products;
}

export function getProductById(id: number) {
  return productData.products.find((product) => product.id === id);
}

export function getProductsByCategoryId(id: number) {
  return productData.products.filter((product) => product.idCategory === id);
}
