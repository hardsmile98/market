import { Box, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, MouseEvent } from 'react';

const styles = {
  button: {
    display: 'flex',
    cursor: 'pointer',
  },
};

function ExtraMenu() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickItem = (href: string) => {
    router.push(href);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        onClick={handleClick}
        onMouseOver={handleClick}
        sx={styles.button}
      >
        Еще
        <ExpandMoreIcon
          sx={{
            transform: open
              ? 'rotate(180deg)'
              : 'none',
          }}
        />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
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
