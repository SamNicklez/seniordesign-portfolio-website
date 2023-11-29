<template>
    <div id="app">
        <!-- Header with name and title -->
        <div class="header">
            <h1>Luke Farmer</h1>
            <p>Senior Electrical Engineering</p>
        </div>

        <!-- First row with links and bio -->
        <div class="row links-and-bio">
            <button class="link-button">GitHub Link</button>
            <div class="bio">Bio</div>
            <button class="link-button">Rick Roll Link</button>
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


<style>
/* Style the second row */
.images {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px; /* Adjust as needed */
}

.image {
    width: 150px; /* Adjust as needed */
    height: 150px; /* Adjust as needed */
    background-color: #ccc; /* Placeholder color */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px; /* Adjust as needed */
    /* Add additional styles for images */
}

/* Complete the comment here if needed */
/* ... */

/* Existing comments section styles */
.comments-section {
    margin-top: 20px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.comment {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px; /* Add space between comments */
}

.post-comment input {
    margin-right: 5px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: calc(100% - 120px); /* Adjust the width to leave space for the button */
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
/* Add any additional styles you need here */