import { LoadingButton } from '@mui/lab';
import QRCode from 'react-qr-code';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import {
  useCancelOrderMutation,
  useGetOrderQuery,
  useGetSettingsQuery,
} from '#/src/services/api';
import { useRouter } from 'next/router';
import { Status } from '#/src/types';
import styles from './styles';

const getStatusText = (status: Status | undefined) => {
  switch (status) {
    case 'await':
      return 'ожидает оплаты';
    case 'cancel':
      return 'заказ отменен';
    case 'paid':
      return 'заказ оплачен';
    default:
      return '';
  }
};

function OrderPage() {
  const { query } = useRouter();
  const { uuid } = query;

  const { data: { sign } = {} } = useGetSettingsQuery(null);
  const { data: { order } = {}, isError } = useGetOrderQuery({ uuid: String(uuid) });

  const {
    number,
    status,
    payment,
    product,
    total,
    createdAt,
  } = order || {};

  const { name, requisites } = payment || {};
  const { title } = product || {};

  const [cancelOrder, { isLoading }] = useCancelOrderMutation();

  if (isError) {
    return <div>Такого заказа не существует</div>;
  }

  return (
    <Box mb={5}>
      <Box>
        <Typography variant="h4" mb={1}>
          Заказ №
          {number}
        </Typography>

        <Typography variant="h5">
          {'Статус: '}
          {getStatusText(status)}
        </Typography>
      </Box>

      <Box sx={styles.order}>
        <Box sx={{
          ...styles.wrap,
          width: ['100%', '100%', '60%'],
        }}
        >
          <Typography
            mb={1}
            variant="h6"
          >
            Данные для оплаты
          </Typography>

          <Box>
            <Box sx={styles.label}>
              Способ оплаты
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value={name}
            />
          </Box>

          <Box>
            <Box sx={styles.label}>
              Кошелек для оплаты
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value={requisites}
            />
          </Box>

          <Box>
            <Box sx={styles.label}>
              Сумма для оплаты
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value={total}
            />
          </Box>

          {requisites && (
            <Box sx={styles.qr}>
              <QRCode value={requisites} />
            </Box>
          )}

          {status === 'await' && (
            <LoadingButton fullWidth>
              Я оплатил
            </LoadingButton>
          )}
        </Box>

        <Box sx={{
          ...styles.wrap,
          width: ['100%', '100%', '40%'],
        }}
        >
          <Typography
            mb={1}
            variant="h6"
          >
            Данные заказа
          </Typography>

          <Box>
            <Box sx={styles.label}>
              Название товара
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value={title}
            />
          </Box>

          <Box>
            <Box sx={styles.label}>
              Сумма
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value={`${total} ${sign}`}
            />
          </Box>

          <Box>
            <Box sx={styles.label}>
              Заказ создан
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value={createdAt}
            />
          </Box>

          <LoadingButton
            fullWidth
            loading={isLoading}
            disabled={status !== 'await'}
            onClick={() => cancelOrder({ uuid: String(uuid) })}
          >
            Отменить заказ
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderPage;
