interface Review {
    id: number
    image: string
    description: string
    type: string
    createdAt: string
}

interface Reviews {
    items: Array<Review>
}

export type {
  Reviews,
  Review,
};
