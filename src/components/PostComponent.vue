<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
    <button @click="editThisPost">Edit</button>
  </div>
</template>

<script>
export default {
  props:{
    title: String,
    body: String,
    id: Number,
  },
  methods: {
    editThisPost(){
     // console.log("Edit this post=> ", this.title, this.id);
      this.$emit('editPost', {
        title: this.title,
        body: this.body,
        id: this.id
      });
    }
  }
}
</script>

<style scoped>
.container {
  border: 1px solid gray;
  padding:2.5px 5px;
  margin: 2.5px 5px;
}
</style>