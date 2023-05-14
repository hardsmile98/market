import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import {
  useAddProductMutation,
} from '#/src/services/api';
import styles from './styles';
import AddImages from './AddImages';

function Add() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [oldPrice, setOldPrice] = useState<number>(0);
  const [images, setImages] = useState<Array<string>>(['']);
  const [description, setDescription] = useState('');

  const [isOpenAddingImages, setOpenAddingImages] = useState(false);

  const handleCloseAddingImages = () => setOpenAddingImages(false);

  const isDisabled = !title.length || Number(price) <= 0
    || images.length === 0 || !description.length;

  const [addProduct, {
    isLoading,
    isError,
    isSuccess,
  }] = useAddProductMutation();

  useEffect(() => {
    if (isSuccess) {
      setTitle('');
      setPrice(0);
      setOldPrice(0);
      setImages(['']);
      setDescription('');
    }
  }, [isSuccess]);

  return (
    <>
      <Typography variant="h5" mb={1}>
        Добавление товара
      </Typography>

      <Paper sx={styles.root}>
        <Box sx={styles.formRow}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название товара"
            fullWidth
            sx={styles.input}
          />

          <Button
            sx={{
              ...styles.input,
              ml: [0, 1],
              flexShrink: 0,
            }}
            onClick={() => setOpenAddingImages(true)}
          >
            Добавить изображения
          </Button>
        </Box>

        <Box sx={styles.formRow}>
          <TextField
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Цена (например 30)"
            type="number"
            fullWidth
            sx={styles.input}
          />

          <TextField
            value={oldPrice}
            onChange={(e) => setOldPrice(Number(e.target.value))}
            placeholder="Старая цена (например 50)"
            type="number"
            fullWidth
            sx={{ ...styles.input, ml: [0, 1] }}
          />
        </Box>

        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание товара"
          fullWidth
          multiline
          sx={styles.input}
        />

        <LoadingButton
          fullWidth
          loading={isLoading}
          disabled={isDisabled}
          onClick={() => addProduct({
            title,
            price,
            oldPrice: oldPrice > 0
              ? oldPrice
              : undefined,
            description,
            images: images.filter((image) => !!image),
          })}
        >
          Добавить товар
        </LoadingButton>

        {isError && (
          <Box sx={styles.error}>
            Произошла ошибка. Попробуйте позже
          </Box>
        )}
      </Paper>

      {isOpenAddingImages && (
      <AddImages
        open={isOpenAddingImages}
        onClose={handleCloseAddingImages}
        images={images}
        setImages={setImages}
      />
      )}
    </>
  );
}

export default Add;
