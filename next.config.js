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
    authToken: 'f9e0984a42294baba978b1f624365ef454bcc9f4f2e444a88fbbdf777ee556e3',
    org: 'sentry',
    project: 'big-dipper-vipcoin',
    release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,
    url: 'https://sentry-reports.vidiscount.com/',
    include: "./dist",
    ignore: ["node_modules", "tsconfig.js"],
};

module.exports = withSentryConfig(nextTranslate(moduleExports), sentryWebpackPluginOptions);
