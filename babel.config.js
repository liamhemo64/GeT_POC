module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // אפשר להשאיר את ה-unstable, אבל הפלאגין למטה הוא זה שיעשה את העבודה האמיתית
      ['babel-preset-expo', { jsxImportSource: 'nativewind', unstable_transformImportMeta: true }],
      'nativewind/babel',
    ],
    plugins: [
      'babel-plugin-transform-import-meta', // הוספנו את זה כאן
      'react-native-reanimated/plugin', // חשוב מאוד: Reanimated חייב להישאר תמיד אחרון ברשימה!
    ],
  };
};