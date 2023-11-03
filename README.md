# ece4880lab3 Repository Overview

The `ece4880lab3` repository is dedicated to a portfolio website project for ECE 4880 Lab 3. This document provides an overview of the repository's structure and its contents.

## Root Files

- **.eslintrc.cjs**: Contains ESLint configuration for maintaining JavaScript coding standards.
- **.prettierrc.json**: Prettier configuration file for ensuring consistent code formatting.
- **.vscode/extensions.json**: Recommendations for extensions in Visual Studio Code to enhance the development environment.
- **deploy.sh**: Shell script that is likely used to deploy the website to a server or hosting platform.
- **index.html**: The main HTML file that serves as the entry point for the website.
- **package-lock.json**: Auto-generated file to track exact versions of installed npm packages.
- **package.json**: Lists the dependencies and their specific versions that the project requires.
- **vite.config.js**: Configuration file for Vite, which is a frontend build tool.

## Public Assets

- **public/SamNPhoto1.jpg**
- **public/SamNPhoto2.JPEG**
- **public/SamNPhoto3.jpg**: These images are used within the portfolio sections of the website.
- **public/logo.ico**: The favicon for the website, displayed in the browser tab.

## Source Files

- **src/App.vue**: The main Vue.js component file for the application.
- **src/main.js**: The main JavaScript file that initializes the Vue.js app.
- **src/views/Colea.vue**
- **src/views/Home.vue**
- **src/views/Login.vue**
- **src/views/Lukef.vue**
- **src/views/Saml.vue**
- **src/views/Samn.vue**: Vue.js components representing different views or pages within the website.

## Styles and Assets

- **src/assets/TeamPhoto.jpg**: An image file
- **src/assets/base.css**
- **src/assets/main.css**: CSS files containing the base and main styles for the website's appearance.

## Running the Project Locally

To run the ece4880lab3 portfolio website on your local machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (which comes with [npm](http://npmjs.com/))

### Installation

1. Clone the repository and navigate to the directory:

   ```bash
   git clone https://github.com/SamNicklez/ece4880lab3.git
   cd ece4880lab3

2. To install the project dependencies, run the following command:
    
    ```bash
    npm install

### Firebase Configuration

Before running the application, you need to set up Firebase configuration:

1. Create a new file named `firebaseConfig.js` in the `src` directory.

2. Add the following configuration to the file, replacing `<your-...>` with your actual Firebase project settings:

    ```javascript
    const firebaseConfig = {
      apiKey: "<your-api-key>",
      authDomain: "<your-auth-domain>",
      projectId: "<your-project-id>",
      storageBucket: "<your-storage-bucket>",
      messagingSenderId: "<your-messaging-sender-id>",
      appId: "<your-app-id>",
      measurementId: "<your-measurement-id>"
    };
    
    export default firebaseConfig;

## Running the Application

3. To start the development server, use the following command:

    ```bash
    npm run dev

<small>Made with the assistance of GPT-4</small>


