import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import {
  useAddReviewMutation,
} from '#/src/services/api';
import styles from './styles';

function Add() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const isDisabled = !name.length || !type.length || !description.length;

  const [addReview, {
    isLoading,
    isSuccess,
    isError,
  }] = useAddReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      setName('');
      setType('');
      setImage('');
      setDescription('');
    }
  }, [isSuccess]);

  return (
    <>
      <Typography variant="h5" mb={1}>
        Добавление отзыва
      </Typography>

      <Paper sx={styles.root}>
        <Box sx={styles.formRow}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Название товара"
            fullWidth
            sx={{ ...styles.input, mr: [0, 1] }}
          />

          <TextField
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Тип товара"
            fullWidth
            sx={styles.input}
          />
        </Box>

        <TextField
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Ссылка на изображение (аватарка)"
          fullWidth
          sx={styles.input}
        />

        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          placeholder="Отзыв"
          fullWidth
          sx={styles.input}
        />

        <LoadingButton
          fullWidth
          loading={isLoading}
          disabled={isDisabled}
          onClick={() => addReview({
            name,
            type,
            description,
            image,
          })}
        >
          Добавить отзыв
        </LoadingButton>

        {isError && (
          <Box sx={styles.error}>
            Произошла ошибка. Попробуйте позже
          </Box>
        )}
      </Paper>
    </>
  );
}

export default Add;
