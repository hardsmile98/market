import { Review as IReview } from '#/src/types';
import {
  Box,
  Avatar,
  Paper,
} from '@mui/material';
import styles from './styles';

interface IProps {
  review: IReview
}

function Review({ review }: IProps) {
  const {
    image,
    type,
    description,
    createdAt,
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

      <Box sx={styles.createdAt}>
        {createdAt}
      </Box>
    </Paper>
  );
}

export default Review;
