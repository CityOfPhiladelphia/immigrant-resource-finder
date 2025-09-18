// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js

import isMac from './util/is-mac';
if (isMac()) {
  import('./assets/mac-style.scss')
}

console.log('window.location:', window.location);

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown as farAngleDown } from '@fortawesome/pro-regular-svg-icons';
import { faAngleUp as farAngleUp } from '@fortawesome/pro-regular-svg-icons';
import { faTimes as farTimes } from '@fortawesome/pro-regular-svg-icons';
import { faPlus as farPlus } from '@fortawesome/pro-regular-svg-icons';
import { faMinus as farMinus } from '@fortawesome/pro-regular-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/pro-regular-svg-icons';

library.add(farAngleDown, farAngleUp, farTimes, farPlus, farMinus, farEnvelope);

// use these if running off unlinked package
import pinboard from '@phila/pinboard';
import '../node_modules/@phila/pinboard/dist/style.css';
// OR
// use this if running off linked package
// import pinboard from '../../vue3-pinboard/';

// data-sources
import immigrant from './data-sources/immigrant';

import customGreeting from './components/customGreeting.vue';
import expandCollapseContent from './components/ExpandCollapseContent.vue';

const customComps = markRaw({
  'customGreeting': customGreeting,
  'expandCollapseContent': expandCollapseContent,
});

import en1 from './tutorial/en-1.png';
import en2 from './tutorial/en-2.png';
import ar1 from './tutorial/ar-1.png';
import ar2 from './tutorial/ar-2.png';
import es1 from './tutorial/es-1.png';
import es2 from './tutorial/es-2.png';
import fr1 from './tutorial/fr-1.png';
import fr2 from './tutorial/fr-2.png';
import ht1 from './tutorial/ht-1.png';
import ht2 from './tutorial/ht-2.png';
import pt1 from './tutorial/pt-1.png';
import pt2 from './tutorial/pt-2.png';
import ru1 from './tutorial/ru-1.png';
import ru2 from './tutorial/ru-2.png';
import sq1 from './tutorial/sq-1.png';
import sq2 from './tutorial/sq-2.png';
import sw1 from './tutorial/sw-1.png';
import sw2 from './tutorial/sw-2.png';
import vi1 from './tutorial/vi-1.png';
import vi2 from './tutorial/vi-2.png';
import ch1 from './tutorial/zh-1.png';
import ch2 from './tutorial/zh-2.png';

import i18n from './i18n/i18n';
let $config = {
  tutorial: {
    'en-1': en1,
    'en-2': en2,
    'ar-1': ar1,
    'ar-2': ar2,
    'es-1': es1,
    'es-2': es2,
    'fr-1': fr1,
    'fr-2': fr2,
    'ht-1': ht1,
    'ht-2': ht2,
    'pt-1': pt1,
    'pt-2': pt2,
    'ru-1': ru1,
    'ru-2': ru2,
    'sq-1': sq1,
    'sq-2': sq2,
    'sw-1': sw1,
    'sw-2': sw2,
    'vi-1': vi1,
    'vi-2': vi2,
    'ch-1': ch1,
    'ch-2': ch2
  },
  publicPath: import.meta.env.VITE_PUBLICPATH,
  i18n: i18n.i18n,
  app: {
    logoAlt: 'Office of Immigrant Affairs, City of Philadelphia',
    type: 'immigrant',
    subtitle: 'i18n',
  },
  gtag: {
    category: 'rf-oia',
  },
  // printView: false,
  allowZipcodeSearch: true,
  allowPrint: true,
  retractableRefine: false,
  dropdownRefine: false,
  searchBar: {
    searchTypes: [
      'address',
      'zipcode',
      'keyword',
    ],
    searchDistance: 3,
    fuseThreshold: 0.3,
    fuseDistance: 500,
  },
  locationInfo: {
    siteNameField: 'organization_name',
    siteName: function(item) { return item.properties.organization_name },
    tagsPhrase: function(item) { return item.properties.languagesSpoken },
  },
  tags: {
    type: 'fieldValues',
    tags: [
      {
        type: 'array',
        field: 'tags',
        translate: true,
      },
      {
        type: 'array',
        field: 'services_offered',
        translate: true,
      },
      {
        type: 'value',
        field: 'organization_name',
      },
      {
        type: 'array',
        field: 'en_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'ar_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'ch_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'es_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'fr_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'hi_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'ht_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'pt_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'ru_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'sq_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'sw_synonyms',
        i18nDependent: true,
      },
      {
        type: 'array',
        field: 'vi_synonyms',
        i18nDependent: true,
      },
    ],
  },
  customComps,
  refine: {
    type: 'categoryField_array',
    value: function(item) {
      return item.properties.services_offered;
    }
  },
  dataSources: {
    immigrant,
  },
  mapLayer: {
    id: 'resources',
    source: 'resources',
    type: 'circle',
    paint: {
      'circle-radius': 7,
      'circle-color': '#9400c6',
      'circle-stroke-width': 1,
      'circle-stroke-color': 'white',
    },
  },
  footer: [
    {
      type: "native",
      href: "https://www.phila.gov/",
      attrs: {
        target: "_blank",
      },
      text: "app.cityOfPhiladelphia",
    },
    {
      type: "native",
      href: "/oia/resource-finder",
      text: "app.about",
    },
    {
      type: "native",
      href: "https://www.phila.gov/feedback/",
      attrs: {
        target: "_blank",
      },
      text: "app.feedback",
    },
    {
      type: "native",
      href: () => {
        const instance = getCurrentInstance();
        const i18nLocale = instance.appContext.config.globalProperties.$i18n.locale;
        return window.location.origin+window.location.pathname+'tutorial/'+i18nLocale+'-1';
      },
      attrs: {
        target: "_blank",
      },
      text: "app.tutorial1",
    },
    {
      type: "native",
      href: () => {
        const instance = getCurrentInstance();
        const i18nLocale = instance.appContext.config.globalProperties.$i18n.locale;
        return window.location.origin+window.location.pathname+'tutorial/'+i18nLocale+'-2';
      },
      attrs: {
        target: "_blank",
      },
      text: "app.tutorial2",
    },
  ],
};

pinboard($config);
export default $config;
