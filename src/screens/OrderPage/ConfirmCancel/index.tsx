import { Modal } from '#/src/components';
import { useCancelOrderMutation } from '#/src/services/api';
import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

interface IProps {
  uuid: string
  open: boolean
  onClose: () => void
}

function ConfirmCancel({ uuid, open, onClose }: IProps) {
  const [cancelOrder, { isLoading, isSuccess }] = useCancelOrderMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [onClose, isSuccess]);

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box>
        <Typography variant="h6">
          Подтверждение действия
        </Typography>

        <Box
          mt={1}
          mb={2}
          color="text.secondary"
        >
          Вы действительно хотите отменить заказ?
        </Box>

        <LoadingButton
          onClick={() => cancelOrder({ uuid })}
          loading={isLoading}
          fullWidth
        >
          Подвердить
        </LoadingButton>
      </Box>
    </Modal>
  );
}

export default ConfirmCancel;
