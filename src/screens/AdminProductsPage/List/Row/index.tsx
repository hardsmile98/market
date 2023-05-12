import { useState } from 'react';
import { useDeleteProductMutation } from '#/src/services/api';
import { Currency, Product } from '#/src/types';
import Delete from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  IconButton,
  TableCell,
  TableRow,
} from '@mui/material';
import Edit from './Edit';

interface IProps {
    item: Product
    currency?: Currency
}

function Row({ item, currency }: IProps) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleClose = () => setEditModalOpen(false);

  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="left">{item.title}</TableCell>
        <TableCell align="left">
          {`${item.price} ${currency}`}
        </TableCell>
        <TableCell align="right">
          <IconButton
            onClick={() => setEditModalOpen(true)}
            disabled={isLoading}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => deleteProduct({ id: item.id })}
            color="error"
            disabled={isLoading}
          >
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>

      {isEditModalOpen && (
        <Edit
          product={item}
          open={isEditModalOpen}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default Row;
