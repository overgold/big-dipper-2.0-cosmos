import Home from '@screens/home';
import { subtractYears } from '@src/utils/time';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import usePlug from '@src/hooks/usePlug';

const HomePage = ({ data }) => {
  const { isEnabledFullPagePlug, FullPagePlugComponent } = usePlug();
  if (isEnabledFullPagePlug) return FullPagePlugComponent;
  return <Home data={data} />;
};

export default HomePage;
//Fork
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch(
    `${
      process.env.NEXT_PUBLIC_WALLET_URL
    }/v4/rs/price/history/usd?set=w&since=${
      Date.parse(subtractYears(1)) / 1000
    }&until=${Date.now()}&sort=desc`
  );
  const res = await data.json();
  if (!res) {
    return { notFound: true };
  }
  return {
    props: { data: res.length ? res.reverse() : [] },
  };
};
