import { useDeleteProductMutation } from '#/src/services/api';
import { Product } from '#/src/types';
import Delete from '@mui/icons-material/Delete';
import {
  IconButton,
  TableCell,
  TableRow,
} from '@mui/material';

interface IProps {
    item: Product
}

function Row({ item }: IProps) {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">{item.title}</TableCell>
      <TableCell align="left">{item.price}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={() => deleteProduct({ id: item.id })}
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
