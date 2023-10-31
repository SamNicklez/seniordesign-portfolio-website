<script>
import { useCookies } from "vue3-cookies";
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
    }),

    methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()
            if (valid) {
                this.cookies.set("isAdmin",'t')
                this.$router.go('/login')
            }
        },
        logOut(){
            this.cookies.set("isAdmin",'f')
            this.$router.go('/login')
        }
    },
}
</script>

<template>
    <div style="margin-top: 10vh;" v-if="(this.cookies.get('isAdmin') == 'f')">
        <v-sheet width="300" class="mx-auto">
            <v-form ref="form">
                <v-text-field v-model="user" :rules="nameRules" label="Username" required></v-text-field>
                <v-text-field type="password" v-model="password" :rules="nameRules" label="Password"
                    required></v-text-field>
                <div class="d-flex flex-column">
                    <v-btn color="success" class="mt-4" block @click="validate">
                        Submit
                    </v-btn>
                </div>
            </v-form>
        </v-sheet>
    </div>
    <div v-else style="max-width: 50vw;">
        User is logged in, add log out functionality
        <v-btn color="success" class="mt-4" block @click="logOut" style="max-width: 10vw;">
                        Log Out
        </v-btn>
    </div>
</template>

<style>
/* CSS STUFF GOES HERE */
</style>
