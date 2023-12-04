# Repository Overview for SamNicklez/ece4880lab3

Welcome to the GitHub repository for the project "ece4880lab3" by SamNicklez. This repository is structured to support a web-based project, involving Vue.js. Below is an overview of the key components of this repository:

### Configuration and Setup
- **.eslintrc.cjs & .prettierrc.json**: Configuration files for ESLint and Prettier, ensuring code quality and consistent formatting.
- **package.json & package-lock.json**: These files manage project dependencies and versions.
- **vite.config.js**: Configuration for Vite, a modern frontend build tool.
- **deploy.sh**: A shell script, for deploying the application to Github Pages.

### Source Code
- **src/**: The main source code directory.
  - **App.vue**: The main Vue component.
  - **main.js**: The entry point for the Vue application.
  - **views/**: Contains Vue components for different views/pages of the application, like `Home.vue`, `Login.vue`, `Colea.vue`, `Lukef.vue`, `Saml.vue`, and `Samn.vue`.
  - **assets/**: Static assets like images and CSS files.

### Public Assets
- **public/**: Contains public assets like images (`ColeAPhoto1.JPG`, `SamNPhoto1.jpg`, etc.) and a PDF file (`ECE_4880_Report_2.pdf`).

### Development Environment
- **.vscode/extensions.json**: Recommendations for Visual Studio Code extensions, to enhance the development experience.

### Web Content
- **index.html**: The main HTML file for the web application.
- **public/linkedin-badge.html**: HTML content related to LinkedIn, for profile badges.

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

<small>Made with the assistance of GPT-4</small
