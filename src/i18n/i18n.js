
import en from './en-us';
import es from './es';
import ch from './ch';
import vi from './vi';
import ru from './ru';
import fr from './fr';

let i18n = {
  i18n: {
    languages: [
      {
        language: 'en-US',
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
    ],
    header: 'inside',
    enabled: true,
    refinePanel: true,
    expandCollapseTitle: true,
    footer: true,
    data: {
      locale: 'en-US',
      messages: {
        'en-US': en,
        es: es,
        ch: ch,
        vi: vi,
        ru: ru,
        fr: fr,
      },
    },
  },
};

// console.log('injury prevention i18n.js, i18n:', i18n);

export default i18n;
