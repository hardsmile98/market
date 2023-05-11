import { useState } from 'react';
import { Box, Button } from '@mui/material';
import Icon from '@mui/icons-material/PersonOutlineOutlined';
import Register from './Register';
import Login from './Login';

type Modal = 'register' | 'login';

function NoAuth() {
  const [openModal, setOpenModal] = useState<null | Modal>(null);

  const handleClose = () => setOpenModal(null);

  return (
    <>
      <li>
        <Box
          onClick={() => setOpenModal('register')}
        >
          Регистрация
        </Box>
      </li>

      <li>
        <Button onClick={() => setOpenModal('login')}>
          <Icon sx={{ mr: 0.5 }} />
          Вход
        </Button>
      </li>

      {openModal === 'login' && (
        <Login
          onClose={handleClose}
          open={openModal === 'login'}
          openRegister={() => setOpenModal('register')}
        />
      )}

      {openModal === 'register' && (
        <Register
          onClose={handleClose}
          open={openModal === 'register'}
          openLogin={() => setOpenModal('login')}
        />
      )}
    </>
  );
}

export default NoAuth;
