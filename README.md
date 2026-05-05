C-------------------------------------------------
Ways to use react
1. CDN Links
2. using import of libraries of react

use of CDN links of react
    - 2 CDN links 
        i . is used for react
        ii. specific react [react-dom use for web application , Native is used for mabile application etc.. ]

ReactDOM.createRoot
    ReactDOM contains a method called createRoot - which creates a root in react , renders React component in browser within the element provided to it
----------------------------------------

     builiding a project 
     i. npm init - package.json - where the metadata of dependencies are been listed
    ii. npm install - installing all the dependencies like libraries mentioned in code
    iii. package-lock.json - where the detailed version dependecies are been present
    npm means Node Package Manager – used to install, manage, and run scripts in a project.
    iv. parcel - its is a bundler , by defauls react uses webpack as bundler
        Parcel provides a built-in development server.[to push it to browser]
        2 types of builds:-
            - developer build 
            - production build [minified code]
            - mentioning in script of package.json[used commands for excution]
                -   "start": "parcel index.html",
                    "build": "parcel build",

                    By using it now app can be runed using 

                        npx :- node package executer [used for executing project]
                            npx parcel index.html
                            npm run build
                        
                            🔹 .parcel-cache
                            This is a cache folder created by Parcel.

                            It stores intermediate build data (compiled files, metadata, etc.).

                            It helps Parcel rebuild faster by only processing files that changed.

        v. babel - converts JSX to JS
        



#parcel
 -Dev Build
 - Local Server
 - File Watching algorithm etc...
 
planning of project
* Header
*  -Logo
*  -Nav Items
* Body
*  - SearchBar
*  - Restaurant Container
*   -Restaurant Card
* Footer
* -Copyright
* -Links
* -Address
* -Contact


Two Types of Export/Import

Default Export/Import
import Component from 'path'

- Named Export/Import

export const Component;
import {Component} from 'path'

useEffect
    - If no dependency array => useEffect is called on every render
    - If dependecy array is empty = [] => useEffect is called on intial render(just once)
    - If dependency array is [btnNameReact] => called btnNameReact is updated

Routing
    CreateBrowserRouter :- It lets you define a list of routes (paths) and what components should render for them 

    RouterProvider is a compoenent, which is exported by react-router-dom library , providing appRouter configuration to it

Routing of RestaurantMenu
    we have decalred path through link which appends in url
    App.js we have declared the path correcponding compoenent rendering
    RestaurantMenu component taked the path id , through api calls renders the data



    # Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our app
    - Slice (cartSlice)
    - disptach(action)
    - Selector [read data using selector]


# Types of testing (developer)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing 

 #setting up testing in our app
 - Install React testing library =>  npm install -D @testing-library/react
 - install Jest => npm install --save-dev jest
 - Installed Babel dependencies
 - Configure Babel
 - configure Parcel Config file to disable babel transpilation => npm install -D --save-dev babel-jest @babel/core @babel/preset-env
  - npx create-jest --init
  -Install jsdom library  => npm install --save-dev jest-environment-jsdom 
  - npm install -D @babel/preset-react => to make JSX work in test cases <Contact/>
  - add  ["@babel/preset-react", { runtime: "automatic"}] inside Babel Config => helps JSX to html code convertion
  - Install npm i -D @testing-library/jest-dom  -gives you extra matchers (assertions) for DOM testing. ex:- toBeInTheDocument 
  

  To run test - npm test - in package.json under script have to mention about the tes:Jest