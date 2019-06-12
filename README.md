# Ona Design
A Bootstrap theme for Ona products.

Development
---
To run, develop, and link the Ona Design Theme, from terminal:
### Clone
```
$ git clone https://github.com/onaio/ona-design.git
```
### Install
```
$ cd ona-design
$ yarn install
```
### Develop
This command compiles theme `sass` into `css`, watches for changes to `scss` files, and serves files at [`http://localhost:8001/`](http://localhost:8001).
```
$ yarn develop
```
### Integrate
To use local theme files in adjacent project repos, import `css` and `scss` files from locally served `dist` and `src` directories.
```scss
/* project/scss/main.scss */
@import('http://localhost:8001/src/ona-design.scss'); // import everything, or
@import('http://localhost:8001/src/buttons.scss'); // import specific modules
```

Publishing
---
### Build
```
$ yarn build
```
### Publish
[WIP - CDN via: staging on heroku, production on gh-pages]
