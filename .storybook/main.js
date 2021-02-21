module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links/register",
    "@storybook/addon-essentials",
    "@storybook/addon-contexts/register",
    "@storybook/addon-a11y/register",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ]
}
