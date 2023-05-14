import { Modal } from '#/src/components';
import { useUpdateOrderMutation } from '#/src/services/api';
import { Order } from '#/src/types';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import {
  FormEvent,
  useEffect,
  useState,
} from 'react';

const statusOptions = [
  {
    title: 'Ожидает оплаты',
    value: 'await',
  },
  {
    title: 'Заказ оплачен',
    value: 'paid',
  },
  {
    title: 'Заказ отменен',
    value: 'cancel',
  },
];

interface IProps {
   order: Order
   onClose: () => void
   open: boolean
}

function Edit({ order, onClose, open }: IProps) {
  const [stateOrder, setStateOrder] = useState(order);

  const [updateOrder, {
    isLoading,
    isSuccess,
    isError,
  }] = useUpdateOrderMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [onClose, isSuccess]);

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setStateOrder({ ...stateOrder, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateOrder({
      uuid: stateOrder.uuid,
      status: stateOrder.status,
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Box mb={1}>
          Редактирование заказа
        </Box>

        <Box mb={1}>
          <Box mb={0.5}>
            Статус заказа
          </Box>

          <Select
            fullWidth
            value={stateOrder.status}
            onChange={handleSelectChange}
            name="status"
          >
            {statusOptions.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.title}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <LoadingButton
          fullWidth
          loading={isLoading}
          type="submit"
        >
          Сохранить
        </LoadingButton>

        {isError && (
          <Box sx={{
            textAlign: 'center',
            color: 'error.main',
            mt: 1,
          }}
          >
            Произошла ошибка
          </Box>
        )}
      </Box>
    </Modal>
  );
}

export default Edit;
