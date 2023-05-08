import { Information, Recommends, Back } from '#/src/components';
import { Box } from '@mui/material';

interface IProps {
  params?: {
    id?: string;
  };
}

function Page({ params }: IProps) {
  const { id } = params || {};

  return (
    <>
      <Box mb={2}>
        <Back />
      </Box>

      <Box mb={5}>
        <Information id={id} />
      </Box>

      <Box mb={5}>
        <Recommends id={id} />
      </Box>
    </>
  );
}

export default Page;
