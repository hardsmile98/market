/* eslint-disable react/no-array-index-key */
import useIsMobile from '#/src/hooks/useIsMobile';
import { useGetProductsQuery } from '#/src/services/api';
import {
  Box,
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

  const filteredItems = id
    ? items.filter((item) => item.id !== Number(id))
    : items;

  return (
    <>
      <Typography variant="h5">
        Другие товары магазина
      </Typography>

      <Box mt={2}>
        {isLoading
          ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={300}
              sx={{ borderRadius: 6 }}
            />
          )
          : (
            <Carousel
              withoutControls
              slidesToShow={isMobile ? 1 : 3}
              cellSpacing={16}
              autoplay
              autoplayInterval={5000}
            >
              {filteredItems.map((product) => (
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
