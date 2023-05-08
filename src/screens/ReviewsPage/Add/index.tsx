import {
  Box, Button, TextField,
} from '@mui/material';
import { Modal } from '#/src/components';
import styles from './styles';

  interface IProps {
      onClose: () => void
      open: boolean
  }

function Add({ open, onClose }: IProps) {
  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Box py={2}>
        <Box sx={styles.form}>
          <Box sx={styles.dataText}>
            Введите ваши данные:
          </Box>

          <Box component="form">
            <TextField
              placeholder="Ваше имя"
              sx={styles.input}
            />

            <TextField
              placeholder="Название товара"
              sx={styles.input}
            />

            <TextField
              placeholder="Отзыв"
              sx={styles.input}
              multiline
            />

            <Button fullWidth>
              ОСТАВИТЬ ОТЗЫВ
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default Add;
