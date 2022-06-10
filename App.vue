<template>
  <div id="app">
    <el-scrollbar style="height: 100%" ref="scrollbar">
      <router-view v-if="isRouterAlive"></router-view
    ></el-scrollbar>
  </div>
</template>

<script>
import Event from '@/utils/VueEvent'
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  computed: {
    homePageConfig() {
      return this.$store.getters.homePageConfig
    },
  },
  created() {
    if (Object.keys(this.homePageConfig).length) {
      this.$store.commit('SET_PAGE_CONFIG', this.homePageConfig)
    }
  },
  mounted() {
    let scrollbarEl = this.$refs.scrollbar.wrap
    scrollbarEl.onscroll = () => {
      let height = scrollbarEl.scrollTop
      this.$store.commit('SET_SCROLL_HEIGHT', height)
      Event.$emit('documentScroll', height)
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
  },
}
</script>
<style lang="scss">
@import './styles/index';
.el-table--border th.gutter:last-of-type {
  display: block !important;
  width: 17px !important;
}
</style>
