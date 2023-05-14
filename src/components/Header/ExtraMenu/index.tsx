import { Box, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRef, useState } from 'react';

const styles = {
  button: {
    display: 'flex',
    cursor: 'pointer',
  },
};

function ExtraMenu() {
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
        sx={styles.button}
        ref={ref}
      >
        Еще
        <ExpandMoreIcon
          sx={{
            transform: isOpen
              ? 'rotate(180deg)'
              : 'none',
          }}
        />
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
