import { CURRENCY_MAP } from '#/src/constants';
import type {
  Settings,
} from '#/src/types';

const transformSettings = (res: Settings) => ({
  ...res,
  sign: CURRENCY_MAP[res.currency],
});

export default transformSettings;
