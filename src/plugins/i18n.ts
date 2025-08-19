
import { createI18n } from 'vue-i18n'
import de from '../locales/de.json'
import fa from '../locales/fa.json'
import ps from '../locales/ps.json'

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'de',
  messages: { de, fa, ps }
})
export default i18n
