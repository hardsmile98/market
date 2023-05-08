import { useGetProductQuery } from '#/src/services/api';
import { Box, Skeleton } from '@mui/material';
import Info from './Info';
import Slider from './Slider';
import styles from './styles';

interface IProps {
    id?: string
}

function Detail({ id }: IProps) {
  const { data, isLoading } = useGetProductQuery({ id: String(id) });
  const { item } = data || {};

  if (isLoading) {
    return (
      <Box sx={styles.skeletonRoot}>
        <Box
          sx={{
            height: [240, 400],
            ...styles.slider,
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ borderRadius: 6 }}
          />
        </Box>

        <Box
          sx={{
            ...styles.info,
            height: 400,
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ borderRadius: 6 }}
          />
        </Box>
      </Box>
    );
  }

  if (!item || !Number.isInteger(Number(id))) {
    return <div>Такого товара не существует</div>;
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.slider}>
        <Slider images={item.images} />
      </Box>

      <Box sx={styles.info}>
        <Info info={item} />
      </Box>
    </Box>
  );
}

export default Detail;
