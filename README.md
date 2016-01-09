
# Initial Setup #

Make sure node node.js and npm are installed

https://docs.npmjs.com/getting-started/installing-node

Run the following commands to download third party dependencies

1. `npm install`
2. `bower install`


## Compile SCSS ##

* Run `gulp` to manually compile. Will generate `assets/css/all.css`
* Run `gulp watch` to watch for changes while editing scss
* Run `gulp production` to minimize css after compiling. Will generate `assets/css/all.min.css`