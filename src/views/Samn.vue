<template>
    <div class="bio">
        <!-- Major and External Links -->
        <div class="info-and-links">
            <h1>Samuel Nicklaus</h1>
            <h2>Major: Computer Science and Engineering</h2>
            <h2>Minor: Mathematics</h2>
            <v-btn color="primary" href="https://github.com/SamNicklez" target="_blank" rel="noopener" class="link-button">Github</v-btn>
            <v-btn color="primary" href="https://www.linkedin.com/in/sam-nicklaus/" target="_blank" rel="noopener" class="link-button">LinkedIn</v-btn>
            <v-btn color="primary" href="https://samnicklez.github.io/ModernResume/#/" target="_blank" rel="noopener" class="link-button">Personal Website</v-btn>
        </div>
        <!-- Display Picture and Name -->
        <v-carousel style="max-width: 90vw;" cycle>
            <v-carousel-item src="./SamNPhoto2.JPEG" cover></v-carousel-item>
            <v-carousel-item src="./SamNPhoto1.jpg" cover></v-carousel-item>
            <v-carousel-item src="./SamNPhoto3.jpg" cover></v-carousel-item>
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
        }
    },
    methods: {
        async postComment() {
            if (this.newComment.trim() !== '') {
                try {
                    await addDoc(collection(db, "SamNComments"), {
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
                const querySnapshot = await getDocs(collection(db, "SamNComments"));
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
  