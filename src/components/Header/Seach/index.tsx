/* eslint-disable react/jsx-props-no-spreading */
import { useGetProductsQuery } from '#/src/services/api';
import SearchIcon from '@mui/icons-material/Search';
import {
  Autocomplete, Box, InputAdornment, TextField,
} from '@mui/material';
import Link from 'next/link';

const styles = {
  root: {
    width: '100%',
    backgroundColor: 'background.paper',
    borderRadius: 6,
    px: 1.5,

    fieldset: {
      display: 'none',
    },
  },

  link: {
    a: {
      width: '100%',
      color: 'inherit',
      textDecoration: 'none',
    },
  },
};

function Search() {
  const { data, isLoading } = useGetProductsQuery(null);
  const { items = [] } = data || {};

  return (
    <Autocomplete
      freeSolo
      sx={styles.root}
      options={items}
      getOptionLabel={(option) => (typeof option === 'string'
        ? option
        : option.title)}
      loading={isLoading}
      renderOption={(props, option) => (
        <Box component="li" sx={styles.link} {...props}>
          <Link href={`/${option.id}`}>
            {option.title}
          </Link>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Введите название товара"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default Search;
