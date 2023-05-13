import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles';

function AdminHeader() {
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

      <Box sx={styles.menu}>
        <ul>
          <li>
            <Link href="/admin/products">
              Товары
            </Link>
          </li>
          {/* <li>
            <Link href="/admin/orders">
              Заказы
            </Link>
          </li> */}
          <li>
            <Link href="/admin/reviews">
              Отзывы
            </Link>
          </li>
          <li>
            <Link href="/admin/settings">
              Настройки
            </Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default AdminHeader;
