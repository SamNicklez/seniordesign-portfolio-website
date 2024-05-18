# Senior Design Lab 3 - Portfolio Website

**Team Members:** Cole Arduser, Luke Farmer, Sam Nicklaus, Sam Loecke  
**Course:** ECE:4880 Senior Design  
**Source Code:** [GitHub Repository](https://github.com/SamNicklez/ece4880lab3)  
**Website Link:** [Portfolio Website](https://samnicklez.github.io/ece4880lab3/#/)

## Introduction

This project focuses on developing a portfolio website to showcase team members' interests and projects. The website is publicly accessible and includes user comments and login/logout functionalities.

## Technology Stack

- **Front-end:** Vue.js 3, Vuetify
- **Back-end:** Google Firebase (Firestore)
- **Hosting:** GitHub Pages, Google Firebase

## Features

- User authentication (login/logout)
- User comments on personal pages
- Responsive design for various screen sizes
- Persistent navigation bar

## Design Overview

### Functionality

- **Home Page:** Information about the team and project links.
- **Personal Pages:** Individual pages for each team member, including a comment section.
- **Navigation:** Persistent navigation bar with links to home, login, and personal pages.

### Components

- **Vuetify:** Used for pre-built UI components like carousels, buttons, dropdowns, and image sheets.
- **Custom Components:** Tailored for specific functionalities such as comments and login.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SamNicklez/ece4880lab3.git
   cd ece4880lab3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run serve
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

- Access the home page for an introduction to the team and project links.
- Log in to view and comment on individual portfolio pages.
- Navigate through the site using the persistent navigation bar.

## Team Contributions

- **Samuel Nicklaus:** Team lead, project setup, comment feature, login implementation
- **Cole Arduser:** UI design planning, personal page, database design and setup
- **Luke Farmer:** UI design planning, personal page
- **Sam Loecke:** UI design planning, personal page

## Testing

### Software Test Results

| Test Description                                                                          | Result |
|-------------------------------------------------------------------------------------------|--------|
| Website opens and displays the home page (locally and publicly on GitHub pages)           | Pass   |
| Accessible team introduction page                                                         | Pass   |
| Comment boxes input and display comments                                                  | Pass   |
| Embedded figures inside all pages                                                         | Pass   |
| Account creation and login                                                                | Pass   |
| Incorrect information prompts appropriate message                                         | Pass   |
| Three personal pages with embedded figures and introductions                             | Pass   |
| External links redirect correctly                                                         | Pass   |
| Headers provide navigation to other pages                                                 | Pass   |
| Codebase stored in a GitHub repository                                                    | Pass   |
| Proper routing to all pages                                                               | Pass   |
| Clean UI/UX design throughout the website                                                 | Pass   |

## Conclusion

The project successfully met all the specified requirements, enhancing our skills in developing publicly hosted websites and using GitHub efficiently.

## References

- [Vue Router](https://router.vuejs.org/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Vue.js Devtools](https://github.com/vuejs/devtools)
- [Vuetify](https://vuetifyjs.com/)
- [Vue.js](https://vuejs.org/)
- [vue3-cookies](https://www.npmjs.com/package/vue3-cookies)
- [Vitest](https://vitest.dev/)
