import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '#/src/store';
import { logout } from '#/src/store/slices/auth';
import styles from './styles';
import Search from './Seach';
import NoAuth from './NoAuth';
import ExtraMenu from './ExtraMenu';

function Header() {
  const dispatch = useDispatch();

  const { isAuth, role } = useSelector((state: RootState) => state.auth);

  const isAdmin = isAuth && role === 'ADMIN';

  const handleLogout = () => dispatch(logout());

  return (
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
              <ExtraMenu />
            </li>

            {isAdmin && (
              <li>
                <Link href="/admin/products">
                  В админку
                </Link>
              </li>
            )}

            {isAuth ? (
              <li>
                <Button onClick={handleLogout}>
                  Выход
                </Button>
              </li>
            ) : <NoAuth />}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
