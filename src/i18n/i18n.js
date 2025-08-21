
import en from './en-us';
import es from './es-us';
import ch from './zh-cn';
import vi from './vi-vn';
import ru from './ru-ru';
import fr from './fr-fr';
import ar from './ar-eg';
import sq from './sq-al';
import ht from './fr-ht';
import sw from './sw-ke';
import pt from './pt-br';

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
