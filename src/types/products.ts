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
  price: string
  oldPrice?: string
}

interface Products {
    items: Array<Product>
}

interface ProductQuery {
  item: Product
}

export type {
  ProductDto,
  ProductQuery,
  Products,
  Product,
};
