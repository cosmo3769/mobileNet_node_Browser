# Image Classification On Browser

This project is for the sole purpose of "Integrating ML with Web". Bringing together the power of Machine Learning model and Node js to see what actually the model does in jupyter notebook or google colaboratory.

This is the one to see the predictions on screen made on classifying the image to it's respective classes. We can see both the **classes** & **probabilities**.

# REQUIREMENTS

###### node js

Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser, built on Chrome's V8 JavaScript engine.

###### Tensorflow Js

TensorFlow.js, an open-source library we can use to define, train, and run machine learning models entirely in the browser, using JavaScript and a high-level layers API.

###### MobileNet Model

MobileNets are small, low-latency, low-power models parameterized to meet the resource constraints of a variety of use cases.i.e., classification, segmentation, detection etc.

# Installing node and npm

[node](https://nodejs.org/en/)

[npm install](https://docs.npmjs.com/cli/install)

# Project directory and npm init

1.Go to your local directory and make a new folder as mobileNet_node_Browser(You can give any name to it).

2.Open your favourite code editor(in my case, i opened my vscode).

3.Make a local folder server with **mkdir server** in your terminal.

4.**cd server/** - In your terminal, write this to get inside server folder.

5.**npm init -y** - This will create a package.json file where all the dependencies of project exists.

###### package.json

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
}
```

# Installing the libraries

**npm install express bootstrap jQuery popper.js --save** - in your terminal type this.

###### Bootstrap | jQuery | popper.js

These libraries are needed for the view part of web page.

###### Express

This library is needed as this is a minimal and flexible Node.js web application framework and will help me in building a static server to run html files and other supporting files like css/js.

###### changes in code 

**package.json**

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^4.5.1",
    "express": "^4.17.1",
    "jquery": "^3.5.1",
    "popper.js": "^1.16.1"
  }
}
```

***NOTE*** - On installing these libraries, package-lock.json file is also created which contains all the information about the packages installed.

