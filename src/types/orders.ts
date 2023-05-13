interface CreateOrderDto {
    paymentId: number
    productId: number
    count: number
}

type Status = 'paid' | 'await';

interface CreatingOrder {
  count: number
  createdAt: string
  updatedAt: string
  paymentId: number
  productId: number
  status: Status
  total: number
  userId: null | number
  uuid: string
}

export type {
  CreateOrderDto,
  CreatingOrder,
};
