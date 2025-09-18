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

import i18n from './i18n/i18n';
let $config = {
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
  ],
};

pinboard($config);
export default $config;
