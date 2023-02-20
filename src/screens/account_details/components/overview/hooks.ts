import { useState } from 'react';

import { toast } from 'react-toastify';

import copy from 'copy-to-clipboard';

export const useOverview = t => {
  const [open, setOpen] = useState(false);
  const [addressSelected, setAddress] = useState('');

  const handleClose = () => {
    setAddress('');
    setOpen(false);
  };

  const handleOpen = (value: string) => {
    setAddress(value);
    setOpen(true);
  };

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  return {
    open,
    addressSelected,
    handleClose,
    handleOpen,
    handleCopyToClipboard,
  };
};
