<script>
import { useCookies } from "vue3-cookies";
export default {
    data() {
        return {
            items: [],
            teamMembers: [
                { name: 'Samuel Nicklaus', info: 'Samuel Nicklaus - Computer Science and Engineering Major' },
                { name: 'Cole Arduser', info: 'Cole Arduser - Computer Science and Engineering Major' },
                { name: 'Luke Farmer', info: 'Luke Farmer - Electrical Engineering Major, Computer Track' },
                { name: 'Sam Loecke', info: 'Sam Loecke - Electrical Engineering Major, Computer Track' }
            ]
        }
    },
    setup() {
        const { cookies } = useCookies();
        return { cookies };
    },
    mounted() {
        // let my_cookie_value = this.cookies.get("myCoookie")
        // console.log(my_cookie_value)
        // this.cookies.set("myCoookie", "abcdefg")
    },
    async created() {
        // const querySnapshot = await getDocs(collection(db, 'User'));
        // this.items = querySnapshot.docs.map(doc => doc.data());
    },
    methods: {
        doStuff() {
            //console.log(this.items)
        }
    },
}
</script>

<template>
    <div class="portfolio-container">
      <div class="row justify-center">
        <div class="col-12 text-center">
          <h1 class="portfolio-title">Team 3 Portfolio</h1>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-12 text-center">
          <img class="team-image" src="../assets/TeamPhoto.jpg" />
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-12 text-center">
          <h2 class="team-header">Meet the Team</h2>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-12 text-center">
          <ul class="team-list">
            <li v-for="member in teamMembers" :key="member.name">
              {{ member.info }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  

<style scoped>
body,
html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow: hidden;
    /* To ensure no scrollbars appear */
}

.team-image {
    max-width: 600px;
    margin: 20px 0;
}

.portfolio-container {
    background-color: #212121;
    min-height: 150vh;
}

.portfolio-title {
    font-size: 42px;
    font-weight: bold;
    color: white;
}

.team-image {
    max-width: 600px;
    margin: 10px 0;
}

.team-header {
    font-size: 42px;
    margin-top: 10px;
    color: white;
}

.team-list {
    max-width: 600px;
    font-size: 20px;
    margin: 0 auto;
    color:white;
    list-style-type: none;
}
</style>
