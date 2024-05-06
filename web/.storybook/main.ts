import type { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration } from 'webpack';
const path = require('path');

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    'storybook-css-modules'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    } ,
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config: Configuration) : Promise<Configuration> => {
    config.resolve.plugins = config.resolve?.plugins || [];
    config?.resolve?.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );

    config.module.rules.push(
      {
        test: /\.s(a|c)ss$/,
        include: path.resolve(__dirname, '../'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader'
        ],
      },
    );
    return config;
  },
};
export default config;
