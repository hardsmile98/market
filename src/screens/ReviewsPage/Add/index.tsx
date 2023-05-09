import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import {
  Box, TextField,
} from '@mui/material';
import { Modal } from '#/src/components';
import { useAddReviewMutation } from '#/src/services/api';
import styles from './styles';

  interface IProps {
      onClose: () => void
      open: boolean
  }

function Add({ open, onClose }: IProps) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const isDisabled = !name.length || !type.length || !description.length;

  const [addReview, {
    isLoading,
    isSuccess,
    isError,
  }] = useAddReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [onClose, isSuccess]);

  const handleAddReview = () => addReview({ name, type, description });

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              placeholder="Название товара"
              sx={styles.input}
              value={type}
              onChange={(e) => setType(e.target.value)}
            />

            <TextField
              placeholder="Отзыв"
              sx={styles.input}
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <LoadingButton
              onClick={handleAddReview}
              disabled={isDisabled}
              fullWidth
              loading={isLoading}
            >
              ОСТАВИТЬ ОТЗЫВ
            </LoadingButton>

            {isError && (
              <Box sx={styles.error}>
                Произошла ошибка! Попробуйте снова
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default Add;
