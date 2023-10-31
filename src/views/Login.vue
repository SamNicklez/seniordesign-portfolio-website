<script>
import { useCookies } from "vue3-cookies";
export default {
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    data: () => ({
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
    }),

    methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()

            if (valid) alert('Form is valid')
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>

<template>
    <div style="margin-top: 10vh;" v-if="(this.cookies.get('isAdmin') == 'f')">
        <v-sheet width="300" class="mx-auto">
            <v-form ref="form">
                <v-text-field v-model="email" :counter="10" :rules="nameRules" label="Email" required></v-text-field>
                <v-text-field type="password" v-model="password" :counter="10" :rules="nameRules" label="Namwe"
                    required></v-text-field>
                <div class="d-flex flex-column">
                    <v-btn color="success" class="mt-4" block @click="validate">
                        Submit
                    </v-btn>
                </div>
            </v-form>
        </v-sheet>
    </div>
    <div v-else>
        User is logged in, add log out functionality
    </div>
</template>

<style>
/* CSS STUFF GOES HERE */
</style>
