/* eslint-disable react/no-array-index-key */
import useIsMobile from '#/src/hooks/useIsMobile';
import { useGetProductsQuery } from '#/src/services/api';
import {
  Box,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import Carousel from 'nuka-carousel';
import Product from '../Product';

interface IProps {
    id?: string
}

function Recommends({ id }: IProps) {
  const isMobile = useIsMobile();

  const { data, isLoading } = useGetProductsQuery(null);
  const { items = [] } = data || {};

  const skeleton = new Array(3).fill(0);

  const filteredItems = id
    ? items.filter(item => item.id !== Number(id))
    : items;

  return (
    <>
      <Typography variant="h5">
        Другие товары магазина
      </Typography>

      <Box mt={2}>
        {isLoading
          ? (
            <Grid container spacing={2}>
              {skeleton.map((_, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={300}
                    sx={{ borderRadius: 6 }}
                  />
                </Grid>
              ))}
            </Grid>
          )
          : (
            <Carousel
              withoutControls
              slidesToShow={isMobile ? 1 : 3}
              cellSpacing={16}
              autoplay
              autoplayInterval={5000}
            >
              {filteredItems.map(product => (
                <Box key={product.id}>
                  <Product product={product} />
                </Box>
              ))}
            </Carousel>
          )}
      </Box>
    </>
  );
}

export default Recommends;
