<script setup>

import { useConfigStore } from '@pinboard';
const $config = useConfigStore().config;
if (import.meta.env.VITE_DEBUG) console.log('$config:', $config);

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
  database: {
    type: Array,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});

const sections = ref({});
const subsections = ref({});

const i18nEnabled = computed(() => {
  if ($config.i18n) {
    return true;
  }
  return false;

});

const calloutOptions = computed(() => {
  return {};
});

const calloutSlots = computed(() => {
  return {
    text: 'test',
  };
});

watch(
  () => props.database,
  async nextDatabase => {
    subsections.value = getCounts();
  },
);

onMounted(async () => {
  sections.value = $config.sections;
});

//methods
const getCounts = () => {
  const DataStore = useDataStore();
  // console.log('customGreeting.vue getCounts is running');
  const refineData = props.database;
  // const refineData = this.sources[this.$appType].data.rows;

  let service = '';

  // console.log('in getRefineSearchList, refineData:', refineData);
  refineData.forEach((arrayElem) => {
    // console.log('arrayElem:', arrayElem);
    if (arrayElem.services_offered) {
      service += `${arrayElem.services_offered},`;
    } else if (arrayElem.attributes.CATEGORY) {
      service += `${arrayElem.attributes.CATEGORY},`;
    }
  });

  // TODO: break this into smaller chunks
  // let serviceArray = service.split(/(,|;)/);
  let serviceArray = service.split(',');
  serviceArray = serviceArray.map(s => s.trim());

  // const uniqArray = [ ...new Set(serviceArray) ];
  // console.log('serviceArray:', serviceArray, 'uniqArray:', uniqArray);
  //
  // // clean up any dangling , or ;
  // let uniq = uniqArray.filter(a => a.length > 2);
  //
  // uniq.filter(Boolean); // remove empties

  let countObject = serviceArray.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  return countObject;
}

</script>

<template>
  <div
    class="main-greeting"
  >
      <div class="half-data-section">
        <p v-html="t('introPage.p0')" />
      </div>

      <div class="half-data-section">
        <div class="has-text-centered container">
          <button
            class="button greeting-button"
            @click="$emit('view-list')"
            v-html="$t('app.viewList')"
          />
          <button
            v-if="isMobile"
            class="button greeting-button"
            @click="$emit('view-map')"
            v-html="$t('app.viewMap')"
          />
        </div>
      </div>

      <div class="half-data-section">
        <p v-html="t('introPage.p1')" />
      </div>

      <div class="half-data-section">
        <ul class="bullet-list">
          <li
            v-for="(item, index) in $config.i18n.data.messages['en'].introPage.ul1"
            :key="index"
          >
            {{ t('introPage.ul1.' + index) }}
          </li>
        </ul>
      </div>

      <div class="half-data-section">
        <h3>
          {{ t('introPage.section2Title') }}
        </h3>

        <p v-html="t('introPage.p2')" />
      </div>

      <div class="half-data-section">
        <h3>
          {{ t('introPage.section3Title') }}
        </h3>

        <p v-html="t('introPage.p3_1')" />
        <p v-html="t('introPage.p3_2')" />
      </div>

      <div class="half-data-section">
        <h3>
          {{ t('introPage.section4Title') }}
        </h3>

        <p v-html="t('introPage.p4')" />
      </div>

    </div>
    <!-- end of main-area -->
</template>

<style lang="scss" scoped>

.main-greeting {
  padding: 1rem;
}

.greeting-button {
  background-color: #0f4d90 !important;
  border-color: #0f4d90 !important;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  margin: 1rem;
}

.greeting-button:hover {
  background-color: #444444 !important;
}

.half-data-section {
  margin-bottom: 1rem;
}

</style>
