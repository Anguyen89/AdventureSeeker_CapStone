# AdventureSeeker

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

AdventureSeeker is a web application inspired by CouchSurfing that will be built using Ruby on Rails and React.js. Similiar to CouchSurfing, AdventureSeeker allows users to post adventures(Travel, Hiking, Skiing, etc). Users may then search thorugh others listings and find adventures that they would like to be a part of. Users can then send requests to the owner of a certain adventure who in turn can either accept or reject a request based on the requesters profile. This platform will provide a way for users to find like minded people in which they can embark on adventures with.

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a CouchSurfing-inspired site: adventure creation and editing, user acceptance and
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

AdventureSeeker will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out with password encryption, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete adventures (MVP)
- [ ] Create and edit user profiles (MVP)
- [ ] Create and destroy bookings (MVP)
- [ ] Organize and view adventures (MVP)
- [ ] Users can view all of their bookings (MVP)
- [ ] Integrate Map functionality (MVP)



## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Flux Architecture and Profile CRUD and Profile Frontend (1.5 days)
**Objective:** Adventures can be created, read, edited and destroyed through
the API.

- [ ] create `Adventure` model
- [ ] create 'Profile' model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for adventures (`AdventuresController`)
- [ ] jBuilder views for Adventures and profiles
- [X] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles


### Phase 4: Adventures Model, API, and basic APIUtil (1.5 days)

**Objective:** Adventures can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each adventure component, building out the flux loop as needed.
  - [ ] `AdventuresIndex`
  - [ ] `AdventureIndexItem`
  - [ ] `AdventureForm`

### Phase 5: Map (.5 day)

**Objective:** Integrate map functionality into application.
- [ ] setup map component
- [ ] integrate map markers for geolocation references



### Phase 6: Booking (1 day)
  **Objective** Bookings belong to Users, and can be viewed by User.
- [ ] create `Booking` model
- build out API, Flux loop, and components for:
- [ ] Booking CRUD
- [ ] adding Bookings requires a Adventure
- [ ] view Bookings as User

### Phase 7: Messages (1 day)

**Objective:** Messages belong to User, and can be viewed by User.

- [ ] create `Message` model
- build out API, Flux loop, and components for:
- [ ] Adventure CRUD
- [ ] adding Messages requires a User
- [ ] viewing Messages by User
- Use CSS to style new views


### Phase 8: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles


### Phase 9: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)




[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
