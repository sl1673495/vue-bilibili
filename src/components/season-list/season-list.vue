<template>
 <div class="season-list">
   <ul class="season-list-ul">
    <li class="season-item" v-for="item in list" :key="item.season_id">
       <season-item :item="item"></season-item>
     </li>
   </ul>
 </div>
</template>

<script type="text/ecmascript-6">
import SeasonItem from "../season-item/season-item";
export default {
  props: ["list"],
  data() {
    return {};
  },
  components: {
    SeasonItem
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.season-list {
  .season-list-ul {
    display: flex;
    flex-wrap: wrap;

    .season-item {
      flex: 0 0 50%;
    }
  }
}
</style>
