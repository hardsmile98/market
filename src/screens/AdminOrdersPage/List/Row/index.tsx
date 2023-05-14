import { useState } from 'react';
import { useDeleteOrderMutation, useGetSettingsQuery } from '#/src/services/api';
import { Order, Status } from '#/src/types';
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  IconButton,
  TableCell,
  TableRow,
} from '@mui/material';
import Edit from './Edit';

const getStatusText = (status: Status | undefined) => {
  switch (status) {
    case 'await':
      return ' Ожидает оплаты';
    case 'cancel':
      return 'Заказ отменен';
    case 'paid':
      return 'Заказ оплачен';
    default:
      return '';
  }
};

interface IProps {
    order: Order
}

function Row({ order }: IProps) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleClose = () => setEditModalOpen(false);

  const { data: { sign } = {} } = useGetSettingsQuery(null);

  const [deleteOrder, { isLoading }] = useDeleteOrderMutation();

  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="left">
          #
          {order.number}
        </TableCell>

        <TableCell align="left">
          {order.productId}
        </TableCell>

        <TableCell align="left">
          {getStatusText(order.status)}
        </TableCell>

        <TableCell align="left">
          {`${order.total}${sign}`}
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={() => setEditModalOpen(true)}>
            <EditIcon />
          </IconButton>

          <IconButton
            color="error"
            disabled={isLoading}
            onClick={() => deleteOrder({ uuid: order.uuid })}
          >
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>

      {isEditModalOpen && (
        <Edit
          order={order}
          open={isEditModalOpen}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default Row;
