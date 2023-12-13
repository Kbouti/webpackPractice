// Starting the webpack tutorial over. 
// Getting Started: 
// https://webpack.js.org/guides/getting-started/

// npm init -y
// npm install webpack webpack-cli --save-dev
// Make index.html file and /src/index.js
// Write test function in js

// include js and lodash script tags in index.html
// edit package.json from main:index to private:true

function component() {
    const element = document.createElement(`div`);

    // Lodash, currently included via a script, is required for tis to work:
    element.innerHTML = _.join([`hello`, `webpack`], ` `);

    return element;
}
document.body.appendChild(component());