import type {
  OrderDetail,
} from '#/src/types';
import moment from 'moment';

const tranformOrder = (response: OrderDetail): OrderDetail => ({
  order: {
    ...response?.order,
    createdAt: moment(response?.order?.createdAt).format('LLL'),
  },
});

export default tranformOrder;
