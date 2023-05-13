import { LoadingButton } from '@mui/lab';
import QRCode from 'react-qr-code';
import {
  Box,
  TextField,
  Typography,
} from '@mui/material';
import styles from './styles';

function OrderPage() {
  return (
    <Box mb={5}>
      <Box>
        <Typography variant="h4" mb={1}>
          Заказ №23
        </Typography>

        <Typography variant="h5">
          Статус:  ожидает оплаты
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
              Кошелек для оплаты
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value="2202 2064 1791 1588"
            />
          </Box>

          <Box>
            <Box sx={styles.label}>
              Сумма для оплаты
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value="400"
            />
          </Box>

          <Box sx={styles.qr}>
            <QRCode value="2131231" />
          </Box>

          <LoadingButton fullWidth>
            Я оплатил
          </LoadingButton>
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
              value="product 1"
            />
          </Box>

          <Box>
            <Box sx={styles.label}>
              Сумма
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value="100 $"
            />
          </Box>

          <Box>
            <Box sx={styles.label}>
              Заказ создан
            </Box>
            <TextField
              sx={styles.input}
              disabled
              value="13 мая 2023 г., 18:01"
            />
          </Box>

          <LoadingButton fullWidth>
            Отменить заказ
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderPage;
