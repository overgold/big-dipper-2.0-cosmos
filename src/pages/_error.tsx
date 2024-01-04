/* eslint-disable */
import { NextPageContext } from 'next';
// import Error from '@screens/error';
import { FullPagePlug } from '@src/components/Plug/FullPage/FullPagePlug';

const ErrorPage = () => {
  // return <Error />;
  return <FullPagePlug />;
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
