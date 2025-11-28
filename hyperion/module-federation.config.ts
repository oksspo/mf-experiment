import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

const isProd = process.env.NODE_ENV === 'production';
const defaultProdOrderUrl = 'https://oksspo.github.io/mf-experiment/order';

const orderBaseUrl =
    process.env.ORDER_REMOTE_URL ||
    (isProd ? defaultProdOrderUrl : 'http://localhost:3001');

export default createModuleFederationConfig({
  name: 'hyperion',
  remotes: {
    order: `order@${orderBaseUrl}/remoteEntry.js`,
  },
  shareStrategy: 'loaded-first',
  filename: 'remoteEntry.js',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    'react-router-dom': { singleton: true },
    'react-redux': { singleton: true },
    '@reduxjs/toolkit': { singleton: true },
  },
});
