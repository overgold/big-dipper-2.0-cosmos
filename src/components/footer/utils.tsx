const FORBOLE_URL = 'https://www.forbole.com';
const BIG_DIPPER_URL = 'https://bigdipper.live';

export const footerLinks = [
  {
    key: 'company',
    links: [
      {
        key: 'vipcoin',
        url: FORBOLE_URL,
      },
      {
        key: 'wallet',
        url: `${FORBOLE_URL}/stake-now`,
      },
      {
        key: 'vcg',
        url: `${FORBOLE_URL}/contact`,
      },
    ],
  },
  {
    key: 'documents',
    links: [
      {
        key: 'termsAndConditions',
        url: `${BIG_DIPPER_URL}/terms-and-conditions`,
      },
      {
        key: 'privacyPolicy',
        url: `${BIG_DIPPER_URL}/privacy-policy`,
      },
    ],
  },
];
