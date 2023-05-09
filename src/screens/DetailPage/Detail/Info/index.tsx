import { Product } from '#/src/types';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import styles from './styles';

interface IProps {
  info: Product,
}

function Info({ info }: IProps) {
  const {
    title,
    price,
    oldPrice,
    description,
  } = info || {};

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
          {price}
        </Typography>

        {oldPrice && (
        <Typography
          variant="h6"
          sx={styles.oldPrice}
        >
          {oldPrice}
        </Typography>
        )}
      </Box>

      <Box mb={2}>
        <Box sx={styles.countText}>
          Количество:
        </Box>

        <TextField
          type="number"
          sx={styles.input}
        />
      </Box>

      <Box mb={2}>
        <Button sx={styles.button}>
         КУПИТЬ
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
