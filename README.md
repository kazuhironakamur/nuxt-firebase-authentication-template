# nuxt firebase authentication template

## Build Setup

```bash
# clone this repository.
$ git clone https://github.com/kazuhironakamur/nuxt-firebase-authentication-template manuable

# create .env file. this file need firebase api keys.
#.env file
$ vi .env
FIREBASE_apiKey='abedcfghijklmnopqrstuvwxyz'
FIREBASE_authDomain='abedcfghijklmnopqrstuvwxyz'
FIREBASE_databaseURL='abedcfghijklmnopqrstuvwxyz'
FIREBASE_projectId='abedcfghijklmnopqrstuvwxyz'
FIREBASE_storageBucket='abedcfghijklmnopqrstuvwxyz'
FIREBASE_messagingSenderId='abedcfghijklmnopqrstuvwxyz'
FIREBASE_appId='abedcfghijklmnopqrstuvwxyz'
FIREBASE_measurementId='abedcfghijklmnopqrstuvwxyz'

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# install firebase SDK

```bash
$ npm install --save firebase
```

# settings firebase

```bash
$ firebase init
# checked Hosting
# changed public directory. public -> dist
? What do you want to use as your public directory? (public) dist
```

# deploy your firebase

```bash
$ npm run generate
$ firebase deploy
```
