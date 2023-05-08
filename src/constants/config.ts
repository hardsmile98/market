const API_URL = process.env.DEV_MODE === 'dev'
  ? process.env.NEXT_PUBLIC_API_URL_DEV
  : process.env.NEXT_PUBLIC_API_URL;

export {
  API_URL,
};
