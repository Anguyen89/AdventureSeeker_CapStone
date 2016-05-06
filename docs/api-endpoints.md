# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

Profiles

- GET /api/users/index:shows all users
- Profiles index/search
- GET /api/user/:id: shows one user's profile
- PATCH /api/user/:id/edit: user profile edit form

Bookings

- GET /api/users/:id/bookings -User can only see own info, history and future
- POST /api/users/:id/bookings/new: new stay request form
- PATCH /api/users/:id/bookings/:id/edit: edit booked stay
- DELETE /api/users/:id/bookings/:id: delete booked stay

Adventures

A users's adventures will be included in the user show template

- POST /api/users/:id/adventures/new: add adventure to user
- GET /api/adventures/host_id/index: shows all properties of user
- GET /api/adventures/host_id/adventure_id/show: show single adventure of host
- DELETE /api/adventures/host_id/adventure_id: remove adventure from user

Messages

- GET /api/users/:id/messages/index: Shows all messages for user
- GET /api/users/:id/message/show: shows one message for user
- POST /api/users/:id/messages/new: new message form for user
