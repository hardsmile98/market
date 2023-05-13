interface Payment {
    id: number
    name: string
    requisites: string
}

interface CreatePaymentDto {
    name: string
    requisites: string
}

export type {
  Payment,
  CreatePaymentDto,
};
