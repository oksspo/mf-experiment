import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  output: {
    assetPrefix: process.env.HOST_PUBLIC_URL || '/mf-experiment/',
  },
  source: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'production'),
      'process.env.HOST_PUBLIC_URL': JSON.stringify(process.env.HOST_PUBLIC_URL ?? ''),
      'process.env.ORDER_REMOTE_URL': JSON.stringify(process.env.ORDER_REMOTE_URL ?? ''),
    },
  },
});
