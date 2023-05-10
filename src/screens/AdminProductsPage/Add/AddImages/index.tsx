/* eslint-disable react/no-array-index-key */
import { Modal } from '#/src/components';
import {
  Box, Button, IconButton, TextField, Typography,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import Delete from '@mui/icons-material/Delete';

interface IProps {
    images: Array<string>
    setImages: Dispatch<SetStateAction<string[]>>
    open: boolean
    onClose: () => void
}

function AddImages({
  images,
  setImages,
  open,
  onClose,
}: IProps) {
  const handleChange = (value: string, index: number) => {
    const copy = [...images];
    copy[index] = value;
    setImages(copy);
  };

  const handleAddImageField = () => setImages([...images, '']);
  const handleDeleteField = (index: number) => {
    if (images.length > 1) {
      setImages(images.filter((_, ind) => ind !== index));
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Typography
        fontWeight="fontWeightBold"
        gutterBottom
      >
        Добавление изображений товара
      </Typography>

      <Box>
        {images.map((image, index) => (
          <Box display="flex" alignItems="center" mb={1}>
            <TextField
              key={index}
              fullWidth
              placeholder="Ссылка на изображени"
              size="small"
              onChange={(e) => handleChange(e.target.value, index)}
              value={image}
            />

            <IconButton
              onClick={() => handleDeleteField(index)}
              sx={{ ml: 1 }}
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Button
        fullWidth
        sx={{ fontWeight: 'fontWeightBold' }}
        size="small"
        onClick={handleAddImageField}
      >
        +
      </Button>
    </Modal>
  );
}

export default AddImages;
