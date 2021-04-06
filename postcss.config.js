module.exports = {
  plugins: {
    'postcss-preset-env': {
      /* use stage 3 features + css nesting rules */
      // stage: 3,
      features: {
        'nesting-rules': true,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
