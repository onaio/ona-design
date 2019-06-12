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
To use local theme files in adjacent project repos, first create ona-design syslink:
```
// In ona-theme repo directory
$ yarn link
```
Second, link ona-design in the adjacent project:
```
// In adjacent project repo directory
$ yarn link ona-design
```
Finally, import `css` and/or `scss` files directly into stylesheets / components:

```scss
/* project/scss/main.scss */
@import '~ona-design/src/ona-design.scss'; // import everything, or
@import '~ona-design/src/buttons.scss'; // import specific modules
```
```js
// project/components/component.js
import 'ona-design/dist/ona-design.css';
```

Publishing
---
### Build
```
$ yarn build
```
### Publish
[WIP - CDN via: staging on heroku, production on gh-pages]
