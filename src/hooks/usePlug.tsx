import React from 'react';
import { NotificationPlug } from '@src/components/Plug/Notification/NotificationPlug';
import { FullPagePlug } from '@src/components/Plug/FullPage/FullPagePlug';
import { useApolloClient, gql } from '@apollo/client';

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
  const client = useApolloClient();
  const plugData = client.readQuery({
    query: gql`
      query {
        queryPlugData @client
      }
    `,
  });

  const isEnabledNotificationPlug =
    plugData &&
    plugData.queryPlugData?.enable &&
    plugData.queryPlugData.message.kind === 'notification';
  const isEnabledFullPagePlug =
    plugData &&
    plugData.queryPlugData?.enable &&
    plugData.queryPlugData.message.kind === 'full_page';
  const plugMessage = plugData && plugData.queryPlugData?.message?.message;

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
