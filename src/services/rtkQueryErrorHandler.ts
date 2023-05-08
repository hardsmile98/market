import {
  isRejectedWithValue,
  Middleware,
} from '@reduxjs/toolkit';

const rtkQueryErrorHandler: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // eslint-disable-next-line no-console
    console.warn('Ошибка выполнения запроса!, action:', action);
  }

  return next(action);
};

export default rtkQueryErrorHandler;
