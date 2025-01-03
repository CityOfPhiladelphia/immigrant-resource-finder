<script setup>
// import { useRoute, useRouter } from 'vue-router';
// import { ref, computed, getCurrentInstance, onMounted, watch } from 'vue';

if (import.meta.env.VITE_DEBUG) console.log('ExpandCollapseContent.vue: import.meta.env.VITE_DEBUG:', import.meta.env.VITE_DEBUG);

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
  item: {
    type: Object,
    default: function(){
      return {};
    },
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});

// methods
const parseAddress = (address) => {
  const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
  return formattedAddress;
};

const parseServiceList = (list) => {
  console.log('parseServiceList:', list);
  let formattedService = [];
  for (let i in list) {
    if (list[i] === 'Legal services') {
      let legalLink = props.item.properties.website_legal;
      // let link = `<a href="${legalLink}" target="_blank">${$i18n.messages[i18nLocale][list[i]]}<i class='fa fa-external-link-alt'></i></a>`;
      let link = `<a href="${legalLink}" target="_blank">${t(list[i])} <i class='fa fa-external-link-alt'></i></a>`;
      formattedService.push(link);
    } else {
      // formattedService.push($i18n.messages[i18nLocale][list[i]]);
      formattedService.push(t(list[i]));
    }
  }
  return formattedService;
};

const makeValidUrl = (url) => {
  let newUrl = window.decodeURIComponent(url);
  newUrl = newUrl
    .trim()
    .replace(/\s/g, '');
  if (/^(:\/\/)/.test(newUrl)) {
    return `http${newUrl}`;
  }
  if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
    return `http://${newUrl}`;
  }
  return newUrl;
};

const parseTagsList = (list) => {
  const formattedTags = list.slice().sort().join(", ");
  return formattedTags;
};

</script>

<!-- <template>
  wawa
</template> -->
<template>
  <div :class="isMobile ? 'main-content-mobile' : 'main-content'">
    <div class="columns top-section">
      <div class="column is-6">
        <div
          v-if="item.properties.street_address"
          class="columns is-mobile"
        >
          <div class="column is-1">
            <font-awesome-icon icon="map-marker-alt" />
          </div>
          <div
            class="column is-11"
            v-html="parseAddress(item.properties.street_address)"
          />
        </div>
      </div>

      <div class="column is-6">
        <div
          v-if="item.properties.phone_number"
          class="columns is-mobile"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="phone" />
          </div>
          <div class="column is-11">
            {{ item.properties.phone_number }}
          </div>
        </div>

        <div
          v-if="item.properties.email"
          class="columns is-mobile"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="envelope" />
          </div>
          <div class="column is-11">
            <a :href="`mailto:${item.properties.email}`">{{ item.properties.email }}</a>
          </div>
        </div>

        <div
          v-if="item.properties.website"
          class="columns is-mobile website-div"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="globe" />
          </div>
          <div class="column is-11">
            <a
              target="_blank"
              :href="makeValidUrl(item.properties.website)"
            >
              {{ item.properties.website }}
              <font-awesome-icon icon="external-link-alt" />
            </a>
          </div>
        </div>

        <div
          v-if="item.properties.facebook_name"
          class="columns is-mobile"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </div>
          <div class="column is-11">
            <a
              target="_blank"
              :href="item.properties.facebook_name"
            >
              Facebook
            </a>
          </div>
        </div>

        <div
          v-if="item.properties.twitter"
          class="columns is-mobile"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </div>
          <div class="column is-11">
            <a
              target="_blank"
              :href="item.properties.twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="item.properties.services_offered"
    >
      <h3>
        {{ t('app.servicesOffered') }}
      </h3>
      <div class="columns is-multiline is-gapless">
        <div
          v-for="i in parseServiceList(item.properties.services_offered)"
          :key="i"
          class="column is-half"
          v-html="i"
        >
        </div>
      </div>
    </div>

    <div
      v-if="item.properties.tags && item.properties.tags.length"
    >
      <h3>
        Tags
      </h3>
      <div>
        {{ parseTagsList(item.properties.tags) }}
      </div>
    </div>
  </div>
</template>