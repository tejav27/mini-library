<template>
  <div>
      <router-link :to="'/singleBook/' + book.BookId" v-for="book in ChildrensBooks" :key="book.BookId">{{book.Title}}     |    </router-link>
  </div>
</template>

<script>
export default {
    computed: {
    ChildrensBooks(){
      return this.$store.state.ChildrensBooks
    }
  }
}
</script>

<style>

</style>