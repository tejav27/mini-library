<template>
  <div class="list">
    <router-link
      class="book-view"
      :to="'/singleBook/' + book.BookId"
      v-for="book in ChildrensBooks"
      :key="book.BookId"
      >{{ book.Title }}
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    ChildrensBooks() {
      return this.$store.state.ChildrensBooks;
    },
  },
};
</script>

<style>
.book-view {
  border: 3px solid teal;
  background-color: rgb(248, 241, 228);
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  color: rgb(56, 51, 51);
}
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>