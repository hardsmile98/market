import { useDeletePaymentMutation } from '#/src/services/api';
import { Payment } from '#/src/types';
import Delete from '@mui/icons-material/Delete';
import {
  IconButton,
  TableCell,
  TableRow,
} from '@mui/material';

interface IProps {
  item: Payment
}

function Row({ item }: IProps) {
  const [deletePayment, { isLoading }] = useDeletePaymentMutation();

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">
        {item.name}
      </TableCell>

      <TableCell align="left">
        {item.requisites}
      </TableCell>

      <TableCell align="right">
        <IconButton
          onClick={() => deletePayment({ id: item.id })}
          color="error"
          disabled={isLoading}
        >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default Row;
