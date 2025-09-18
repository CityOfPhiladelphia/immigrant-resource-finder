
import en from './en';
import es from './es';
import ch from './zh';
import vi from './vi';
import ru from './ru';
import fr from './fr';
import ar from './ar';
import sq from './sq';
import ht from './ht';
import sw from './sw';
import pt from './pt';

let i18n = {
  i18n: {
    languages: [
      {
        language: 'en',
        title: 'English',
      },
      {
        language: 'es',
        title: 'Español',
      },
      {
        language: 'ch',
        title: '中文',
      },
      {
        language: 'vi',
        title: 'Tiếng Việt',
      },
      {
        language: 'ru',
        title: 'Русский',
      },
      {
        language: 'fr',
        title: 'Français'
      },
      {
        language: 'ar',
        title: 'عربى',
      },
      {
        language: 'pt',
        title: 'Português'
      },
      {
        language: 'sq',
        title: 'Shqiptar'
      },
      {
        language: 'ht',
        title: 'Ayisyen'
      },
      {
        language: 'sw',
        title: 'Kiswahili'
      },
    ],
    header: 'inside',
    enabled: true,
    refinePanel: true,
    expandCollapseTitle: true,
    footer: true,
    data: {
      locale: 'en',
      messages: {
        en: en,
        es: es,
        ch: ch,
        vi: vi,
        ru: ru,
        fr: fr,
        ar: ar,
        sq: sq,
        ht: ht,
        sw: sw,
        pt: pt,
      },
    },
  },
};

// console.log('injury prevention i18n.js, i18n:', i18n);

export default i18n;
