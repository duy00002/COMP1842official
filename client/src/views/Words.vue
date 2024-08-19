<template>
  <div class="words-container">
    <h1>Word List</h1>
    <table class="ui celled compact table">
      <tr>
        <th>English</th>
        <th>German</th>
        <th>Spanish</th>
        
        <th colspan="3">Menu</th>
      </tr>
      <tr v-for="(word, i) in words" :key="i">
        <td>{{ word.english }}</td>
        <td>{{ word.german }}</td>
        <td>{{ word.spanish }}</td>
        
        <td>
          <router-link
            class="ui button green"
            :to="{ name: 'Show', params: { id: word._id } }"
          >Show</router-link>
        </td>
        <td>
          <router-link
            class="ui button yellow"
            :to="{ name: 'Edit', params: { id: word._id } }"
          >Edit</router-link>
        </td>
        <td>
          <a
            @click.prevent="onDelete(word._id)"
            href="`/vocabs/${word._id}`"
            class="ui red button"
          >Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ViewAllWords, DeleteWord } from "../helpers/api";

export default {
  name: "Words",
  data() {
    return {
      words: [],
    };
  },
  async mounted() {
    this.words = await ViewAllWords();
  },
  methods: {
    async onDelete(id) {
      const deleteConfirm = window.confirm(
        "Are you sure to delete this word?"
      );
      if (deleteConfirm) {
        await DeleteWord(id);
        const updatedWords = this.words.filter((word) => word._id !== id);
        this.words = updatedWords;
        this.flash("Delete word succeed!");
      }
    },
  },
};
</script>

<style scoped>
.template {
  background-color: #302f63;
}
.words-container {
  background-color: #302f63; 
  color: #302f63; 
  padding: 1em; 
}

.ui.table {
  background-color: white; 
}

h1 {
  color: white; 
}
</style>