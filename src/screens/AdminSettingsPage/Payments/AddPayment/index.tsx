import { Modal } from '#/src/components';
import { useAddPaymentMutation } from '#/src/services/api';
import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';

interface IProps {
  open: boolean
  onClose: () => void
}

function AddPayment({ open, onClose }: IProps) {
  const [name, setName] = useState('');
  const [requisites, setRequisites] = useState('');

  const isDisabled = !name.length || !requisites.length;

  const [addPayment, {
    isLoading,
    isError,
    isSuccess,
  }] = useAddPaymentMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [onClose, isSuccess]);

  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPayment({ name, requisites });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box component="form" onSubmit={hanldeSubmit}>
        <Box mb={1}>
          Добавление способа оплаты
        </Box>

        <TextField
          fullWidth
          size="small"
          placeholder="Название способа"
          sx={{ mb: 1 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          fullWidth
          size="small"
          placeholder="Реквизиты"
          sx={{ mb: 1 }}
          value={requisites}
          onChange={(e) => setRequisites(e.target.value)}
        />

        <LoadingButton
          fullWidth
          loading={isLoading}
          disabled={isDisabled}
          type="submit"
        >
          Добавить
        </LoadingButton>

        {isError && (
          <Box sx={{
            mt: 1,
            textAlign: 'center',
            color: 'error.main',
          }}
          >
            Произошла ошибка
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default AddPayment;
