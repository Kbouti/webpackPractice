// Starting the webpack tutorial over. 
// Getting Started: 
// https://webpack.js.org/guides/getting-started/

// npm init -y
// npm install webpack webpack-cli --save-dev
// Make index.html file and /src/index.js
// Write test function in js

// include js and lodash script tags in index.html
// edit package.json from main:index to private:true

// First section done, but they state the problem is that while index.js does require the script Lodash, it isn't explicitly communicated. It works, but only because the lodash script is called before index.js.
// npm install --save lodash
// Add import lodash statement at top of index.js
// Remove lodash script tag in html and alter src/script.js to simply "main.js"
// npx webpack

// Create webpack.config.js file and populate with module.exports
// npx webpack --config webpack.config.js
// add build: webpack to package.json file. Now npm run build can be used in the command line
// npm run build

// Getting started section complete. Next is Asset management:
// https://webpack.js.org/guides/asset-management

// First alter the name of our script to bundle.js in html and webpack.config (I don't know why....)
// npm install --save-dev style-loader css-loader
// Add css and style-loader rules to webpack.config file

import _ from 'lodash';

function component() {
    const element = document.createElement(`div`);

    // Lodash, now imported by this script
    element.innerHTML = _.join([`hello`, `webpack`], ` `);

    return element;
}
document.body.appendChild(component());