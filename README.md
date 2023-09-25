# Weather Web Client

This is the web client companion for my [SparkFun Arduino Weather Station](https://github.com/iap128/WeatherStation) project. This React app will pull the data that is being stored on the SQL database and display it to the user.

## Running Server

To run the server part of the app, navigate to the server directory. Use command `yarn` to install package dependencies. Then use the command `node index.js` to start the backend. You can access the API from `localhost:3306/X` where X is the name of the database table.

## Running App

1. Navigate to weather-site directory
2. Use command `yarn` to install packages
3. Use command `yarn start` to run app

## Building with Docker

### Building Client

Navigate to the client directory and run the command `docker build -f Dockerfile -t client .`
You can run the container locally with `docker run -it -p 4001:3000 client`

### Building the Server

Navigate to the server directory and run the command `docker build -f Dockerfile -t server .`
You can run the server locally with `docker run -it -p 3306:3306 server`

### Running Full Instance

To run the full instance, use the command `docker-compose up --build`
