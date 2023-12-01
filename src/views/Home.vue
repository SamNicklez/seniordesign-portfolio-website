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
    <div class="row justify-center">
      <div class="col-12 text-center">
        <h2 class="team-header">Our Projects</h2>
      </div>
    </div>
    <v-container>
      <v-row fill-height>
        <!-- First Column with Card Component -->
        <v-col cols="12" md="6">
          <v-card class="d-flex flex-column" style="height: 100%;">
            <v-card-title>Project 1: </v-card-title>
            <v-card-text>
              portable temperature-measuring system
              along with a web interface. Features included a client-side user interface, with the ability to
              display temperature data and control certain functions through the GUI. For hardware, a third
              box contains a display to read out the temperature measured, a button, a battery, and a power
              switch. This box served as a battery-operated thermometer that helped display its temperature
              data on our client's GUI.
            </v-card-text>
            <v-img :width="400" cover src="./Project1.png"></v-img>
            <v-card-actions>
              <v-btn text href="https://github.com/SamNicklez/ece4880project1" target="_blank" rel="noopener"
                class="link-button">Source Code</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Second Column with Card Component -->
        <v-col cols="12" md="6">
          <v-card class="d-flex flex-column" style="height: 100%;">
            <v-card-title>Project 2:</v-card-title>
            <v-card-text>
              Designed and implemented the receiver side of an “electric eye” safety sensor system. We also need to send a
              text alert when the light beam is interrupted. In order to create
              this system, we used both hardware and software components. Our system is mostly a
              hardware system, but we do use a Raspberry Pi with a software program to send a text when
              the beam detects an obstacle. The main tasks that we needed to complete were receiving,
              filtering, amplifying, and detecting the transmitted signal.
            </v-card-text>
            <v-img src="./Project2.png"></v-img>
            <v-card-actions>
              <a href="/ECE_4880_Report_2.pdf" download="ECE_4880_Report_2.pdf">
                <v-btn text>Lab Report Download</v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div style=" color: white; margin-top: 5vh; margin: auto; width: 50%; padding: 10px; text-align-last: center;">
      <h1>Link to our Sourcecode!</h1>
      <v-btn color="primary" href="https://github.com/SamNicklez/ece4880lab3" target="_blank" rel="noopener"
        class="link-button">Github Link</v-btn>
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
  color: white;
  list-style-type: none;
}
</style>
