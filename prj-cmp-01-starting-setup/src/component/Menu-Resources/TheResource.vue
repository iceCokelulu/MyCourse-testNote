<template>
  <base-card>
    <base-button
      @click="setSelectedTab('store-resource')"
      :model="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :model="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoreResource from './StoreResource.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoreResource,
    AddResource,
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'store-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  data() {
    return {
      selectedTab: 'store-resource',
      storeResources: [
        {
          id: '1',
          title: '三明治',
          description: '一个膳食纤维和蛋白质丰富的三明治！',
          link: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
        },
        {
          id: '2',
          title: '牛排',
          description: '低温慢煮，战俘牛排！',
          link: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storeResources,
      putMenuResource: this.storeMenuResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    storeMenuResource(menuTitle, menuDes, menuLink) {
      this.storeResources.push({
        id: new Date().toISOString(),
        title: menuTitle,
        description: menuDes,
        link: menuLink,
      });
      this.selectedTab = 'store-resource';
    },
    removeResource(resId) {
      const indexId = this.storeResources.findIndex((res) => res.id === resId);
      this.storeResources.splice(indexId, 1);
    },
  },
};
</script>
<style scoped></style>
