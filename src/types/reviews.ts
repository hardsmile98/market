interface Review {
    id: number
    image: string
    description: string
    type: string
    createAt: string
}

interface Reviews {
    items: Array<Review>
}

export type {
  Reviews,
  Review,
};
