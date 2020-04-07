This is an attempt to take data displayed on Github and using built-in Node modules, can I 
get the data and display in browser.


1) 4/5/2020 
    - able to pull data and save locally. Able to read the data using built-in Node functionality and display using EJS templating. 
    - Added partials for better organization
    - added styling
    - added date functionality to let user know current date and when data was pulled
    - temporarily moved .csv file to local directory
    - fixed styling for table with fixed header position
    - created form partial
    - new routes based on user input for data organization
    - built sort function in helpers.js that allows sorting by state
    - sort function now collects data and aggregates for each state with total of deaths per state

1) 4/6/2020
    - realized data was aggegating for deaths instead of updating for each line of deaths by state by date
    - need to redo logic so only the last date reported is used instead of adding all death counts.
    - installed moment.js for date formatting
    - able to use moment to get accurate date formatiing
    - built filter function for state sort using moment data
    - added total cases and total deaths to state.ejs

TODO:

1) How do I add user functionality to each column for better sorting.
1) How do I pull data from Github automatically instead of manually every during run time
1) Convert to React at some point for better practice
1) Move date functions to helper.js?
