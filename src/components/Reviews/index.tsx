/* eslint-disable react/no-array-index-key */
import { useGetReviewsQuery } from '#/src/services/api';
import { Box, Skeleton } from '@mui/material';
import React from 'react';
import Review from './Review';
import styles from './styles';

function Reviews() {
  const { data, isLoading } = useGetReviewsQuery({});
  const { items } = data || {};

  const skeleton = new Array(3).fill(0);

  if (isLoading) {
    return (
      <>
        {skeleton.map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width="100%"
            height={120}
            sx={styles.skeleton}
          />
        ))}
      </>
    );
  }

  if (!items?.length) {
    return (
      <div>
        Нет отзывов о магазине
      </div>
    );
  }

  return (
    <Box sx={styles.root}>
      {items.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </Box>
  );
}

export default Reviews;
