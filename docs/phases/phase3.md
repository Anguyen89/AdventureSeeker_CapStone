# Phase 3: Adventures Model, API, and basic APIUtil (2 days)

## Rails
### Models
* Adventure
* Profile

### Controllers
* Api::ProfileController(create, show, destroy, update)
* Api::AdventuresController (create, destroy, index, show, update)


### Views

## Flux
### Views (React Components)
* AdventuresIndex
- AdventuresIndexItem
* AdventureForm
* adventures/index.json.jbuilder
* adventures/show.json.jbuilder

### Stores
* Adventure

### Actions
* ApiActions.receiveAllAdventures -> triggered by ApiUtil
* ApiActions.receiveSingleAdventure
* ApiActions.deleteAdventure
* AdventureActions.fetchAllAdventures -> triggers ApiUtil
* AdventureActions.fetchSingleAdventure 
* AdventureActions.createAdventure
* AdventureActions.editAdventure 
* AdventureActions.destroyAdventure

### ApiUtil
* ApiUtil.fetchAllAdventures
* ApiUtil.fetchSingleAdventure
* ApiUtil.createAdventure
* ApiUtil.editAdventure
* ApiUtil.destroyAdventure

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap