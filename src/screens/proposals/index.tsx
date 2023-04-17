import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import { Layout, NoData } from '@components';
import { useStyles } from './styles';
import { List } from './components';
import { useProposals } from './hooks';
import UFO from '@assets/ufo.svg';
import isEmpty from 'lodash-es/isEmpty';

const Proposals = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const { state, loadMoreItems, itemCount, isItemLoaded } = useProposals();

  return (
    <>
      <NextSeo
        title={t('proposals')}
        openGraph={{
          title: t('proposals'),
        }}
      />
      <Layout navTitle={t('proposals')} className={classes.root}>
        {!isEmpty(state.items) ? (
          <List
            items={state.items}
            rawDataTotal={state.rawDataTotal}
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          />
        ) : (
          <NoData />
        )}
      </Layout>
    </>
  );
};

export default Proposals;
