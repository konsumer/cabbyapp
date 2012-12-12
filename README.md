# CabbyApp

Track cabbies, cutomers, and allow dispatch of rides by customer or dispatcher & pickup notification by cabbie.

It is currently running [here](http://cabby.jetboystudio.com/)

## Development

The app is still in development. Here are the current ideas:

*    It uses [kanso](http://kan.so/) in a simple 1-page app.
*    only logged-in users can edit/read records: update their location/status or request/pickup
*    only dispatcher & driver can see drivers that are not committed to picking them up
*    4 user-types: admin, dispatcher, cabbie,  customer
*    all users request account with captha'd newuser form. when verified, added as customers
*    an admin must add cabbie/dispatcher permissions
*    cabbies & customers status are waiting/dispatched/inprogess

different users see different things:

*    admin: all
*    dispatcher: all, w/ sidebar list of cabbies
*    cabbie: all, w/ sidebar list of customers & "cancel dispatch" button (if dispatched)
*    customers: themselves & dispatched cabbie (if they have one) & sidebar w/ "cancel dispatch" button (if dispatched) and "cancel wait" if not
*    admin, dispatcher, & cabbies have filter optins to hide/show things
*    cabbie/customers send geo-data to update location


app is in 2 parts:

*    auth/newuser (node runtime on appfog) - updates couch user table to allow access
*    map interface (deployed as couchapp)

like-to-haves:

*    heatmaps of customer wait-times
*    android/ios-specific app that notifies customer of driver-dispatch (use native googlemaps + notification APIs)

Be sure to checkout bin dir for fixture/mocking options.
