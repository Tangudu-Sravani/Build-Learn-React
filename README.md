-------------------------------------------------
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

   