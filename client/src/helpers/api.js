
import axios from 'axios';

// Defining the base URL for the backend API
const backendURL = 'http://localhost:3000/vocabs/';

// Function to get all words from the backend API
export const ViewAllWords = async () => {
  try {
    // Sending a GET request to the backend URL to fetch all words
    const response = await axios.get(backendURL);
    // Returning the data from the response
    return response.data;
  } catch (err) {
    // Logging any errors that occur during the request
    console.error(err);
  }
};

// Function to get a single word by ID from the backend API
export const ViewWord = async (id) => {
  try {
    
    const response = await axios.get(backendURL + id);
    
    return response.data;
  } catch (err) {
    
    console.error(err);
  }
};

// Function to add a new word to the backend API
export const AddNewWord = async (word) => {
  try {
    
    const response = await axios.post(backendURL, word);
    
    return response.data;
  } catch (err) {
    
    console.error(err);
  }
};

// Function to update an existing word by ID in the backend API
export const EditWord = async (id, word) => {
  try {
    // Sending a PUT request to the backend URL with the specific ID and updated word data
    const response = await axios.put(backendURL + id, word);
    
    return response.data;
  } catch (err) {
    
    console.error(err);
  }
};

// Function to delete a single word by ID from the backend API
export const DeleteWord = async (id) => {
  try {
    
    const response = await axios.delete(backendURL + id);
    
    return response.data;
  } catch (err) {
    
    console.error(err);
  }
};

// Function to delete all words from the backend API
export const DeleteAllWords = async () => {
  try {
    
    const response = await axios.delete(backendURL);
    
    return response.data;
  } catch (err) {
    
    console.error(err);
  }
};

export const searchWords = async (searchTerms) => {
  try {
      const response = await axios.get(backendURL + 'search', { params: searchTerms });
      return response.data;
  } catch (err) {
      console.error(err);
      return [];
  }
};

