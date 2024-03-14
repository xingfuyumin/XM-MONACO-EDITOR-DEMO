import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  npmClient: 'pnpm',
  esbuildMinifyIIFE: true,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/XM-MONACO-EDITOR-DEMO/dist/',
  hash: true,
  history: {type: 'hash',},
  headScripts: ['/monaco-editor/vs/loader.js'],
});

