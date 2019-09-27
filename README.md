# Simple Express Flights API

This is a thin layer delivering a GraphQL API on top of Kiron REST services.

## Used Technology

The server is written in JavaScript and runs on `Node 12`.
It uses `axios` to send requests external APIs and collect information about flights.

## Documentation

### Installation

Clone the repository to your file system:

```
git clone git@github.com:mohib0306/express-flights-api.git
```

Create a local `.env` in the clone directory. This file should have the following variables depending on your environment. i.e. For local development it should have

```
APP_ENV=development
APP_PORT=8080
FLIGHTS_API_SOURCE_A=your_own_value
FLIGHTS_API_SOURCE_B=your_own_value
FLIGHTS_API_SOURCE_B_USER=your_own_value
FLIGHTS_API_SOURCE_B_PASSWORD=your_own_value
```

Install the dependencies:

```
yarn install
```

### Run the server in development

This command will start the server and transpile files on the fly.

```
yarn start
```

The server will be restarted after a change on the file system.

### Run the tests

```
yarn test
```

The server will be restarted after a change on the file system.
