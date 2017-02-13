# Reactpress

Reactpress is hybrid front-end architecture composed from ReactJS and Bootstrap UI,
enabling rapid development cycle for Wordpress-powered web application

## Features:
  - ReactJS Virtual DOM (stateless component)
  - Redux (use global Store to manage Action/State)
  - LocalStorage/CookieStorage (persistent data)
  - JQuery and Bootstrap (theme integration with SASS enabled)

## NPM Commands:
  - Development mode (build and watch) : ```npm run development```
  - Production mode (build optimized): ```npm run production```
  - Run HTTP server : ```npm start```
  - Deploy as Wordpress theme: ```npm run development|production -- --deploy=../wordpress/wp-content/themes/reactpress```

## Integrated Development Setup:
  - Get latest version of Wordpress here: https://wordpress.org/latest.zip
  - Unzip, then copy and merge all files/folder from 'patch' folder
  - Run HTTP server: ```./server.sh```

  - Login URL: http://127.0.0.1:8000/wp-admin/
    Username = reactpress
    Password = 123456

  - API Documentation URL: http://127.0.0.1:8000/api-docs/#/default

(c) 2017, Fafan <fafan.art@gmail.com>
