<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <headerView />
    <footerView />
  </div>
</template>

<script>
import headerView from "@/components/layouts/header.vue";
import footerView from "@/components/layouts/footer.vue";
export default {
  name: "inscriptionView",
  components: {
    headerView,
    footerView,
  },
};
</script>

<style scoped></style>
