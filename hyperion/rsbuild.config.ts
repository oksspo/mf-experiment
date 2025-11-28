import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  output: {
    assetPrefix: isProd
        ? process.env.HOST_PUBLIC_URL || '/mf-experiment/'
        : '/',
  },
  source: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV ?? (isProd ? 'production' : 'development'),
      ),
      'process.env.HOST_PUBLIC_URL': JSON.stringify(
          isProd ? process.env.HOST_PUBLIC_URL || 'https://oksspo.github.io/mf-experiment/' : '',
      ),
      'process.env.PUBLIC_URL': JSON.stringify(
          isProd ? process.env.HOST_PUBLIC_URL || 'https://oksspo.github.io/mf-experiment/' : '',
      ),
    },
  },
});
