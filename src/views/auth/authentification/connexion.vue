<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line prettier/prettier
<template>
  <div>
    <headerView />
    <baseView>
      <div class="m-6">
       
      </div>

    </baseView>
    <footerView />
  </div>
</template>

<script>
import headerView from "@/components/layouts/header.vue";
import footerView from "@/components/layouts/footer.vue";
import baseView from "@/components/layouts/base.vue";
export default {
  name: "connexionView",
  components: {
    headerView,
    footerView,
    baseView
  },
};
</script>
<style lang="scss" scoped>

</style>
