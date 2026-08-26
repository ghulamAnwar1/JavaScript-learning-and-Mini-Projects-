const { response } = require("express");

const Promise1 = new Promise(function (resolve, reject) {
  // do an async call
  //DB calls, cryptography,network
  setTimeout(function () {
    console.log("Async task is completed:");
    resolve();
  }, 1000);
});

Promise1.then(function () {
  console.log("Promise consumed:");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed:");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Anwar", email: "Anwar@example.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Salar", password: 123 });
    } else {
      reject("Error: Something went wrong:");
    }
  }, 1000);
});

const userName = promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });

const promise5 = new Promise(function (res, rej) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Salar", password: 123 });
    } else {
      reject("Error: TS went wrong:");
    }
  }, 1000);
});

async function consumepromise5() {
  try {
    const responce = await promise5;
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}
consumepromise5();

async function getAllUsers() {
  try {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = responce.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
