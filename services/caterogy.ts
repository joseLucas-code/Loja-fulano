import { productData } from './productData';

export function getCategoryByID(id: number) {
  return productData.categories.find((item) => item.id === id);
}

export function getAllCategories() {
  return productData.categories;
}
