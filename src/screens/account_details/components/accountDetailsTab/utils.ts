export const walletsColumns = (
  t
): {
  key: string;
  value: string;
}[] => {
  return [
    {
      key: 'kind',
      value: t('kindTab'),
    },
    {
      key: 'address',
      value: t('addressTab'),
    },
    {
      key: 'state',
      value: t('stateTab'),
    },
    {
      key: 'balance',
      value: t('balance'),
    },
  ];
};

export const affiliatesColumns = (
  t
): {
  key: string;
  value: string;
}[] => {
  return [
    {
      key: 'kind',
      value: t('affiliationTab'),
    },
    {
      key: 'address',
      value: t('addressTab'),
    },
  ];
};


export const kindColumns = (
  t
): {
  key: string;
  value: string;
}[] => {
  return [
    {
      key: 'kind',
      value: t('kindTab'),
    },
  ];
};
