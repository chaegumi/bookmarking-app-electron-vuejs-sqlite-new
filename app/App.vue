<template>
  <div id="app">
    <sidebar></sidebar>
    <bookmark-list></bookmark-list>
  </div>
</template>
<script>
import { useStore } from "vuex";
import Sidebar from "@/components/Sidebar.vue";
import BookmarkList from "@/components/BookmarkList.vue";

export default {
  components: {
    Sidebar,
    BookmarkList,
  },
  setup() {
    const store = useStore();
    // console.log(store);
    // console.log(window.db);
    store.dispatch("bookmark/getBookmarks", {});
  },
};
</script>