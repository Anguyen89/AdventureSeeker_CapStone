# Phase 2: Flux Architecture and Profile CRUD and Profile Frontend (2 days)

## Rails
### Models
* Profile

### Controllers
Api::ProfileController(create, show, destroy, update)

### Views

## Flux
### Views (React Components)

* users/edit.html.erb

### Stores
* Profile

### Actions
* ApiActions.receiveAllProfiles -> triggered by ApiUtil
* ApiActions.receiveSingleProfile
* ProfileActions.fetchAllProfiles -> triggers ApiUtil
* ProfileActions.fetchSingleProfile
* ProfileActions.editProfile

### ApiUtil
* ApiUtil.fetchAllProfiles
* ApiUtil.fetchSingleProfile
* ApiUtil.editProfile

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap