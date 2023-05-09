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

interface AddReviewDto {
  name: string
  type: string
  description: string
}

export type {
  Reviews,
  Review,
  AddReviewDto,
};
