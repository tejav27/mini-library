<template>
  <div>
      <router-link :to="'/singleBook/' + book.BookId" v-for="book in ChildrensBooks" :key="book.BookId">{{book.Title}}     |    </router-link>
  </div>
</template>

<script>
import ChildrensBooks from '../assets/ChildrensBooks.json'
export default {
    data(){return{
        ChildrensBooks:[...ChildrensBooks]
    }}
}
</script>

<style>

</style>