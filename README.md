# Logy
### API: [repo](https://github.com/Lucas256w/Logy-Backend)
### CMS: [repo](https://github.com/Lucas256w/Logy-CMS)

<img width="800" alt="image" src="https://github.com/Lucas256w/Logy/assets/112456075/c5786675-0a27-4b4c-a06e-934c98e966ad">




# **:point_right: See it live [here](https://logy-blog.netlify.app/)**

Logy is a personal blog website where anyone can come and see posts but only logged-in users can write comments on post. The application consist of 2 frontend websites that connects to 1 API server to receive and use data. Logy is available to the public while CMS site is only accessible to me

I created this project mainly to practice fullstack development by implementing a RESTful API for multiple client side applications while using JWT for authorization.

## Features

- Published posts are available to all users, unpublished posts are only available on the CMS site.
- Only users can comment on posts.
- Only CMS site allows CRUD operations on posts.

## Run It Locally

### Prerequisites

- You'll need to install the Backend API repository and CMS repository along with this one to have access to all features
- You'll need to setup a MongoDB databse

### Cloning the repository

Make a appropriate directory and cd to it using the terminal

```bash
# Clone this repository
$ git clone git@github.com:Lucas256w/Logy.git

# Go into the repository
$ cd Logy
```

### Install dependencies

```bash
# Install dependencies
$ npm install
```

### Setting up environment variables

- Make a file at the root directory called `.env`.
- Populate `.env` located in server with the following environment variables:
  - `VITE_MODE`: Set to prod or dev to change the server it will connect to
  - `VITE_PROD_API`: The API that it will connect to if VITE_MODE is set to prod
  - `VITE_DEV_API`: The API that it will connect to if VITE_MODE is set to dev


### Starting the application

From root directory run the following commands:

```bash
# Start the server
$ npm run dev

```

## Technologies Used
- [React](https://react.dev/)
- [Nodejs](https://nodejs.org/)
- [Expressjs](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoosejs](https://mongoosejs.com/)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
