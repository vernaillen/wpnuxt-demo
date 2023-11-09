import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './node_modules/@vernaillen/wpnuxt/dist/runtime/components/**/*.vue',
  ],
  "theme": {
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
    },
    "extend": {
      "colors": {
        "wpgray": {
          DEFAULT: "#32373c",
          "50": "#ebebec",
          "100": "#d6d7d8",
          "200": "#adafb1",
          "300": "#84878a",
          "400": "#5b5f63",
          "500": "#32373c",
          "600": "#282c30",
          "700": "#1e2124",
          "800": "#141618",
          "900": "#0a0b0c"
        }
      },
    }
  }
}
