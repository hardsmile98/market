import { useMediaQuery } from '@mui/material';
import theme from '../theme';

const useIsMobile = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile;
};

export default useIsMobile;
