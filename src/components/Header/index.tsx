import { Box } from '@mui/material';
import { PersonOutlineOutlined as Icon } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles';
import Search from './Seach';

function Header() {
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
              <div>
                Регистрация
              </div>
            </li>
            <li>
              <Box sx={styles.login}>
                <Icon />
                Вход
              </Box>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
