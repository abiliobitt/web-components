module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  // "staticDirs": [{ from: '../src/resource', to: '/assets' }],
  // "staticDirs": [{ from: '../src/resource', to: '/assets' }],
  "staticDirs": ['../public'],

  "framework": "@storybook/react"
}

// // .storybook/main.js

// module.exports = {
//   staticDirs: [],
// };
