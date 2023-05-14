import { Payment } from './payments';
import { Product } from './products';

interface CreateOrderDto {
    paymentId: number
    productId: number
    count: number
}

type Status = 'paid' | 'await' | 'cancel';

interface UpdateOrderDto {
  uuid: string
  status: Status
}

interface CreatingOrder {
  number: number
  uuid: string
  count: number
  createdAt: string
  updatedAt: string
  paymentId: number
  productId: number
  status: Status
  total: number
  userId: null | number
}

interface Order extends CreatingOrder {
  payment: Payment
  product: Product
}

interface OrderDetail {
  order: Order
}

interface Orders {
  orders: Array<Order>
}

export type {
  CreateOrderDto,
  UpdateOrderDto,
  CreatingOrder,
  OrderDetail,
  Orders,
  Order,
  Status,
};
