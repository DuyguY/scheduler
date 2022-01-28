# Interview Scheduler
The **Interview Scheduler** is a single page app built with [React](https://reactjs.org/) which allows a user to book an appointment with an interviewer. The data is persisted by an API server using a PostgreSQL database, and updated in multi-user situations through a WebSocket connection.



The development of the project was driven by a TDD approach, including:



- static tests (prop-types package)

- unit tests (Storybook, Jest and Testing Library)

- integration tests (Jest and Testing Library)

- end to end tests (Cypress)

## Final product

#### Showing all the appointments booked for a day

![Showing appointments]()

#### Editing an appointment

![Editing an appointment]()


#### Deleting an appointment

![Deleting an appointment]()


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```


#### To run Cypress

The project was developed with Cypress installed globally. Thus running Cypress for the project first requires:

```shell

npm i -g cypress

```



Make sure that the Scheduler API server is running in **test** mode. The tests will not work if the API server is running in development mode. Then:

```shell

npm run cypress

```
## Dependencies

- [React](https://reactjs.org/)

- [axios](https://www.npmjs.com/package/axios)

- [classnames](https://www.npmjs.com/package/classnames)

## Development dependencies

- [Babel](https://babeljs.io/)

- [Storybook](https://storybook.js.org/)

- [Testing library](https://testing-library.com/)

- [node-sass](https://www.npmjs.com/package/node-sass)

- [prop-types](https://www.npmjs.com/package/prop-types)

- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)

