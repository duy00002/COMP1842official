<template>
    <div>
      <h1>Search your Word</h1>
      <form @submit.prevent="onSubmit">
        <!-- Input field for English word -->
        <div class="ui labeled input fluid">
          <div class="ui label"><i class="united kingdom flag"></i> English</div>
          <input type="text" v-model="searchTerms.english" />
        </div>
        <br />
        <!-- Input field for German word -->
        <div class="ui labeled input fluid">
          <div class="ui label"><i class="germany flag"></i> German</div>
          <input type="text" v-model="searchTerms.german" />
        </div>
        <br />
        <!-- Input field for Spanish word -->
        <div class="ui labeled input fluid">
          <div class="ui label"><i class="spain flag"></i> Spanish</div>
          <input type="text" v-model="searchTerms.spanish" />
        </div>
        <br />
        <!-- Search button -->
        <button class="ui primary button">Search</button>
      </form>
  
      <!-- Display search result if it exists -->
      <div v-if="result">
        <h2>Search Result</h2>
        <table class="ui celled compact table">
          <thead>
            <tr>
              <th>English</th>
              <th>German</th>
              <th>Spanish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ result.english }}</td>
              <td>{{ result.german }}</td>
              <td>{{ result.spanish }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { searchWords } from "../helpers/api.js";
  
  export default {
    name: "Search",
    data() {
      return {
        searchTerms: {
          english: '',
          german: '',
          spanish: '',
        },
        result: null
      };
    },
    methods: {
      // Method to clear the result whenever the input changes
      onInputChange() {
        this.result = null;
      },
      // Method to handle form submission
      async onSubmit() {
        const results = await searchWords(this.searchTerms);
        if (results.length > 0) {
          // Redirect to the Show page for the first matching word
          const firstResult = results[0];
          this.$router.push({ name: 'Show', params: { id: firstResult._id } });
        } else {
          this.result = null;
          this.flash("No matching words found.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  