<template>
  <div>
    <h1>New Word</h1>
    <form @submit.prevent="onSubmit">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="united kingdom flag"></i> English</div>
        <input type="text" required v-model="word.english" />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="germany flag"></i> German</div>
        <input type="text" required v-model="word.german" />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="spain flag"></i> Spanish</div>
        <input type="text" required v-model="word.spanish" />
      </div>
      <br>
      
      <button class="ui primary button">Submit</button>
    </form>
  </div>
</template>

<script>
import { AddNewWord } from "../helpers/api";

export default {
  name: "New",
  data() {
    return {
      word: {
        english: "",
        german: "",
        spanish: "",
        


      },
    };
  },
  methods: {
    onSubmit: async function () {
      await AddNewWord(this.word);
      this.flash('Add new word succeed!')
      this.$router.push(`/words`);
    },
  },
};
</script>