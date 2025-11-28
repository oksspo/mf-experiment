import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'hyperion',
  remotes: {
    order: `order@${process.env.ORDER_REMOTE_URL}/remoteEntry.js`,
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
