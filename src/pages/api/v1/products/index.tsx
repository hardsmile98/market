import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../data/getProducts.json';

const getProducts = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};

export default getProducts;
