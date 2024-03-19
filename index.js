const portfolio_performance_analyzer = require('portfolio-performance-analyzer');
const portfolio_profile_getter = require('portfolio-profile-getter');
const webpack_cli = require('webpack-cli');
const debug = require('debug');
const jquery = require('jquery');
const babel_core = require('babel-core');
const fs_extra = require('fs-extra');
const dotenv = require('dotenv');
const sequelize = require('sequelize');
const pg = require('pg');
const socket.io = require('socket.io');
const chalk = require('chalk');
const react_dom = require('react-dom');
const sinon = require('sinon');
const underscore = require('underscore');
const truffle = require('truffle');
const bluebird = require('bluebird');
const mysql = require('mysql');

const words = ['spray', 'limit', 'elite', 'exuberant'];
const result = words.filter(word => word.length > 6);
console.log(`Filtered words: ${result}`);

// Merge two objects into one
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log('Merged object:', mergedObject);

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}
const myRectangle = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${myRectangle.area()}`);

// Get the list of supported Ethereum networks
web3.eth.net.getNetworkType().then(networkType => {
  console.log('Network type:', networkType);
}).catch(err => {
  console.error('Error getting network type:', err);
});

const greet = (name) => {
  console.log(`Greetings, ${name}!`);
};
greet('Alice');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved after 3 seconds.');
  }, 3000);
});
promise.then(message => console.log(message));

const user = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = user;
console.log(`User's name is ${firstName} ${lastName}`);

const calculateInterest = (principal, rate, time) => {
  return principal * rate * time / 100;
};
console.log(calculateInterest(1000, 5, 2));

const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(`Files in the directory: ${files.join(', ')}`);
});

const path = require('path');
console.log(`The file name is ${path.basename(__filename)}`);