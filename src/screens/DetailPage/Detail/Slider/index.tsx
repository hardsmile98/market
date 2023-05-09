import { Box } from '@mui/material';
import Carousel from 'nuka-carousel';
import Next from '@mui/icons-material/ArrowForward';
import Back from '@mui/icons-material/ArrowBack';
import React from 'react';

interface IProps {
  images: Array<string>
}

const styles = {
  image: {
    width: '100%',
    borderRadius: 6,
  },

  control: {
    borderRadius: '50%',
    width: [45, 45, 50],
    height: [45, 45, 50],
    border: 'none',
    color: 'text.primary',
    backgroundColor: 'secondary.light',
    ':disabled': {
      color: 'divider',
    },
  },
};

function Slider({ images }: IProps) {
  return (
    <Carousel
      cellSpacing={8}
      autoplay
      autoplayInterval={10000}
      renderBottomCenterControls={() => null}
      renderCenterLeftControls={({ previousSlide, previousDisabled }) => (
        <Box
          sx={{ ml: [2, 2, 3], ...styles.control }}
          onClick={previousSlide}
          disabled={previousDisabled}
          component="button"
        >
          <Back />
        </Box>
      )}
      renderCenterRightControls={({ nextSlide, nextDisabled }) => (
        <Box
          sx={{ mr: [2, 2, 3], ...styles.control }}
          onClick={nextSlide}
          disabled={nextDisabled}
          component="button"
        >
          <Next />
        </Box>
      )}
    >
      {images.map((image) => (
        <Box
          key={image}
          component="img"
          sx={styles.image}
          src={image}
        />
      ))}
    </Carousel>
  );
}

export default Slider;
