module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        15: [
          '15px',
          {
            lineHeight: '1.47',
          },
        ],
        17: [
          '17px',
          {
            lineHeight: '1.47',
          },
        ],
      },
      lineHeight: {
        'hi-1.14': '1.14',
        'hi-1.17': '1.17',
        'hi-1.21': '1.21',
        'hi-1.28': '1.28',
        'hi-1.33': '1.33',
      },
      letterSpacing: {
        'hi-1': '0.01em',
        'hi-2': '0.02em',
        'hi-3': '0.03em',
        'hi-4': '0.04em',
      },
      colors: {
        'hi-45': '#454545',
        'hi-f5': '#f5f5f5',
        'hi-fa': '#fafafa',
        'hi-e2': '#e2e2e2',
        'hi-f0': '#f0f0f0',
        primary: '#178fac',
        success: '##3a9b8c',
        warning: '#ffb715',
        danger: '#eb6767',
        hot: '#e34a4a',
        gray: {
          500: '#bfbfbf',
          600: '#8c8c8c',
          700: '#595959',
        },
      },
      boxShadow: {
        'lg-plus':
          '0 5px 20px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
