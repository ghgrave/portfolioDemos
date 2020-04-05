exports.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

exports.dataSort = (data, flag, sortBy) => {
    console.log('Receiving data from server.js')
    console.log('Sorting data....')
    let selection = sortBy
    byState = !flag ? 
        data : 
        data.sort((a,b)=>{
        return a[selection] > b[selection]
          ? 1
          : b[selection] > a[selection]
          ? -1
          : 0;
        });
        // console.log('Test', byState)
    return byState
}
