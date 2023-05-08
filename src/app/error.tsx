'use client';

import { Button } from '@mui/material';
import { useEffect } from 'react';

interface IError {
  error: Record<string, unknown>,
  reset: () => void
}

function Error({ error, reset }: IError) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('logging error:', error);
  }, [error]);

  return (
    <>
      <strong>Ошибка:</strong>

      {error?.message}

      <Button onClick={() => reset()}>
        Попробовать снова
      </Button>
    </>
  );
}
export default Error;
