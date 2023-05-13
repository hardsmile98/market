import { useGetSettingsQuery } from '#/src/services/api';
import { Product as IPropduct } from '#/src/types';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import Link from 'next/link';
import styles from './styles';

interface IProps {
  product: IPropduct
}

function Product({ product } : IProps) {
  const {
    id,
    images,
    title,
    price,
  } = product || {};

  const { data } = useGetSettingsQuery(null);

  const { buttonText, sign } = data || {};

  return (
    <Card
      sx={styles.root}
      elevation={0}
      component={Link}
      href={`/${id}`}
      draggable={false}
    >
      <CardMedia
        sx={styles.image}
        image={images[0] || ''}
        title={title}
      />

      <CardContent sx={styles.content}>
        <Box mr={1}>
          {title}
        </Box>
        <Box sx={styles.price}>
          {`${price}${sign}`}
        </Box>
      </CardContent>

      <CardActions sx={styles.actions}>
        <Button
          fullWidth
          LinkComponent={Link}
          sx={styles.button}
        >
          {buttonText || 'Купить'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
