import { useState } from 'react';
import { Box } from '@mui/material';
import { PersonOutlineOutlined as Icon } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles';
import Search from './Seach';
import Login from './Login';
import Register from './Register';

type Modal = 'register' | 'login';

function Header() {
  const [openModal, setOpenModal] = useState<null | Modal>(null);

  const handleClose = () => setOpenModal(null);

  return (
    <>
      <Box
        component="header"
        sx={styles.root}
      >
        <Box sx={styles.logo}>
          <Link href="/">
            <Image
              priority
              src="/images/logo.svg"
              width="200"
              height="60"
              alt="shop"
            />
          </Link>
        </Box>

        <Box sx={styles.left}>
          <Box sx={styles.search}>
            <Search />
          </Box>

          <Box sx={styles.menu}>
            <ul>
              <li>
                <Link href="/reviews">
                  Отзывы
                </Link>
              </li>
              <li>
                <Box
                  onClick={() => setOpenModal('register')}
                >
                  Регистрация
                </Box>
              </li>
              <li>
                <Box
                  onClick={() => setOpenModal('login')}
                  sx={styles.login}
                >
                  <Icon />
                  Вход
                </Box>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

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

export default Header;
