export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'bn',
  fallbackLocale: 'en',
  missingWarn: false,
  messages: {
    bn: require('./locales/bn.json'),
    en: require('./locales/en.json')
  }
}))
