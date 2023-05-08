import { Box } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

type CustomError = (FetchBaseQueryError | SerializedError) & {
  data: {
    message: string
  }
};

interface IError {
  error: FetchBaseQueryError | SerializedError
}

function Error({ error }: IError) {
  const { message } = (error as CustomError).data;

  return (
    <Box mt={1}>
      {message || 'Ошибка'}
    </Box>
  );
}

export default Error;
