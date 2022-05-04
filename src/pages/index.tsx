import Home from '@screens/home';
import { subtractYears } from '@src/utils/time';
import { GetServerSideProps } from 'next';

const HomePage = ({ data }) => {
  return <Home data={data} />;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch(
    `${
      process.env.NEXT_PUBLIC_WALLET_URL
    }/v4/rs/price/history/eur?set=w&since=${
      Date.parse(subtractYears(1)) / 1000
    }&until=${Date.now()}&sort=desc`
  );
  const res = await data.json();
  return {
    props: { data: res.length ? res.reverse() : [] },
  };
};
