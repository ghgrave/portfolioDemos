exports.data = {
    events: [
    {
        start: '2020-07-28',
        end: '2020-07-28',
        title: "Movie #1",
        medium: 'movie',
        notify: true
    },
    {
        start: '2020-07-21',
        end: '2020-07-21',
        title: "Movie #2",
        medium: 'movie',
        notify: true
    } ,
    {
        start: '2020-07-06',
        end: '2020-07-06',
        title: "TV #1",
        medium: 'tv',
        notify: true
    } ,
    // {
    //     start: '2020-07-06',
    //     end: '2020-07-06',
    //     title: "TV #1",
    //     medium: 'tv',
    //     notify: true
    // } ,
    // {
    //     start: '2020-07-06',
    //     end: '2020-07-06',
    //     title: "TV #1",
    //     medium: 'tv',
    //     notify: true
    // } ,
    {
        start: '2020-08-02',
        end: '2020-08-02',
        title: "Movie #4",
        medium: 'movie',
        notify: false
    },
    {
        start: '2020-07-11',
        end: '2020-07-11',
        title: "TV #2",
        description: 'Lots of stuff!!!',
        medium: 'tv',
        notify: false,
        extendedProps: {
            className: 'tv-content'
        }
    }
],
    color: 'red',
    textColor: 'yellow'
}

// {
//     events: function(info, successCallback, failureCallback) {
//       // ...
//     },
//     color: 'yellow',   // an option!
//     textColor: 'black' // an option!
//   }