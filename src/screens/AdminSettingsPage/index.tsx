/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSettingsQuery, useUdpateSettingsMutation } from '#/src/services/api';
import { Settings } from '#/src/types';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import styles from './styles';

function AdminSettingsPage() {
  const [settings, setSettings] = useState<Settings | any>();

  const { data } = useGetSettingsQuery(null);

  useEffect(() => {
    if (data) {
      setSettings(data);
    }
  }, [data]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const [update, { isLoading, isSuccess, isError }] = useUdpateSettingsMutation();

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
            placeholder="Введите ссылку баннер"
            value={settings?.bannerImg}
            onChange={handleChange}
            name="bannerImg"
            fullWidth
            sx={{ mb: 1 }}
          />

          <Typography variant="h6" mb={1}>
            Текст на кнопке
          </Typography>

          <TextField
            placeholder="Введите текст на кнопке"
            onChange={handleChange}
            value={settings?.buttonText}
            name="buttonText"
            fullWidth
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="h6" mb={1}>
            Цвета
          </Typography>

          <Box sx={styles.colors}>
            <Box display="flex">
              <Box mr={1}>
                Основной цвет текста:
              </Box>

              <input
                type="color"
                name="textPrimary"
                onChange={handleChange}
                value={settings?.textPrimary}
              />
            </Box>

            <Box display="flex">
              <Box mr={1}>
                Вторичный цвет текста:
              </Box>

              <input
                type="color"
                name="textSecondary"
                onChange={handleChange}
                value={settings?.textSecondary}
              />
            </Box>

            <Box display="flex">
              <Box mr={1}>
                Основной цвет фона:
              </Box>

              <input
                type="color"
                name="backgroundDefault"
                onChange={handleChange}
                value={settings?.backgroundDefault}
              />
            </Box>

            <Box display="flex">
              <Box mr={1}>
                Вторичный цвет фона:
              </Box>

              <input
                type="color"
                name="backgroundPaper"
                onChange={handleChange}
                value={settings?.backgroundPaper}
              />
            </Box>

            <Box display="flex">
              <Box mr={1}>
                Цвет цены:
              </Box>

              <input
                type="color"
                name="secondaryDark"
                onChange={handleChange}
                value={settings?.secondaryDark}
              />
            </Box>

            <Box display="flex">
              <Box mr={1}>
                Цвет переключателей:
              </Box>

              <input
                type="color"
                name="secondaryLight"
                onChange={handleChange}
                value={settings?.secondaryLight}
              />
            </Box>

            <Box display="flex">
              <Box mr={1}>
                Цвет градиента 1:
              </Box>

              <input
                type="color"
                name="gradient1"
                onChange={handleChange}
                value={settings?.gradient1}
              />
            </Box>

            <Box display="flex">
              <Box mr={1}>
                Цвет градиента 2:
              </Box>

              <input
                type="color"
                name="gradient2"
                onChange={handleChange}
                value={settings?.gradient2}
              />
            </Box>
          </Box>
        </Box>

        <LoadingButton
          fullWidth
          loading={isLoading}
          onClick={() => update(settings)}
        >
          Сохранить
        </LoadingButton>

        {isSuccess && (
          <Box sx={styles.success}>
            Измнения успешно сохранены!
          </Box>
        )}

        {isError && (
          <Box sx={styles.error}>
            Произошла ошибка. Попробуйте позже!
          </Box>
        )}
      </Paper>
    </>
  );
}

export default AdminSettingsPage;
