const BIG_DIPPER_URL = 'https://bigdipper.live';
console.log(
  'process.env.NEXT_PUBLIC_URL_OVERGOLD_SITE',
  process.env.NEXT_PUBLIC_URL_OVERGOLD_SITE
);
console.log(
  'process.env.NEXT_PUBLIC_URL_MARKET',
  process.env.NEXT_PUBLIC_URL_MARKET
);
console.log(
  'process.env.NEXT_PUBLIC_WALLET_URL',
  process.env.NEXT_PUBLIC_WALLET_URL
);
//Fork
export const footerLinks = [
  {
    key: 'company',
    links: [
      {
        key: 'overgoldSite',
        url: process.env.NEXT_PUBLIC_URL_OVERGOLD_SITE,
      },
      {
        key: 'wallet',
        url: process.env.NEXT_PUBLIC_WALLET_URL,
      },
      {
        key: 'ovg',
        url: process.env.NEXT_PUBLIC_URL_MARKET,
      },
      {
        key: 'exchanger',
        url: process.env.NEXT_PUBLIC_URL_EXCHANGER,
      },
      {
        key: 'telegram',
        url: process.env.NEXT_PUBLIC_URL_TELEGRAM,
      },
    ],
  },
  // {
  //   key: 'documents',
  //   links: [
  //     {
  //       key: 'termsAndConditions',
  //       url: `${BIG_DIPPER_URL}/terms-and-conditions`,
  //     },
  //     {
  //       key: 'privacyPolicy',
  //       url: `${BIG_DIPPER_URL}/privacy-policy`,
  //     },
  //   ],
  // },
];
