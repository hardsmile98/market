import type {
  Reviews,
} from '#/src/types';
import moment from 'moment';

const transformGetBranches = (response: Reviews) => ({
  items: response.items.map((item) => ({ ...item, createAt: moment(item.createAt).format('LLL') })),
});

export default transformGetBranches;
