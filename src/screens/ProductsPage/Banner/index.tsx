import { useGetSettingsQuery } from '#/src/services/api';
import { Box } from '@mui/material';
import Image from 'next/image';

const styles = {
  root: {
    img: {
      width: '100%',
      height: '100%',
      borderRadius: 6,
    },
  },
};

function Banner() {
  const { data } = useGetSettingsQuery(null);

  return (
    <Box sx={styles.root}>
      <Image
        priority
        src={data?.bannerImg || '/images/banner.png'}
        width={1000}
        height={300}
        alt="banner"
      />
    </Box>
  );
}

export default Banner;
