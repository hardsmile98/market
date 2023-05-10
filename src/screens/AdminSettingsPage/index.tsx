import {
  Box,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

function AdminSettingsPage() {
  const [bannerImg, setBannerImg] = useState('');

  const [bgColor, setBgColor] = useState('');
  const [textPrimaryColor, setTextPrimaryColor] = useState('');
  const [textSecondaryColor, setTextSecondaryColor] = useState('');

  const [buttonText, setButtonText] = useState('');
  const [productTextColor, setProductTextColor] = useState('');
  const [productSubstrateColor, setProductSubstrateColor] = useState('');
  const [productPriceColor, setProductPriceColor] = useState('');
  const [gradientColor1, setGradientColor1] = useState('');
  const [gradientColor2, setGradientColor2] = useState('');

  return (
    <>
      <Typography variant="h5" mb={1}>
        Настройка магазина
      </Typography>

      <Paper sx={{ p: 2 }}>
        <Box>
          <Typography variant="h6" mb={1}>
            Изображения
          </Typography>

          <TextField
            value={bannerImg}
            onChange={(e) => setBannerImg(e.target.value)}
            placeholder="Введите ссылку баннер"
            fullWidth
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="h6" mb={1}>
            Цвета
          </Typography>

          <Box display="flex">
            <Box width="50%">
              <Box>Основные цвета</Box>
            </Box>

            <Box width="50%">
              <Box>Настройки карточки</Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default AdminSettingsPage;
