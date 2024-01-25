import _ from 'lodash';
import myName from './myName';
// import anotherFunction from './myName';

function component(){
    const element = document.createElement(`div`);
    element.innerHTML = _.join([`Hello`, `webpack`], ` `);
    return element;
}

function sayHello(name){
    const newElement = document.createElement(`div`);
    newElement.innerHTML = myName(name);
document.body.appendChild(newElement);
    console.log(myName(name));
}
sayHello(`Kevin`)

// anotherFunction();

document.body.appendChild(component());