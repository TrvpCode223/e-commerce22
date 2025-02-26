module.exports = {
    webpack: {
      configure: {
        // Configuration personnalisée de Webpack ici
      },
    },
    babel: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        // Plugins Babel personnalisés ici
      ],
    },
    jest: {
      configure: {
        // Configuration personnalisée de Jest ici
      },
    },
  };