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
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
    authToken: 'f9e0984a42294baba978b1f624365ef454bcc9f4f2e444a88fbbdf777ee556e3',
    org: 'sentry',
    project: 'big-dipper-vipcoin',
    release: '1.0.1',
    url: 'https://sentry-reports.vidiscount.com/',
        // other SentryWebpackPlugin configuration
    include: "./dist",
    ignore: ["node_modules", "tsconfig.js"],
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(nextTranslate(moduleExports), sentryWebpackPluginOptions);
