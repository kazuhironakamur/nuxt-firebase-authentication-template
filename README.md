# nuxt firebase authentication template

## Build Setup

```bash
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
```

create `.env` file to root directory.
settings firebase api keys.

```bash
#.env file
FIREBASE_apiKey='abedcfghijklmnopqrstuvwxyz'
FIREBASE_authDomain='abedcfghijklmnopqrstuvwxyz'
FIREBASE_databaseURL='abedcfghijklmnopqrstuvwxyz'
FIREBASE_projectId='abedcfghijklmnopqrstuvwxyz'
FIREBASE_storageBucket='abedcfghijklmnopqrstuvwxyz'
FIREBASE_messagingSenderId='abedcfghijklmnopqrstuvwxyz'
FIREBASE_appId='abedcfghijklmnopqrstuvwxyz'
FIREBASE_measurementId='abedcfghijklmnopqrstuvwxyz'
```

# deploy your firebase

```bash
$ npm run generate
$ firebase deploy
```
