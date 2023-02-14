import React from 'react';
import { Layout } from '@components';
import { useStyles } from './styles';
import {
  DataBlocks,
  Consensus,
  Blocks,
  Transactions,
  Hero,
} from './components';
import { IHome } from './types';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

const Home = ({ data }: IHome) => {
  const classes = useStyles();
  const { t } = useTranslation('home');

  return (
    <>
      <NextSeo
        title={t('home')}
        openGraph={{
          title: t('home'),
        }}
      />
      <Layout className={classes.root}>
        <DataBlocks data={data} className={classes.dataBlocks} />
        <Hero data={data} className={classes.hero} />
        <Consensus className={classes.consensus} />
        <Blocks className={classes.blocks} />
        <Transactions className={classes.transactions} />
      </Layout>
    </>
  );
};

export default Home;
