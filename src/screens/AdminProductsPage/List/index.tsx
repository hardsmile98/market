import { useGetProductsQuery } from '#/src/services/api';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import Row from './Row';

function List() {
  const { data } = useGetProductsQuery(null);
  const { items = [] } = data || {};

  return (
    <>
      <Typography variant="h5" mb={1}>
        Все товары
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Название товара</TableCell>
              <TableCell align="left">Цена</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.length
              ? items.map((item) => <Row key={item.id} item={item} />)
              : <Box p={2}>Пустой список товаров</Box>}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default List;
