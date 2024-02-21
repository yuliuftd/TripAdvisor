# Getting Started with the Project

This guide is designed to help beginners set up and run the project locally on their machines. Follow the steps below to get started.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v14 or later)
- npm (v6 or later) or Yarn (v1.22 or later)

You can check the versions of Node.js and npm/Yarn installed on your system by running the following commands in your terminal:
```bash
node -v
npm -v # or yarn -v
```

## Clone the Repository

First, clone the repository to your local machine using Git. Open your terminal, navigate to the directory where you want to clone the project, and run:
```bash
git clone https://<username>@bitbucket.org/socoro/wetripn.git`
```

## Install Dependencies


Navigate into the project directory:
```bash 
cd <project-directory>
```

Replace <project-directory> with the name of the directory that was created when you cloned the repository.

Next, install the project dependencies using npm or Yarn:

```
bash
npm install
# or
yarn install
```

## Running the Project


Once the dependencies are installed, you can run the project locally using the following command:
```
bash
npm run dev
# or
yarn dev
```

This command starts the development server. Open your browser and visit http://localhost:3000 to view the project.


## Building for Production

To build the project for production, run:
```
bash
npm run build
# or
yarn build
```

After the build process completes, you can start the production server with:

```
bash
npm start
# or
yarn start
```
## Additional Commands

To lint the project, run:
```
bash
npm run lint
# or
yarn lint
```

To format the codebase using Prettier, run:
```
bash
npm run format
# or
yarn format
```

Refer to the package.json file for more scripts that you can run:

```
bash
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
    ```