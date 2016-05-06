# Phase 4: Booking (1 day)

## Rails
### Models

* Booking

### Controllers

*Api::BookingController (create, destroy, index, show, update)

### Views
* bookings/index.json.jbuilder

## Flux


### Views (React Components)

* BookingIndex
    * BookingIndexItem
* BookingShow
* BookingRequestForm

### Stores

* Booking

### Actions

* ApiActions.receiveAllBookings -> triggered by ApiUtil
* ApiActions.receiveSingleBooking
* ApiActions.deleteBooking
* MessageActions.fetchAllBookings -> triggers ApiUtil
* MessageActions.fetchSingleBooking
* MessageActions.createBooking
* MessageActions.updateBooking
* MessageActions.destroyBooking

### ApiUtil

* ApiUtil.fetchAllBookings
* ApiUtil.fetchSingleBooking
* ApiUtil.createBooking
* ApiUtil.updateBooking
* ApiUtil.destroyBooking

## Gems/Libraries
* react-quill (npm)