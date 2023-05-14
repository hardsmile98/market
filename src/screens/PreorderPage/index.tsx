/* eslint-disable max-len */
import { Box, Typography } from '@mui/material';

const styles = {
  root: {
    p: 3,
    borderRadius: 6,
    backgroundColor: 'background.paper',

    ul: {
      m: 0,
      p: 0,

      listStyle: 'none',
    },
  },
};

function PreorderPage() {
  return (
    <Box mb={5}>
      <Box sx={styles.root}>
        <Typography
          variant="h5"
          fontWeight="fontWeightBold"
          gutterBottom
        >
          NameShop - Твой выбор!
        </Typography>

        <Typography gutterBottom>
          В нашем магазине вы сможете оформить предзаказ на любой товар
        </Typography>

        <Typography gutterBottom>
          В данном разделе сводка правил оформления предзаказа.
        </Typography>

        <Box component="ul">
          <Box component="li">
            1. Перед оформлением предзаказа обратитесь в поддержку для обсуждения условия сделки
          </Box>
          <Box component="li">
            2. Предзаказ может быть отгружен в течении 3х дней. Но на самом деле обычно в этот же день
          </Box>
          <Box component="li">
            3. Проблемы с предзаказом рассматриваются в течении 24 часов после выдачи позиции покупателю
          </Box>
          <Box component="li">
            4. Проблемы принимаются только в таком формате: Фото до поисков/Фото после поисков
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PreorderPage;
