const styles = {
  root: {
    display: 'block',
    position: 'relative',
    borderRadius: 6,
    textDecoration: 'none',
  },

  content: {
    width: '100%',
    color: 'background.paper',
    position: 'absolute',
    top: 16,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 3,
    py: 1,
  },

  price: {
    backgroundColor: 'secondary.dark',
    height: 48,
    width: 48,
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '48px',
    fontSize: 'body2.fontSize',
  },

  image: {
    height: 220,
    backgroundColor: 'secondary.main',
  },

  actions: {
    p: 3,
  },

  button: {
    fontWeight: 'fontWeightBold',
  },
};

export default styles;
