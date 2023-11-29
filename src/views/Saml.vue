<template>
  <div class="bio">
    <button @click="launchConfetti" class="celebrate-button">Click Here!</button>
      <!-- Major and External Links -->
      <div class="info-and-links">
          <h1>Sam Loecke</h1>
          <h2>Major: Electrical Engineering</h2>
          <h2>Minor: Computer Science</h2>
          <v-btn color="primary" href="http://loeckebldg.com/" target="_blank" rel="noopener" class="link-button">LBSI</v-btn>
          <v-btn color="primary" href="https://www.nytimes.com/games/wordle/index.html" target="_blank" rel="noopener" class="link-button">Games</v-btn>
          <v-btn color="primary" href="https://open.spotify.com/user/samloecke21?si=a3793c5e47b74954" target="_blank" rel="noopener" class="link-button">Music</v-btn>
      </div>
      <!-- Display Picture and Name -->
      <v-carousel style="max-width: 90vw; height: 500px;" cycle>
        <v-carousel-item>
          <img :src="SamLPhoto1URL" class="carousel-image">
        </v-carousel-item>
        <v-carousel-item>
          <img :src="SamLPhoto2URL" class="carousel-image">
        </v-carousel-item>
        <v-carousel-item>
          <img :src="SamLPhoto3URL" class="carousel-image">
        </v-carousel-item>
      </v-carousel>

      <!-- Comments Section -->
      </div>
      <div class="comments-section">
          <h2>Comments</h2>
          <div v-if="loadingComments">Loading comments...</div>
          <div v-for="comment in comments" :key="comment.id" class="comment">
              <strong>{{ comment.user }}</strong>: {{ comment.comment }}
          </div>
          <div class="post-comment">
              <input type="text" v-model="newComment" placeholder="Write a comment..." />
              <button @click="postComment">Post Comment</button>
          </div>
      </div>
</template>

<script>
import { db } from '@/main.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useCookies } from "vue3-cookies";

export default {
  setup() {
      const { cookies } = useCookies();
      return { cookies };
  },
  data() {
      return {
          newComment: '', // Model for the new comment input
          comments: [], // Array to store comments from Firebase
          loadingComments: false, // Indicates if comments are being loaded
          SamLPhoto1URL: new URL('../assets/SamLPhoto1.JPG', import.meta.url).href,
          SamLPhoto2URL: new URL('../assets/SamLPhoto2.JPG', import.meta.url).href,
          SamLPhoto3URL: new URL('../assets/SamLPhoto3.jpg', import.meta.url).href
      }
  },
  methods: {
      async postComment() {
          if (this.newComment.trim() !== '') {
              try {
                  await addDoc(collection(db, "SamLComments"), {
                      user: this.cookies.get("user"),
                      comment: this.newComment
                  });
                  this.newComment = ''; // Clear the input after posting
                  this.fetchComments(); // Refresh the comments list
              } catch (error) {
                  console.error("Error adding comment: ", error);
              }
          }
      },
      async fetchComments() {
          this.loadingComments = true;
          try {
              const querySnapshot = await getDocs(collection(db, "SamLComments"));
              this.comments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          } catch (error) {
              console.error("Error fetching comments: ", error);
          } finally {
              this.loadingComments = false;
          }
      },
      async launchConfetti() {
      confetti({
        particleCount: 600,
        spread: 300,
        origin: { y: 0.6 }
      });
    }
  },
  mounted() {
      this.fetchComments(); // Fetch comments when component is mounted
  },
}
</script>


<style scoped>
body,
html {
  height: 100%;
  margin: 0;
}
.link-button{
  margin-left: 1vw;
  margin-bottom: 5vh;
  margin-top: 2.5vh;
}
.celebrate-button {
    padding: 10px 20px; /* Adds padding around the text */
    background-color: #4CAF50; /* Sets the background color */
    color: white; /* Sets the text color */
    border: none; /* Removes the border */
    border-radius: 5px; /* Rounds the corners */
    font-size: 8px; /* Sets the font size */
    cursor: pointer; /* Changes cursor to pointer on hover */
    transition: background-color 0.3s; /* Smooth transition for background color */
    margin-top: 20px; /* Adds margin at the top */
  }

  .celebrate-button:hover {
    background-color: #275529; /* Darker shade on hover */
  }

  .celebrate-button:focus {
    outline: none; /* Removes the outline when focused (for click) */
  }
.carousel-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%; /* Optional: Ensures the image doesn't exceed the container's height */
}
.bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 125vh;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

.external-links a {
  margin: 10px;
  text-decoration: none;
  color: #2196F3;
}

.external-links a:hover {
  text-decoration: underline;
}

/* Comments section styles */
.comments-section {
  min-height: 75vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10vh;
}

.comment {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.post-comment {
  margin-top: 20px;
}

.post-comment input {
  margin-right: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.post-comment button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #2196F3;
  color: white;
  cursor: pointer;
}

.post-comment button:hover {
  background-color: #0b7dda;
}
</style>
