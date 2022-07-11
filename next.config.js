// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');
const nextTranslate = require('next-translate');

const moduleExports = {
    poweredByHeader: false,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  }


const sentryWebpackPluginOptions = {
};

module.exports = withSentryConfig(nextTranslate(moduleExports), sentryWebpackPluginOptions);
