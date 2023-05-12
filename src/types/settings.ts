type Currency = 'RUB' | 'USD' | 'EUR';

interface Settings {
  id: number
  currency: Currency
  bannerImg: string
  buttonText: string
  textPrimary: string
  textSecondary: string
  secondaryMain: string
  secondaryDark: string
  secondaryLight: string
  backgroundDefault: string
  backgroundPaper: string
  gradient1: string
  gradient2: string
}

export type {
  Settings,
  Currency,
};
