[![Build Status](https://travis-ci.com/amaechi-chuks/iReporter.svg?branch=develope)](https://travis-ci.com/amaechi-chuks/iReporter)
[![Maintainability](https://api.codeclimate.com/v1/badges/d7fad423c89e659bd531/maintainability)](https://codeclimate.com/github/amaechi-chuks/iReporter/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/amaechi-chuks/iReporter/badge.svg?branch=develope)](https://coveralls.io/github/amaechi-chuks/iReporter?branch=develope)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


## Table of Contents

 - [Introduction](#introduction)
 - [UI Templates](#ui-templates)
 - [Installing](#installing)
 - [Working Routes](#working-routes)
 - [License](#license)
 - [Acknowledgments](#acknowledgments)
 - [Contribution](#contribution)
 - [Live Demo](#live-demo)

# Introduction

## *Project Overview*

 iReporter is an application that enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public.




### __Style guide__

[Airbnb ](https://github.com/airbnb/javascript)(Javascript style guide)


## Screenshoot(UI template)
![alt](./screenShoot/landingimage_1.png)

# UI Templates

Preview UI templates :+1: [Github Pages](https://amaechi-chuks.github.io/iReporter/)



## Required Features
1. `User can create an account and log in`.
2. `User can create red-flag record.`
3. `User can create intervention record.`
4. `User can delete a ​red-flag​​ or ​intervention​​ record`
5. `User can add images to either ​red-flag ​​or ​intervention ​​record.`
6. `User can add geolocation (Lat Long Coordinates) to either a ​red-flag​​ or ​intervention  record. `
7. `User can View all ​red-flag​​ or ​intervention ​​records an individual user has created.`


# Installing

#### *Prerequisites*

Ensure you have **NodeJS** installed by entering `node -v` on your terminal
If you don't have **NodeJS** installed go to the [NodeJS Website](http://nodejs.org),  and follow the download instructions

To install this app

`
git clone https://github.com/amaechi-chuks/iReporter
`

And install the required dependencies

`
npm install
`

Run server

`
npm run start:dev
`

Server listens on port `5000`

## Running the tests

To run test cases

`
npm run test
`
# Working Routes

 ## *API Endpoints*
|Endpoint                                           | Functionality                     |HTTP method 
|---------------------------------------------------|:-----------------------------------:|-------------:
|/api/v1/auth/signup                                |Register user                      |POST       
|/api/v1/auth/signin                                |Logs in a user                     |POST
|/api/v1/red-flags                                |Create a red-flag record         |POST
|/api/v1/intervention                                |Create intervention record          |POST
|/api/v1/red-flags                                |Fetch all red-flags record         |GET 
|/api/v1/intervention                                |Fetch all intervention record        |GET 
|/api/v1/red-flag/*red-flag_id*                      |Fetch the details of a single red-flag record|GET
|/api/v1/intervention/*intervention_id*/             |Fetch the details of a single intervention record               |Get
|/api/v1/red-flag/*red-flag_id*/location             |Update location of a red-flag               |PUT
|/api/v1/intervention/*intervention_id*/location               |Update location of intervention     |PUT
|/api/v1/red-flag/*red-flag_id*/comment              |Update comment of red-flag     |PUT
|/api/v1/intervention//*intervention_id*/comment               |Update comment of intervention     |PUT
|/api/v1/red-flag/*Red-flag_id*/delete            |Delete a single red-flag           |DELETE
|/api/v1/intervention/*intervention_id*/delete |Delete a single intervention         |DELETE
|/api/v1/auth/admin |Admin Fetch all red-flags and intervention         |GET
|/api/v1/auth/admin/admin_id |Admin Upadate a single red-flag/intervention status         |PUT
|

 
## License :boom:
This projects is under the MIT LICENSE

## Acknowledgments :pray:

- [Egghead](https://egghead.io/)
- [Andela](http://andela.com)
- [Devdocs](https://devdocs.io/)
- [Wes Bos ](https://www.youtube.com/user/wesbos)
- [Google Search](https://google.com)
- [Stackoverflow](stackoverflow.com)

## Contribution
*If you want to contribute to this project:*
 - `Fork it! :fork_and_knife:`
 - `Create your feature branch: git checkout -b my-new-feature`
 - `Commit your changes: git commit -m 'Add some feature'`
 - `Push to the branch: git push origin my-new-feature`
 - `Create a pull request. `

### Live demo

You can test the api endpoints
:+1: [Here ](https://ireporter-software.herokuapp.com/)

