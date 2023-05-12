import { Currency } from './settings';

interface Product {
    id: number
    images: Array<string>
    description: string
    title: string
    price: string
    oldPrice?: string
    createAt: string
}

interface ProductDto {
  images: Array<string>
  description: string
  title: string
  price: number
  oldPrice?: number
}

interface Products {
  items: Array<Product>
  currency: Currency
}

interface ProductQuery {
  item: Product
  currency: Currency
}

export type {
  ProductDto,
  ProductQuery,
  Products,
  Product,
};
