interface Product {
    id: number
    images: Array<string>
    description: string
    title: string
    price: string
    oldPrice?: string
    createAt: string
}

interface Products {
    items: Array<Product>
}

interface ProductQuery {
  item: Product
}

export type {
  ProductQuery,
  Products,
  Product,
};
