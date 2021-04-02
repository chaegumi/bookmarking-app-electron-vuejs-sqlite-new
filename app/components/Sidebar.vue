<template>
  <div>
    <div class="ui visible sidebar" id="categories">
      <div id="cat-header">
        <h2><i class="bookmark icon"></i> Bookmark</h2>
      </div>
      <div class="container">
        <h2>
          Categories
          <span class="clickable right-float">
            <i class="add icon"></i>
          </span>
        </h2>

        <div class="ui list">
          <div class="item clickable">
            <div class="content">
              <a class="ui grey empty circular label"></a>
              <span>All</span>
            </div>
          </div>

          <div class="item clickable">
            <div class="content">
              <a class="ui empty circular label"></a>
              <span> PHP(1) </span>
            </div>
          </div>

          <div class="item clickable">
            <div class="content">
              <a class="ui empty circular label"></a>
              <span> Javascript(1) </span>
            </div>
          </div>
        </div>

        <button class="ui grey inverted basic icon circular button right-float">
          <i class="icon add"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  setup() {},
};
</script>