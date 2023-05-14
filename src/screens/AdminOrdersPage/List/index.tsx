import { useGetOrdersQuery } from '#/src/services/api';
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
  const { data } = useGetOrdersQuery(null);

  const { orders = [] } = data || {};

  return (
    <>
      <Typography
        variant="h5"
        mb={1}
      >
        Все заказы
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={styles.head}>
              <TableCell align="left">
                Номер заказа
              </TableCell>

              <TableCell align="left">
                id товара
              </TableCell>

              <TableCell align="left">
                Статус
              </TableCell>

              <TableCell align="left">
                Сумма
              </TableCell>
              <TableCell align="right">
                Действия
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <Row
                key={order.uuid}
                order={order}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default List;
