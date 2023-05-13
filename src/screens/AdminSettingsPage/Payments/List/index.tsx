import { useGetPaymentsQuery } from '#/src/services/api';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
  const { data = [] } = useGetPaymentsQuery(null);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={styles.head}>
            <TableCell align="left">
              Название
            </TableCell>

            <TableCell align="left">
              Реквизиты
            </TableCell>
            <TableCell align="right">
              Действия
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <Row
              key={item.id}
              item={item}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
