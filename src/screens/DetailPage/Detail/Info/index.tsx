import { useGetSettingsQuery } from '#/src/services/api';
import { Product } from '#/src/types';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import styles from './styles';

interface IProps {
  info: Product,
}

function Info({ info }: IProps) {
  const { data } = useGetSettingsQuery(null);
  const { buttonText, currency } = data || {};

  const [count, setCount] = useState(1);

  const {
    title,
    price,
    oldPrice,
    description,
  } = info || {};

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    const formatteValue = Number(value);

    if (formatteValue >= 0) {
      setCount(formatteValue);
    }
  };

  return (
    <Box>
      <Typography
        variant="h5"
        gutterBottom
      >
        {title}
      </Typography>

      <Box sx={styles.priceWrap}>
        <Typography
          variant="h3"
          fontWeight="fontWeightBold"
        >
          {`${price} ${currency}`}
        </Typography>

        {oldPrice && (
        <Typography
          variant="h6"
          sx={styles.oldPrice}
        >
          {`${oldPrice} ${currency}`}
        </Typography>
        )}
      </Box>

      <Box mb={2}>
        <Box sx={styles.countText}>
          Количество:
        </Box>

        <TextField
          type="number"
          value={count}
          onChange={handleChange}
          sx={styles.input}
        />
      </Box>

      <Box mb={2}>
        <Button
          sx={styles.button}
          disabled={count < 1}
        >
          {buttonText || 'Купить'}
        </Button>
      </Box>

      {description && (
        <Box color="text.secondary">
            {description}
        </Box>
      )}
    </Box>
  );
}

export default Info;
