const styles = {
  field: {
    mt: 1,

    '> div': {
      mb: 0.5,
      fontSize: 'body2.fontSize',
    },
  },

  input: {
    backgroundColor: 'background.paper',
    borderRadius: 2,
    px: 1.5,
    '& input.Mui-disabled': {
      color: 'text.primary',
      WebkitTextFillColor: 'inherit',
    },

    fieldset: {
      display: 'none',
    },
  },
};

export default styles;
