<template>
    <div id="app">
        <!-- Header with name and title -->
        <div class="header">
            <h1>Luke Farmer</h1>
            <p>Senior Electrical Engineering</p>
        </div>

        <!-- First row with links and bio -->
        <div class="row links-and-bio">
            <!-- GitHub Link -->
            <a href="https://github.com/LukeFarmer20" target="_blank" class="link-button">GitHub Link</a>
            
            <!-- Bio -->
            <div class="bio">Bio</div>
            
            <!-- Rick Roll Link -->
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="link-button">Rick Roll Link</a>
        </div>

        <!-- Second row with images -->
        <div class="row images">
            <div class="image">Image</div>
            <div class="image">Image</div>
            <div class="image">Image</div>
        </div>

        <!-- Comments Section -->
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
        }
    },
    methods: {
        async postComment() {
            if (this.newComment.trim() !== '') {
                try {
                    await addDoc(collection(db, "LukeComments"), {
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
                const querySnapshot = await getDocs(collection(db, "LukeComments"));
                this.comments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            } catch (error) {
                console.error("Error fetching comments: ", error);
            } finally {
                this.loadingComments = false;
            }
        }
    },
    mounted() {
        this.fetchComments(); // Fetch comments when component is mounted
    },
}
</script>


<style scoped>
/* Global Styles */
body, html {
  font-family: 'Arial', sans-serif; /* Use your preferred font */
}

#app {
  max-width: 1200px; /* Set a max-width for your app and center it */
  margin: 0 auto;
  padding: 20px;
}

/* Header Styles */
.header {
  text-align: center;
  margin-bottom: 50px; /* Add more space below the header */
}

.header h1 {
  font-size: 2.5em; /* Increase font size for the header */
  margin-bottom: 0.5em; /* Adjust space between the name and title */
}

.header p {
  font-size: 1.2em; /* Adjust font size for the title */
  color: #555; /* A subtle color for the title */
}

/* First Row Styles */
.links-and-bio {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically */
  margin-bottom: 30px; /* Add space below the row */
}

.link-button, .bio {
  flex: 1; /* Allow buttons and bio to take equal space */
  margin: 0 10px; /* Add space between elements */
  padding: 15px 20px; /* Increase padding for better touch targets */
  text-align: center; /* Center text for the bio */
}

/* Second Row Styles */
.images {
  display: flex;
  justify-content: space-between; /* Space out images */
  margin-bottom: 30px; /* Add space below the row */
}

.image {
  flex: 1; /* Allow images to take equal space */
  margin: 0 10px; /* Add space between images */
  background-color: #eee; /* A placeholder color */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; /* Adjust height as needed */
}

/* Comments Section Styles */
.comments-section {
  margin-top: 30px;
  width: 100%; /* Use full width for comments section */
  background: #f9f9f9; /* A light background for the section */
  padding: 20px; /* Add padding around the comments */
  border-radius: 8px; /* Slight rounding of corners */
}

.comment {
  background-color: #fff;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 15px; /* Add space between comments */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* A subtle shadow for depth */
}

.post-comment input, .post-comment button {
  height: 40px; /* Ensure input and button are the same height */
}

.post-comment input {
  width: calc(100% - 130px); /* Adjust input width to account for button */
  margin-right: 10px; /* Add space between input and button */
}

.post-comment button {
  width: 120px; /* Fix button width */
}

/* Add any additional styles you need here */

</style>
