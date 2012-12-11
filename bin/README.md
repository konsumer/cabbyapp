# CabbyApp bin

These are dev-tools for making CabbpyApp

## genfake

*    Generate cabbies, customers, or both
*    Overwrite relationships between all cabbies/customers in database using status

## genactivity

Generates fake-activity for current cabbie/customers

*    Customers added as "waiting", timeout to "dispatched" status for customer/cabbie
*    Cabbies in "dispatched" mode move towards their customers
*    When cabbie arrives at customer, cabbie & customer mode switches to "inprogess", and move towards a destination
