# exercise-tracker
an app to track and log exercise such as gym workouts, running and other forms of activity

## Introduction
After looking for an app to track and record my gym workout history I was i disapoint by either the price of some apps or the limited features on the rest, so I did what any other developer would do and make their own. Here is my progress so for.

### MVP 
The mvp for the app was at it s core a place to create multple workouts composed of different exercises were you could record the sets, reps and weights done. They could then look at their workout history and see there progress and activity.

### Add ons
* An interval timer to use whilst working out  
* A calorie counter
* ...

## Commands

### Backend
* npm install  
* node server.js

### Frontend
* npm install
* npm start

## User Stories

## Schemas

### Users
| userID | username | crypt_password |     email     | first_name | surname |   created  |  last_log  |
|:------:|:--------:|:--------------:|:-------------:|:----------:|:-------:|:----------:|:----------:|
|    0   |   user1  |    ********    | user@mail.com |    user    |    1    | 1592478834 | 1592478834 |

### Workouts

## Technolgies
* React
Provides a dynamic frontend for the app
* SQlite
A functional database to store user-history
* Sequilize
For ease of use to acces the database
* Node
hosting the backend api
* Crypto
Password encryption
* JWT
User session authentication
## Project Tree