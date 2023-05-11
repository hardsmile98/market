import { FormEvent, useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import {
  Box, TextField, Typography,
} from '@mui/material';
import Image from 'next/image';
import {
  useRegisterMutation,
} from '#/src/services/api';
import { login as onLogin } from '#/src/store/slices/auth';
import { useDispatch } from 'react-redux';
import Modal from '../../../Modal';
import styles from './styles';

interface IProps {
    onClose: () => void
    openLogin: () => void
    open: boolean
}

function Register({ open, onClose, openLogin }: IProps) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isDisabled = !login.length || !password.length || password !== confirmPassword;

  const [register, {
    isLoading,
    isSuccess,
    isError,
    data,
  }] = useRegisterMutation();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(onLogin(data));
    }
  }, [dispatch, data, isSuccess]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({ login, password });
  };

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
            Регистрация на сайте
          </Typography>
        </Box>

        <Box sx={styles.form}>
          <Box sx={styles.dataText}>
            Введите ваши данные:
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
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

            <TextField
              placeholder="Пароль еще раз"
              type="password"
              sx={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <LoadingButton
              disabled={isDisabled}
              loading={isLoading}
              type="submit"
              fullWidth
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </LoadingButton>
          </Box>

          {isError && (
            <Box sx={styles.error}>
              Произошла ошибка. Попробуйте позже!
            </Box>
          )}
        </Box>

        <Box sx={styles.helpText}>
          <Box>
            У вас уже есть аккаунт?
          </Box>
          <Box>
            {'Тогда '}
            <Box
              sx={styles.register}
              component="span"
              onClick={openLogin}
            >
              авторизуйтесь
            </Box>
            , чтобы войти на сайт
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default Register;
