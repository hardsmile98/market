import { Back } from '#/src/components';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import Recommends from './Recommends';
import Detail from './Detail';

function DetailPage() {
  const { query } = useRouter();
  const { id } = query;

  const formattedID = String(id);

  return (
    <>
      <Box mb={2}>
        <Back />
      </Box>

      <Box mb={5}>
        <Detail id={formattedID} />
      </Box>

      <Box mb={5}>
        <Recommends id={formattedID} />
      </Box>
    </>
  );
}

export default DetailPage;
