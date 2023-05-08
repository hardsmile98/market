import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../data/getReviews.json';

const getReviews = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};

export default getReviews;
