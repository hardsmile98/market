import { Modal } from '#/src/components';
import { useCreateOrderMutation, useGetPaymentsQuery, useGetSettingsQuery } from '#/src/services/api';
import { Product } from '#/src/types';
import { LoadingButton } from '@mui/lab';
import {
  Box, Divider, MenuItem, Select, TextField,
} from '@mui/material';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import styles from './styles';

interface IProps {
  product: Product
  count: number
  open: boolean
  onClose: () => void
}

function CreateOrder({
  open,
  onClose,
  product,
  count,
}: IProps) {
  const router = useRouter();

  const [paymentId, setPaymentId] = useState<'' | number>('');

  const { data: { sign } = {} } = useGetSettingsQuery(null);
  const { data: payments = [] } = useGetPaymentsQuery(null);

  const [createOrder, {
    isLoading,
    isError,
    isSuccess,
    data,
  }] = useCreateOrderMutation();

  useEffect(() => {
    if (isSuccess && data) {
      const { uuid } = data;

      router.push(`/order/${uuid}`);
    }
  }, [router, data, isSuccess]);

  useEffect(() => {
    if (payments.length) {
      setPaymentId(payments[0].id);
    }
  }, [payments]);

  const total = count * Number(product.price);

  const hanldeSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!paymentId) {
      return;
    }

    createOrder({
      paymentId,
      count,
      productId: product.id,
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box component="form" onSubmit={hanldeSumbit}>
        <Box fontWeight="fontWeightBold">
          Подтверждение товара
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={styles.field}>
          <Box>
            Название товара
          </Box>

          <TextField
            value={product.title}
            sx={styles.input}
            fullWidth
            disabled
          />
        </Box>

        <Box sx={styles.field}>
          <Box>
            Количество
          </Box>

          <TextField
            value={count}
            sx={styles.input}
            fullWidth
            disabled
          />
        </Box>

        <Box sx={styles.field}>
          <Box>
            К оплате
          </Box>

          <TextField
            value={`${total} ${sign}`}
            sx={styles.input}
            fullWidth
            disabled
          />
        </Box>

        <Box sx={styles.field}>
          <Box>
            Способ оплаты
          </Box>

          <Select
            fullWidth
            value={paymentId}
            onChange={(e) => setPaymentId(Number(e.target.value))}
            sx={styles.input}
          >
            {payments.map((payment) => (
              <MenuItem
                key={payment.id}
                value={payment.id}
              >
                {payment.name}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Divider sx={{ my: 1 }} />

        <LoadingButton
          fullWidth
          loading={isLoading}
          type="submit"
        >
          Подтвердить
        </LoadingButton>

        {isError && (
          <Box sx={{
            mt: 1,
            textAlign: 'center',
            color: 'error.main',
          }}
          >
            Произошла ошибка
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default CreateOrder;
