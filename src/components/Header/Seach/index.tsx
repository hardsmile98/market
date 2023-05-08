/* eslint-disable react/jsx-props-no-spreading */
import { useGetProductsQuery } from '#/src/services/api';
import { Search as SearchIcon } from '@mui/icons-material';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';

const styles = {
  root: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
    px: 1.5,

    fieldset: {
      display: 'none',
    },
  },
};

function Search() {
  const { data, isLoading } = useGetProductsQuery(null);
  const { items = [] } = data || {};

  return (
    <Autocomplete
      freeSolo
      disableClearable
      sx={styles.root}
      options={items.map((option) => option.title)}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Введите название товара"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
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
