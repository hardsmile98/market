import { useGetReviewsQuery } from '#/src/services/api';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import Row from './Row';

const styles = {
  head: {
    th: {
      fontWeight: 'fontWeightBold',
    },
  },

  empty: {
    p: 2,
  },
};

function List() {
  const { data } = useGetReviewsQuery({});
  const { items = [] } = data || {};

  return (
    <>
      <Typography variant="h5" mb={1}>
        Все отзывы
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={styles.head}>
              <TableCell align="left">
                Имя
              </TableCell>

              <TableCell align="left">
                Товар
              </TableCell>

              <TableCell align="left">
                Отзыв
              </TableCell>
              <TableCell align="right">
                Действия
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <Row
                key={item.id}
                item={item}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default List;
