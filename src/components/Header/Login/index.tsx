import {
  Box, TextField, Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../../Modal';
import styles from './styles';

interface IProps {
    onClose: () => void
    openRegister: () => void
    open: boolean
}

function Login({ open, onClose, openRegister }: IProps) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = !login.length || !password.length;

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Box py={2}>
        <Box sx={styles.head}>
          <Image
            priority
            src="/images/logo.svg"
            width="180"
            height="50"
            alt="shop"
          />

          <Typography
            variant="h6"
            mt={2}
          >
            Вход на сайт
          </Typography>
        </Box>

        <Box sx={styles.form}>
          <Box sx={styles.dataText}>
            Введите ваши данные:
          </Box>

          <Box component="form">
            <TextField
              placeholder="Логин"
              sx={styles.input}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />

            <TextField
              placeholder="Пароль"
              type="password"
              sx={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <LoadingButton
              disabled={isDisabled}
              fullWidth
            >
              АВТОРИЗОВАТЬСЯ
            </LoadingButton>
          </Box>
        </Box>

        <Box sx={styles.helpText}>
          <Box>
            Вы новый пользователь?
          </Box>
          <Box>
            {'Тогда '}
            <Box
              sx={styles.register}
              component="span"
              onClick={openRegister}
            >
              зарегистрируйтесь
            </Box>
            , чтобы войти на сайт
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default Login;
