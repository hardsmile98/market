import { Modal } from '#/src/components';
import { useChangePasswordMutation } from '#/src/services/api';
import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';

interface IProps {
    open: boolean
    onClose: () => void
}

function ChangePassword({ open, onClose }: IProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [changePassword, {
    isLoading,
    isSuccess,
    isError,
  }] = useChangePasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [onClose, isSuccess]);

  const isDisabled = !currentPassword.length || !newPassword.length;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changePassword({ currentPassword, newPassword });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Box mb={1}>
          Изменение пароля
        </Box>

        <TextField
          fullWidth
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Текущий пароль"
          size="small"
          sx={{ mb: 1 }}
        />

        <TextField
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Новый пароль"
          size="small"
          sx={{ mb: 1 }}
        />

        <LoadingButton
          fullWidth
          type="submit"
          loading={isLoading}
          disabled={isDisabled}
        >
          Изменить
        </LoadingButton>

        {isError && (
          <Box sx={{
            mt: 1,
            color: 'error.main',
            textAlign: 'center',
          }}
          >
            Произошла ошибка!
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default ChangePassword;
