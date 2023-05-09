/* eslint-disable react/no-array-index-key */
import { useGetProductsQuery } from '#/src/services/api';
import { Grid, Skeleton } from '@mui/material';
import Product from '#/src/components/Product';

function List() {
  const { isLoading, data } = useGetProductsQuery(null);
  const { items = [] } = data || {};

  const skeleton = new Array(3).fill(0);

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {skeleton.map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={340}
              sx={{ borderRadius: 6 }}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!items.length) {
    return <div>Нет добавленных товаров</div>;
  }

  return (
    <Grid container spacing={2}>
      {items.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default List;
