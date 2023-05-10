import { useMediaQuery } from '@mui/material';
import { customTheme } from '../theme';

const useIsMobile = () => {
  const isMobile = useMediaQuery(customTheme(undefined).breakpoints.down('sm'));

  return isMobile;
};

export default useIsMobile;
