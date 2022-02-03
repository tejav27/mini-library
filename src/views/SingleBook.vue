<template>
<div>
    <button @click="backToBooks">Back to all books</button>
  <div class="single-book">
    <div class="item title">
      <h2>{{ book.Title }}</h2>
      <h4>By {{ book.Author }}</h4>
    </div>
    <div class="item description">
      <h4>By {{ book.Author }}</h4>
      <p>{{ book.Plot }}</p>
      <h5>Audience : {{ book.Audience }}</h5>
      <h5>Pages : {{ book.Pages }}</h5>
      <h5>First Published : {{ book.Year }}</h5>
      <h5>Publisher : {{ book.Publisher }}</h5>
      <button @click="addToReadingList">Oh yes! I want to read</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    backToBooks() {
      this.$router.push({ name: "BooksList" });
    },
    addToReadingList() {
      this.$store.commit('updateReadingList', this.book.Title)
      this.$router.push({ name: "ReadingList" });
    },
  },
  computed: {
    book() {
      return this.ChildrensBooks.find(
        (book) => book.BookId == this.$route.params.id
      );
    },
    ChildrensBooks(){
      return this.$store.state.ChildrensBooks
    }
  },
};
</script>

<style>
.single-book {
    display: flex;
    background-color: rgb(26, 25, 25);
    color:blanchedalmond;
    text-align: justify;
    padding: 10px;
    margin: 10px;
}
.item{
    flex: 1 1 5px;
}
.title{
    margin-top: 20px;
    place-items: end;
    border: rgb(88, 90, 84) 2px solid;
    background-color: rgb(23, 145, 98);
}
button{
    padding: 10px 15px;
    font-weight: bolder;
    margin: 5px;
}
.description{
    margin: 15px;
}
</style>