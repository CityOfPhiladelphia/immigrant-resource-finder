<template>
  <div :class="isMobile ? 'main-content-mobile' : 'main-content'">
    <div class="columns top-section">
      <div class="column is-6">
        <div
          v-if="item.street_address"
          class="columns is-mobile"
        >
          <div class="column is-1">
            <font-awesome-icon icon="map-marker-alt" />
          </div>
          <div
            class="column is-11"
            v-html="parseAddress(item.street_address)"
          />
        </div>
      </div>

      <div class="column is-6">
        <div
          v-if="item.phone_number"
          class="columns is-mobile"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="phone" />
          </div>
          <div class="column is-11">
            {{ item.phone_number }}
          </div>
        </div>

        <div
          v-if="item.email"
          class="columns is-mobile"
        >
          <div
            class="column is-1"
          >
            <font-awesome-icon icon="envelope" />
          </div>
          <div class="column is-11">
            <a :href="`mailto:${item.email}`">{{ item.email }}</a>
          </div>
        </div>

        <div
          v-if="item.website"
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
              :href="makeValidUrl(item.website)"
            >
              {{ item.website }}
              <font-awesome-icon icon="external-link-alt" />
            </a>
          </div>
        </div>

        <div
          v-if="item.facebook_name"
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
              :href="item.facebook_name"
            >
              Facebook
            </a>
          </div>
        </div>

        <div
          v-if="item.twitter"
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
              :href="item.twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="item.services_offered"
    >
      <h3>
        {{ $t('app.servicesOffered') }}
      </h3>
      <div class="columns is-multiline is-gapless">
        <div
          v-for="i in parseServiceList(item.services_offered)"
          :key="i"
          class="column is-half"
          v-html="i"
        >
          <!-- {{ i }} -->
        </div>
      </div>
    </div>

    <div
      v-if="item.tags && item.tags.length"
    >
      <h3>
        Tags
      </h3>
      <div>
        {{ parseTagsList(item.tags) }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExpandCollapseContent',
  props: {
    item: {
      type: Object,
      default: function(){
        return {};
      },
    },
  },
  computed: {
    i18nLocale() {
      return this.$i18n.locale;
    },
  },

  methods: {
    parseAddress(address) {
      const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
      return formattedAddress;
    },
    parseServiceList(list) {
      console.log('parseServiceList:', list, 'this.item:', this.item, 'this.$i18n.messages:', this.$i18n.messages);
      let formattedService = [];
      for (let i in list) {
        if (list[i] === 'Legal services') {
          let legalLink = this.item.website_legal;
          let link = `<a href="${legalLink}" target="_blank">${this.$i18n.messages[this.i18nLocale][list[i]]}<i class='fa fa-external-link-alt'></i></a>`;
          formattedService.push(link);
        } else {
          formattedService.push(this.$i18n.messages[this.i18nLocale][list[i]]);
        }
      }

      return formattedService;
    },
    makeValidUrl(url) {
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
    },
    parseTagsList(list) {
      const formattedTags = list.slice().sort().join(", ");
      return formattedTags;
    },
  },

};
</script>