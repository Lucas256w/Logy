# Logy

Live: https://logy-blog.netlify.app/

API (Backend): https://github.com/Lucas256w/Logy-Backend

CMS (Content Management System): https://github.com/Lucas256w/Logy-CMS


# About

Logy is a personal blog site where users can come check out what I wrote and comment on my posts. I have designated author page for myself in order to manage (create, update, delete) these posts.

I created this project mainly to practice fullstack development by implementing a RESTful API for multiple client side applications while using JWT for authorization.

## Features

- Account creation with username, email, and password.
- All users can view posts
- Only registered users and make comments on posts
- Seperate author page for publishing, editing, deleting, and unpublishing post.

## Technology Features
### Frontend
- Made use of hooks such as useState, useEffect.
- React router to navigate through pages.
- Async and await to fetch data.

### Backend
- JWT for authorization.
- Model-view-controller (MVC) architecture design pattern to organize logic.
- Validator to validate requests.
- Bcrypt to secure password.

<h1>Screenshots</h1>

<h2>Desktop</h2>
<img width="800" alt="image" src="https://github.com/Lucas256w/Logy/assets/112456075/c5786675-0a27-4b4c-a06e-934c98e966ad">

<h2>Mobile</h2>
<img width="400" alt="image" src="https://github.com/Lucas256w/Logy/assets/112456075/b5d0729c-5c61-4163-85f9-c5792ffef289">



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
