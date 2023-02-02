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

const Home = ({ data }: IHome) => {
  console.log('🚀 ~ file: index.tsx:14 ~ Home ~ data', data);
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      <DataBlocks data={data} className={classes.dataBlocks} />
      <Hero data={data} className={classes.hero} />
      <Consensus className={classes.consensus} />
      <Blocks className={classes.blocks} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default Home;
