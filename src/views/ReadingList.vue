<template>
  <div>
    <h4>Reading List</h4>
    <li v-for="item in readingList" :key="item">{{item}} 
        <button @click="removeBook(item)">remove</button>
    </li>
  </div>
</template>

<script>
export default {
  updated() {

  },
  computed: {
    readingList() {
      return this.$store.state.ReadingList;
    },
  },
  methods:{
      removeBook(item){
          this.$store.commit('removeFromList', item)
      }
  }
};
</script>

<style>
</style>