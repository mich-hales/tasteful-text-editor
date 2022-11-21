# Tasteful Text Editor

## Description

This application is a text editor that runs in the browser. It is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

-- update here --

To build this text editor, you will start with an existing application and implement methods for getting and storing data to an IndexedDB database. You will use a package called `idb`, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

-- end --

## Usage

To start this application, run `npm run start` from the root directory.

* When the text editor application is run from the terminal, then the user will find that their JavaScript files have been bundled using webpack.
* When the the webpack plugins are run, then the user finds that they have a generated HTML file, service worker, and a manifest file.
* When next-gen JavaScript is used in the application, then the user finds that the text editor still functions in the browser without errors.
* When the text editor is opened, then the user finds that IndexedDB has immediately created a database storage.
* When the content is entered and the user subsequently clicks off of the DOM window, then they will find that the content in the text editor has been saved with IndexedDB.
* When text editor is reopened after closing it, then the user finds that the content in the text editor has been retrieved from the IndexedDB.
* When the Install button is clicked, then the user downloads their web application as an icon on their desktop.
* When the web application is loaded, then the user should have a registered service worker using workbox.
* When a service worker is registered, then the user should have their static assets pre cached upon loading along with subsequent pages and static assets.
* When the application is deployed to Heroku, then the user should have proper build scripts for a webpack application.

## Mock-Up


-- add own mock-up images here -- 

The following animation demonstrates the application functionality:

![Demonstration of the finished Module 19 Challenge being used in the browser and then installed.](./Assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](./Assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)

## Contact

If you have any questions, feel free to contact me!

Email: michellehales93@gmail.com
GitHub: https://github.com/mich-hales
GitHub Repository: https://github.com/mich-hales/tasteful-text-editor

