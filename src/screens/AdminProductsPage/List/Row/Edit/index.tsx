import { Modal } from '#/src/components';
import { useUpdateProductMutation } from '#/src/services/api';
import { Product } from '#/src/types';
import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

interface IProps {
   product: Product
   onClose: () => void
   open: boolean
}

function Edit({ product, onClose, open }: IProps) {
  const [stateProduct, setStateProduct] = useState(product);

  const isDisabled = !stateProduct.description.length || !stateProduct.title.length
    || Number(stateProduct.price) <= 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStateProduct({ ...stateProduct, [e.target.name]: e.target.value });
  };

  const [update, {
    isLoading,
    isSuccess,
    isError,
  }] = useUpdateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [onClose, isSuccess]);

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box component="form">
        <Box mb={1}>
          Редактирование товара
        </Box>

        <TextField
          label="Название"
          name="title"
          value={stateProduct.title}
          onChange={handleChange}
          size="small"
          fullWidth
          sx={{ mb: 1.5 }}
        />

        <TextField
          label="Цена"
          name="price"
          value={stateProduct.price}
          onChange={handleChange}
          type="number"
          size="small"
          fullWidth
          sx={{ mb: 1.5 }}
        />

        <TextField
          label="Старая цена"
          name="oldPrice"
          type="number"
          value={stateProduct.oldPrice}
          onChange={handleChange}
          size="small"
          fullWidth
          sx={{ mb: 1.5 }}
        />

        <TextField
          label="Описание"
          name="description"
          value={stateProduct.description}
          onChange={handleChange}
          size="small"
          multiline
          minRows={2}
          fullWidth
          sx={{ mb: 1.5 }}
        />

        <LoadingButton
          fullWidth
          disabled={isDisabled}
          loading={isLoading}
          onClick={() => update({
            ...stateProduct,
            price: Number(stateProduct.price),
            oldPrice: Number(stateProduct.oldPrice) || undefined,
          })}
        >
          Сохранить
        </LoadingButton>

        {isError && (
          <Box sx={{
            textAlign: 'center',
            color: 'error.main',
            mt: 1,
          }}
          >
            Произошла ошибка
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default Edit;
