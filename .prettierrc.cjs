const { default: plugin } = require("tailwindcss");

module.exports = {
  semi: false,
  tabWidth: 2,
  useTabs: true,
  plugin: [
    require("prettier-plugin-astro")
  ],
  overrides: [
    {
      files: "**/*astro",
      options: {
        parser: "astro"
      }
    }
  ]
}