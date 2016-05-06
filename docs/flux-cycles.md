# Flux Stores

### ProfileStore

Holds all persisted note data.

##### Actions:
- `receiveAllProfiles`
- `receiveSingleProfile`

##### Listeners:
- `ProfilesIndex` (passes to `ProfileIndexItem` via props)
- `ProfileDetail`

### ProfileDetailFormStore

Holds un-persisted profile data to send to the API.

##### Actions:
- `receiveProfileFormParams`

##### Listeners:
- `ProfileForm`

### AdventureStore

Holds all persisted yard data.

##### Actions:
- `receiveAllAdventures`
- `receiveSingleAdventure`
- `removeAdventure`
- `editAdventure`

##### Listeners:
- `AdventureIndex`

### AdventureFormStore

Holds un-persisted yard data to send to the API.

##### Actions:
- `receiveAdventureFormParams`

##### Listeners:
- `AdventureForm`

### MessageStore

Holds all persisted message data to send to the API.

##### Actions:
- `receiveAllMessages`
- `receiveSingleMessage`
- `removeMessage`

##### Listeners:
- `MessageForm`


### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
