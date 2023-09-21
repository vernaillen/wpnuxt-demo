import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark: '#001818',
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      neutral: colors.neutral
    },
    container: {
      center: true,
      padding: '20px'
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
    },
    fontFamily: {
      mic32: ['mic32, mic32fallback, "Helvetica Neue", sans-serif'],
      mic32fallback: ['mic32fallback, "Helvetica Neue", sans-serif'],
      display: ['mic32, mic32fallback, "Helvetica Neue", sans-serif'],
      sans: ['montserrat, Verdana, sans-serif']
    },
    extend: {
      colors: {
        avocado: {
          DEFAULT: '#7B8856',
          50: '#f8f9f7',
          100: '#f2f3ee',
          200: '#dee1d5',
          300: '#cacfbb',
          400: '#a3ac89',
          500: '#7b8856',
          600: '#6f7a4d',
          700: '#5c6641',
          800: '#4a5234',
          900: '#3c432a',
          950: '#242819'
        },
        verdigris: {
          DEFAULT: '#5c6641',
          50: '#f7f7f2',
          100: '#eef0e6',
          200: '#d5d9c5',
          300: '#bdc2a7',
          400: '#8b946f',
          500: '#5c6641',
          600: '#505c35',
          700: '#3e4d25',
          800: '#2d3d17',
          900: '#1f2e0d',
          950: '#111f06'
        },
        smoky: {
          DEFAULT: '#67597a',
          50: '#f7f7f8',
          100: '#f0eef2',
          200: '#d9d6de',
          300: '#c2bdca',
          400: '#958ba2',
          500: '#67597a',
          600: '#5d506e',
          700: '#4d435c',
          800: '#3e3549',
          900: '#322c3c',
          950: '#1e1a24'
        },
        ecstatic: {
          DEFAULT: '#C5D52D',
          50: '#fcfdf5',
          100: '#f9fbea',
          200: '#f1f5cb',
          300: '#e8eeab',
          400: '#d6e26c',
          500: '#C5D52D',
          600: '#b1c029',
          700: '#94a022',
          800: '#76801b',
          900: '#616816',
          950: '#3a3e0d'
        },
        music: {
          DEFAULT: '#AAA857',
          50: '#fbfbf7',
          100: '#f7f6ee',
          200: '#eae9d5',
          300: '#dddcbc',
          400: '#c4c289',
          500: '#AAA857',
          600: '#99974e',
          700: '#807e41',
          800: '#666534',
          900: '#53522b',
          950: '#32311a'
        },
        sound: {
          DEFAULT: '#9DB19F',
          50: '#fafbfa',
          100: '#f5f7f5',
          200: '#e7ece7',
          300: '#d8e0d9',
          400: '#bac8bc',
          500: '#9db19f',
          600: '#8d9f8f',
          700: '#768577',
          800: '#5e6a5f',
          900: '#4d574e',
          950: '#2e342f'
        },
        trance: {
          DEFAULT: '#004745',
          50: '#f2f6f6',
          100: '#e6edec',
          200: '#bfd1d1',
          300: '#99b5b5',
          400: '#4d7e7d',
          500: '#004745',
          600: '#00403e',
          700: '#003534',
          800: '#002b29',
          900: '#002322',
          950: '#001514'
        },
        black: '#004745',
        dark: '#001818'
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              maxWidth: '1320px', // add required value here
              'h1, h2': {
                fontFamily: theme('fontFamily.mic32'),
                fontWeight: 900,
                'scroll-margin-top': 'var(--scroll-mt)'
              },
              'h3, h4, h5, h6': {
                fontWeight: theme('fontWeight.medium'),
                'scroll-margin-top': 'var(--scroll-mt)'
              },
              'h1 a, h2 a, h3 a, h4 a': {
                fontFamily: theme('fontFamily.mic32'),
                color: 'inherit',
                fontWeight: 'inherit'
              },
              h1: {
                fontSize: '2em'
              },
              h2: {
                fontSize: '1.6em'
              },
              h3: {
                fontSize: '1.25em'
              },
              h4: {
                fontSize: '1.15em'
              },
              h5: {
                fontSize: '1.1em'
              },
              h6: {
                fontSize: '1em'
              },
              a: {
                fontWeight: theme('fontWeight.normal'),
                textDecoration: 'none',
                borderBottom: '1px solid rgba(123, 136, 86, 0.2)',
                transition: 'color 0.3s cubic-bezier(.65, 0, .28, 1)',
                position: 'relative'
              },
              'a:hover': {
                color: 'var(--tw-prose-links)'
              },
              'a::after': {
                content: '""',
                position: 'absolute',
                left: '0',
                bottom: '-2px',
                right: '0',
                height: '2px',
                backgroundImage: 'linear-gradient(to right, #7b8856, #cacfbb)',
                transformOrigin: '100% 100%',
                transform: 'scaleX(0)',
                transition: 'transform 0.3s cubic-bezier(.65, 0, .28, 1)'
              },
              'a:hover::after, a:focus::after': {
                transformOrigin: '0% 100%',
                transform: 'scaleX(1)'
              },
              '*, *::before, *:after': {
                boxSizing: 'border-box'
              },
              '.category-ecstatic a::after': {
                backgroundImage: 'linear-gradient(to right, #C5D52D, #cacfbb)'
              },
              '.category-sound a::after': {
                backgroundImage: 'linear-gradient(to right, #9db19f, #cacfbb)'
              },
              '.category-music a::after': {
                backgroundImage: 'linear-gradient(to right, #AAA857, #cacfbb)'
              },
              '.category-trance a::after': {
                backgroundImage: 'linear-gradient(to right, #004745, #cacfbb)'
              },
              'a.harmonicButton::after': {
                backgroundImage: 'none',
                backgroundColor: 'transparent'
              },
              'a:has(> code)': {
                borderColor: 'transparent !important'
              },
              'a code': {
                color: 'var(--tw-prose-code)',
                border: '1px dashed var(--tw-prose-pre-border)'
              },
              'a:hover code': {
                color: 'var(--tw-prose-links)',
                borderColor: 'var(--tw-prose-links)'
              },
              pre: {
                margin: '0',
                borderRadius: '0.375rem',
                border: '1px solid var(--tw-prose-pre-border)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-words'
              },
              code: {
                backgroundColor: 'var(--tw-prose-pre-bg)',
                padding: '0.25rem 0.375rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--tw-prose-pre-border)'
              },
              'code::before': {
                content: ''
              },
              'code::after': {
                content: ''
              },
              blockquote: {
                fontSize: '0.9em',
                fontWeight: 400,
                paddingLeft: '1em',
                borderLeftWidth: 0
              },
              'blockquote p:first-of-type::before': {
                content: 'open-quote',
                fontSize: '2.5em',
                color: 'rgb(var(--color-gray-300))',
                position: 'absolute',
                left: '-8px',
                top: '-20px'
              },
              'blockquote p:last-of-type::after': {
                content: 'close-quote',
                fontSize: '2.5em',
                color: 'rgb(var(--color-gray-300))',
                position: 'absolute'
              },
              'input[type="checkbox"]': {
                color: 'rgb(var(--color-primary-500))',
                borderRadius: theme('borderRadius.DEFAULT'),
                borderColor: 'rgb(var(--color-gray-300))',
                height: theme('spacing.4'),
                width: theme('spacing.4'),
                marginTop: '-3.5px !important',
                marginBottom: '0 !important',
                '&:focus': {
                  '--tw-ring-offset-width': 0
                }
              },
              'input[type="checkbox"]:checked': {
                borderColor: 'rgb(var(--color-primary-500))'
              },
              'input[type="checkbox"]:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed'
              },
              'ul.contains-task-list': {
                marginLeft: '-1.625em'
              },
              'ul ul': {
                paddingLeft: theme('padding.6')
              },
              'ul ol': {
                paddingLeft: theme('padding.6')
              },
              'ul > li.task-list-item': {
                paddingLeft: '0 !important'
              },
              'ul > li.task-list-item input': {
                marginRight: '7px'
              },
              'ul > li.task-list-item > ul.contains-task-list': {
                marginLeft: 'initial'
              },
              'ul > li.task-list-item a': {
                marginBottom: 0
              },
              'ul > li.task-list-item::marker': {
                content: 'none'
              },
              'ul > li > p': {
                margin: 0
              },
              'ul > li > span.issue-badge, p > span.issue-badge': {
                verticalAlign: 'text-top',
                margin: '0 !important'
              },
              'ul > li > button': {
                verticalAlign: 'baseline !important'
              },
              table: {
                wordBreak: 'break-all'
              }
            }
          },
          primary: {
          }
        }
      }
    }
  },
  safelist: [
    {
      pattern: /text-(primary|ecstatic|sound|music|trance)-(400|500)/,
      variants: ['hover']
    }
  ]
}
