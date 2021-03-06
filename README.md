# PERNtest
A demo app based on the PERN stack (PostgreSQL, Express, React, Node).

## You will need
Node, NPM and PostgreSQL.

## Building
Clone the repo then install the dependencies in both client and server folders with: 

```
npm install
```

## Database
You will also need a PostgreSQL server running somewhere. Edit server/db.js to point to it. For help setting up the database, see database.sql

## Server
Run the server with: 

```
node index
```

## Client
Run or build the client with the usual npm commands: 

```
npm start
```
or 
```
npm run build
```

## Testing
A couple of E2E tests have been included which use Cypress. To open the test runner, do: 

```
npx cypress open
```

Then click the button in the top-right corner to run the tests.
