# About the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [Random User Generator API](https://randomuser.me/documentation).

A beautiful design featuring infinite scroll loading 10 new users at a time when reached to the bottom of the list. Clicking on the user will route to the userId using [react-router-dom](https://reactrouter.com/web/guides/quick-start) and display details of the user.

### Approach

This app has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [redux](https://react-redux.js.org/) for state management and [react-router-dom](https://reactrouter.com/web/guides/quick-start) for navigations. Initially the results from the `https://randomuser.me/api/` are stored in the redux store with a loading variable to display a spinner on the screen while fetching data.

Using the `onScroll` event attribute a check is done to measure the current scroll position and if the user is scrolled to the bottom more random users are appended to the `Random Users State in Redux Store`. Which then will update `Persons.tsx` and render the newly added users.

Clicking on the users will navigate to `/:id` and display the details about that user. If a user is not found by typing in url manually the user will be redirected to the home page.

## Running the project

#### `1. Clone the repo`
#### `2. npm install`
#### `3. npm run start`

### Deployment Instructions

#### `1. npm run predeploy`
#### `2. npm run deploy`

## Github Pages

The app is deployed to GitHub pages and can be found [here](https://rutvik17.github.io/Random-User-Address-Book/).

## Improvements / Features

This project can be improved by adding several functionalities and improving some user interactions. Functionalities that could be added:

#### `1. Favorite users below the user card on the user details page.`
#### `2. Instead of redirecting back when no user found on typing a fake url desplay a 404 not found page.`
#### `3. Implement a search box on home page to filter users.`
#### `4. Clean up code where necessary.`

## Given more time

1. I would strongly leverage on the Tailwind CSS library to implement some amazing UI and improve the user experience. 
2. Research on some amazing design and animations to make to more interactive.
3. Implement a filter dropdown to filter users by gender, age, name etc.
4. Implement a search box to search for users by their names.
5. Improve algorithmic operations to improve on time and space complexities.

`Given a couple of days or more time to this application would make it an amazing project! `


## Preview
<img width="1080" alt="Random-User-Address-Book" src="https://user-images.githubusercontent.com/19266929/137784388-87c562c5-56b7-4dc6-9072-fe5b0f92c8af.png">


