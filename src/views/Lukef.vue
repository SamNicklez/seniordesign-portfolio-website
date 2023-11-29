<template>
    <div class="bio">
        <!-- Major and External Links -->
        <div class="info-and-links">
            <h1>Luke Farmer</h1>
            <h2>Electrical and Computer Engineering</h2>
            <h3> I'm a senior electrical and computer engineering major with a computer science minor. Below is a picture of me on the first day of junior year, a picture of my roommates and I, and a picture of my dog.</h3>
            <v-btn color="primary" href="https://github.com/LukeFarmer20" target="_blank" rel="noopener" class="link-button">Github</v-btn>
            <v-btn color="primary" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener" class="link-button">Informative Link</v-btn>
            <v-btn color="secondary" @click="showFlashMessage">Show Flash Message</v-btn>

            <!-- Flash Message Container -->
            <div v-if="flashMessage" class="flash-message">
                {{ flashMessageContent }}
            </div>
        </div>
        <!-- Display Picture Carousel -->
        <div class="image-container">
            <img :src="LukePhoto1URL" class="profile-image">
            <img :src="LukePhoto2URL" class="profile-image">
            <img :src="LukePhoto3URL" class="profile-image">
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
            flashMessage: false, // Whether the flash message is visible
            flashMessageContent: "I hope you're having a great day!", // The content of the flash message
            LukePhoto1URL: new URL('../assets/LukePhoto1.JPG', import.meta.url).href,
            LukePhoto2URL: new URL('../assets/LukePhoto2.JPEG', import.meta.url).href,
            LukePhoto3URL: new URL('../assets/LukePhoto3.jpg', import.meta.url).href
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
        },
        showFlashMessage() {
            this.flashMessage = true;
            setTimeout(() => {
                this.flashMessage = false;
            }, 3000); // The message will disappear after 3 seconds
        }        
    },
    mounted() {
        this.fetchComments(); // Fetch comments when component is mounted
    },
}
</script>


<style scoped>
/* Reset margins and padding to handle inconsistencies across browsers */
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Arial', sans-serif; /* Preferred font */
}

/* Center the bio section and give it a minimum height */
.bio {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Align to top if content is smaller than the viewport height */
    min-height: 100vh;
    text-align: center;
}

/* Style the information and links section */
.info-and-links {
    padding: 2rem 0; /* Add padding above and below the content */
}

/* Header styles */
h1 {
    font-size: 3rem; /* Large font size for the name */
    margin-bottom: 0.5rem; /* Spacing between the name and the major */
    color: #333; /* Darker text for better readability */
}

h2 {
    font-size: 1.5rem; /* Slightly smaller font size for the major */
    color: #555; /* Lighter text color */
    margin-bottom: 1rem; /* Spacing between the major and buttons */
}

h3{
    font-size: 1rem;
    color: #555;
    margin: 1rem;
}

/* Button styles */
.v-btn {
    margin: 0.5rem; /* Spacing around buttons */
    font-size: 1rem; /* Font size for the text in buttons */
}

/* Carousel styles */
.v-carousel {
    margin-bottom: 2rem; /* Spacing between the carousel and the comments section */
}

/* Comments section styles */
.comments-section {
    width: 90%; /* Width of the comments section */
    max-width: 800px; /* Maximum width to maintain readability */
    margin: auto; /* Center the comments section horizontally */
    padding: 1rem; /* Padding inside the comments section */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow for depth */
    border-radius: 8px; /* Rounded corners */
    background: #f9f9f9; /* Light background color */
}

.comment {
    background-color: #fff;
    padding: 0.8rem;
    border-radius: 4px;
    margin-bottom: 1rem; /* Space between comments */
    box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* Subtle shadow for each comment */
}

.post-comment {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post-comment input {
    flex: 1; /* Input field takes up remaining space */
    padding: 0.8rem;
    margin-right: 1rem; /* Space between input field and button */
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.post-comment button {
    padding: 0.8rem 1.6rem;
    border: none;
    border-radius: 4px;
    background-color: #2196F3;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s; /* Smooth transition for button background color */
}

.post-comment button:hover {
    background-color: #0b7dda; /* Darken button color on hover */
}

/* Image container styles */
.image-container {
    display: flex; /* Align images in a row */
    justify-content: center; /* Center images horizontally */
    gap: 1rem; /* Add space between images */
    margin: 2rem 0; /* Add vertical space above and below the image container */
}

/* Individual image styles */
.profile-image {
    width: calc(33.333% - 0.666rem); /* Divide space equally between images, accounting for gap */
    height: auto; /* Maintain aspect ratio */
    border-radius: 4px; /* Optional: round the corners of the images */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: add a subtle shadow for depth */
}


/* Add responsive adjustments if needed */
@media (max-width: 768px) {

    .image-container {
        flex-direction: column; /* Stack images vertically on small screens */
        gap: 0.5rem; /* Smaller gap between images on small screens */
    }
    .profile-image {
        width: 90%; /* Adjust image width on small screens */
        margin: auto; /* Center images vertically on small screens */
    }
    .v-btn {
        margin: 0.3rem; /* Smaller margins for buttons on small screens */
    }
    .post-comment {
        flex-direction: column; /* Stack input and button on small screens */
    }
    .post-comment input {
        margin-right: 0; /* Remove margin between input and button on small screens */
        margin-bottom: 1rem; /* Add space below input field on small screens */
    }
}

.flash-message {
    position: fixed; /* Position it relative to the viewport */
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for the element's size */
    padding: 4rem; /* Increase padding for a larger box */
    font-size: 2em; /* Increase font size for a larger text */
    font-size: 4vw;
    background-color: #4CAF50; /* A pleasant green background */
    color: white; /* Text color */
    border-radius: 4px; /* Rounded corners */
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Subtle shadow */
    animation: flash-animation 3s; /* Animation defined below */
    z-index: 1000; /* Ensure it's on top of other elements */
}

/* Keyframes for the flash message animation */
@keyframes flash-animation {
    0%, 100% { opacity: 0; }
    10%, 90% { opacity: 1; }
}


</style>
