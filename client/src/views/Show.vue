<template>
  
  <div>
    
    <h1>Show Word</h1>

    <!-- Display English word -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        <!-- Flag icon and label for English -->
        <i class="united kingdom flag"></i> English
      </div>
      
      <input type="text" disabled :value="word.english" />
    </div>
    <br />

    <!-- Display German word -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        
        <i class="germany flag"></i> German
      </div>
      
      <input type="text" disabled :value="word.german" />
    </div>
    <br />

    <!-- Display Spanish word -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        <!-- Flag icon and label for Spanish -->
        <i class="spain flag"></i> Spanish
      </div>
      
      <input type="text" disabled :value="word.spanish" />
    </div>
    <br />
    
    

    <!-- Button to navigate to the Edit page -->
    <div>
      <router-link
        :to="{ name: 'Edit', params: { id: this.$route.params.id } }"
        class="ui yellow button"
      >
        Edit word
      </router-link>
    </div>
  </div>
</template>

<script>
// Import the ViewWord function from the api helper file
import { ViewWord } from "../helpers/api.js";

export default {
  // Component name
  name: "Show",
  data() {
    return {
      // Object to store the word details
      word: {},
    };
  },
  // Lifecycle hook to fetch the word details when the component is mounted
  async mounted() {
    // Fetch the word details using the ID from the route parameters
    this.word = await ViewWord(this.$route.params.id);
  },
};
</script>

<style scoped>

</style>
