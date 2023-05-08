import { Recommends, Back } from '#/src/components';
import { Box } from '@mui/material';
import Detail from '#/src/screens/Detail';
import { useRouter } from 'next/router';

function Page() {
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

export default Page;
