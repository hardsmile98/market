import { useDeleteReviewMutation } from '#/src/services/api';
import { Review } from '#/src/types';
import { Delete } from '@mui/icons-material';
import {
  IconButton,
  TableCell,
  TableRow,
} from '@mui/material';

interface IProps {
    item: Review
}

function Row({ item }: IProps) {
  const [deleteReview, { isLoading }] = useDeleteReviewMutation();

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">{item.name}</TableCell>
      <TableCell align="left">{item.type}</TableCell>
      <TableCell align="left">{item.description}</TableCell>
      <TableCell align="right">
        <IconButton
          color="error"
          disabled={isLoading}
          onClick={() => deleteReview({ id: item.id })}
        >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default Row;
