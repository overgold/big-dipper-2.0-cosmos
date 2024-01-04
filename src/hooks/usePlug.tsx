import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NotificationPlug } from '@src/components/Plug/Notification/NotificationPlug';
import { FullPagePlug } from '@src/components/Plug/FullPage/FullPagePlug';

interface Notification {
  id: string;
  message_id: string;
  service: string;
  enable: boolean;
  message: {
    id: string;
    message: string;
    kind: string;
    language: string;
  };
}

const usePlug = () => {
  const [plugData, setPlugData] = useState<Notification | null>(null);

  useEffect(() => {
    const getPlug = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_WALLET_URL}/v4/plug-service/plugs/big_dipper?language=en-GB`
        );

        if (response.status !== 204) {
          setPlugData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPlug();
  }, []);

  const isEnabledNotificationPlug =
    plugData?.enable && plugData.message.kind === 'notification';
  const isEnabledFullPagePlug =
    plugData?.enable && plugData.message.kind === 'full_page';
  const plugMessage = plugData?.message?.message;

  const NotificationPlugComponent = isEnabledNotificationPlug && (
    <NotificationPlug message={plugMessage} />
  );
  const FullPagePlugComponent = isEnabledFullPagePlug && (
    <FullPagePlug message={plugMessage} />
  );

  return {
    isEnabledNotificationPlug,
    isEnabledFullPagePlug,
    NotificationPlugComponent,
    FullPagePlugComponent,
  };
};

export default usePlug;
