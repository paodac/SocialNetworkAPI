# Social Network API

## Description

This is an API for a social network that allows users to share their thoughts, react to friends' thoughts, and manage their friend list. It is built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

## Features
- **Users:**
  - Create, read, update, and delete users.
  - Manage a friend list.
- **Thoughts:**
  - Create, read, update, and delete thoughts.
  - Add and remove reactions.
- **Friends:**
  - Add and remove friends.
- **Reactions:**
  - Add and remove reactions to thoughts.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Insomnia** (for API testing)

## Usage

You can test the API using **Insomnia** or any similar HTTP client. Below are examples of the available routes:

### Users
- `GET /api/users` - Retrieve all users.
- `POST /api/users` - Create a new user.
- `GET /api/users/:id` - Retrieve a user by ID.
- `PUT /api/users/:id` - Update a user by ID.
- `DELETE /api/users/:id` - Delete a user by ID.

### Thoughts
- `GET /api/thoughts` - Retrieve all thoughts.
- `POST /api/thoughts` - Create a new thought.
- `GET /api/thoughts/:id` - Retrieve a thought by ID.
- `PUT /api/thoughts/:id` - Update a thought by ID.
- `DELETE /api/thoughts/:id` - Delete a thought by ID.

### Friends
- `POST /api/users/:id/friends/:friendId` - Add a friend.
- `DELETE /api/users/:id/friends/:friendId` - Remove a friend.

### Reactions
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought.

## Walkthrough Video
[This is the link to the video](https://drive.google.com/file/d/1Z8PRcarIeZedeqZkCYt5Aorn9lInmCr_/view)

![GIF of the demonstration](./Assets/SocialMediaAPI.gif)


## Contribution
If you want to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Additional Notes
- Ensure **MongoDB** is running locally for the API to function.
- Tools like **MongoDB Compass** can help inspect the database.
