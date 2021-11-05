## Simple rest api

Nodejs and SQLITE

- get all reviews :
  http://localhost:8000/reviews
  the response will be the array of review objects.

- get specific users reviews :
  http://localhost:8000/reviews/id
  the id will be the id of the user.
  the response will be the array of review objects. if user does not exists, response will be empty array.

- update a specific review :
  http://localhost:8000/reviews/id
  the id will be the id of the review.
  response will be "result": 1 if successfull, otherwise 0 if the review does not exist.

- delete a review:
  http://localhost:8000/reviews/id
  the id will be the id of the review.
  response will be "success": 1 if successfull, otherwise 0 if the review does not exist.

- post a review :
  http://localhost:8000/reviews/
  response will be id of the review if successfull.
