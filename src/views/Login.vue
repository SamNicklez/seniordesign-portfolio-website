<script>
import { useCookies } from "vue3-cookies";
import { db } from '@/main.js';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
export default {
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    data: () => ({
        user: '',
        password: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        select: null,
        data: [],
        errorEnable: false,
        errorText: "",
        errorType: "error"
    }),
    mounted() {
        this.errorEnable = false
    },
    methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()
            if (valid) {
                const userCollection = collection(db, "User");
                // Create a query against the collection
                const q = query(userCollection, where("user", "==", this.user), where("pass", "==", this.password));

                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    // User with this username found
                    const userData = querySnapshot.docs[0].data();
                    this.cookies.set("isAdmin", 't')
                    this.$router.go('/login')
                } else {
                    console.log('No user with this username found.');
                    this.errorText = "Username or Password is incorrect!"
                    this.errorType = "error"
                    this.errorEnable = true
                }
            }
        },
        logOut() {
            this.cookies.set("isAdmin", 'f')
            this.$router.go('/login')
        },
        async createAccount() {
            const { valid } = await this.$refs.form.validate()
            if (valid) {
                try {
                    // Query the "User" collection to check if the user already exists
                    const q = query(collection(db, "User"), where("user", "==", this.user));
                    const querySnapshot = await getDocs(q);
                    // Check if the user exists based on the query result
                    if (!querySnapshot.empty) {
                        this.errorText = "User already exists!"
                        this.errorType = "error"
                        this.errorEnable = true
                        return;  // Stop the function if the user exists
                    }

                    // Add a new document to the "User" collection
                    const docRef = await addDoc(collection(db, "User"), {
                        user: this.user,
                        pass: this.password
                    });
                    this.cookies.set("isAdmin", 't')
                    this.$router.go('/login')
                    //console.log("Document written with ID: ", docRef.id);
                } catch (error) {
                    this.cookies.set("isAdmin", 'f')
                    console.error("Error processing user: ", error);
                }
            }
        }
    }
}

</script>

<template>
    <v-alert v-if="errorEnable" :type="this.errorType" class="mx-auto" dense>
        {{ this.errorText }}
    </v-alert>
    <div style="margin-top: 15vh;" v-if="(this.cookies.get('isAdmin') == 'f')">
        <v-sheet width="300" class="mx-auto">
            <v-form ref="form">
                <v-text-field v-model="user" :rules="nameRules" label="Username" required></v-text-field>
                <v-text-field type="password" v-model="password" :rules="nameRules" label="Password"
                    required></v-text-field>
                <div class="d-flex flex-column">
                    <v-btn color="success" class="mt-4" block @click="validate">
                        Log In
                    </v-btn>
                    <v-btn class="mt-4" block @click="createAccount()">
                        Create account
                    </v-btn>
                </div>
            </v-form>
        </v-sheet>
    </div>
    <div v-else style="margin-top: 25vh;">
        <v-sheet width="300" class="mx-auto">
            <v-btn color="success" class="mt-4" block @click="logOut" style="max-width: 10vw;">
                Log Out
            </v-btn>
        </v-sheet>
    </div>
</template>

<style>
/* CSS STUFF GOES HERE */
</style>
