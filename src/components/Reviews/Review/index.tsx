import { Review } from '#/src/types';
import {
  Box,
  Avatar,
  Paper,
} from '@mui/material';
import styles from './styles';

interface IProps {
  review: Review
}

function Review({ review }: IProps) {
  const {
    image,
    type,
    description,
    createAt,
  } = review || {};

  return (
    <Paper
      elevation={0}
      sx={styles.root}
    >
      <Box sx={styles.wrap}>
        <Avatar
          sx={styles.avatar}
          alt="Avatar"
          src={image}
        />

        <Box sx={styles.description}>
          {description}
        </Box>
      </Box>

      <Box sx={styles.type}>
        <span>Тип товара: </span>
        {type}
      </Box>

      <Box sx={styles.createAt}>
        {createAt}
      </Box>
    </Paper>
  );
}

export default Review;
