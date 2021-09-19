module.exports = {
  "stories": [
    "../src/components/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return {
      ...config,
        resolve: {
          ...config.resolve,
          alias: {
            ...config.resolve.alias,
            "@emotion/core": require.resolve('@emotion/react'),
            "emotion-theming": require.resolve('@emotion/react'),
          },
        },
    }
  }
}
