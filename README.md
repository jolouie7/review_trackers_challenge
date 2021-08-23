# review_trackers_challenge

## What does this app do?
This app grabs data from a json file and displays the data on a page. The items displayed on the page are reviews from people. The user can click on the review card and respond to a review. There can only be 1 response per review.

### Assumptions
1. Did not need a server/API

### Libraries/Tools used
- React Router
- Moment.js
- React Icons
- Jest
- Enzyme

### How to setup
Run the following commands to setup, given node and npm is available:

1. git clone git@github.com:jolouie7/review_trackers_challenge.git
2. cd review_trackers_challenge
3. npm install

### Running tests
- To run the tests run `npm test`

### Decisions and Tradeoffs
1. I choose to reuse the ReviewCard component because I didn't want to copy and paste the almost exact same old and styles. Reused in two places, within ReviewCardDetails and ReviewCardList. Since the views are different I need to add some props which allowed me how to control the width size I wanted.
2. I didn't create a variables file that would contain common css styles because this was a relatively small project.

### Future additions
- Add more tests
- Add validations
- Add / improve styles