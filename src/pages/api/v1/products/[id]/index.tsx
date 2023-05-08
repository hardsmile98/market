import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/getProduct.json';

const getProduct = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};

export default getProduct;
