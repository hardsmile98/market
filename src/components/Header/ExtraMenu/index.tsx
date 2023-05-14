import { Box, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import { useRef, useState } from 'react';
import useIsMobile from '#/src/hooks/useIsMobile';

const styles = {
  button: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
  },
};

function ExtraMenu() {
  const isMobile = useIsMobile();
  const router = useRouter();

  const ref = useRef(null);

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const handleClickItem = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        onClick={onOpen}
        onMouseOver={onOpen}
        onTouchEnd={onOpen}
        sx={styles.button}
        ref={ref}
      >
        Еще
        {isMobile
          ? (
            <ArrowForward
              sx={{
                fontSize: '0.8rem',
                ml: 0.5,
              }}
            />
          )
          : (
            <ExpandMoreIcon
              sx={{
                transform: isOpen
                  ? 'rotate(180deg)'
                  : 'none',
              }}
            />
          )}
      </Box>

      <Menu
        anchorEl={ref.current}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={() => handleClickItem('/')}>
          Предзаказ
        </MenuItem>

        <MenuItem onClick={() => handleClickItem('/')}>
          Контакты
        </MenuItem>
      </Menu>
    </>
  );
}

export default ExtraMenu;
