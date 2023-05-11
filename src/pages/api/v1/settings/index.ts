import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../data/getSettings.json';

const getSettings = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};

export default getSettings;
