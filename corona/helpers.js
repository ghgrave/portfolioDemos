

exports.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

exports.dataSort = (data, flag, sortBy, prevDay) => {
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
        const unique = [...new Set(byState.map(item => item.state))]
        let [tempStateArray, tempCases, tempDeaths] = [[], 0, 0]
        unique.forEach(el => {
            let tempObj = {}
             let test = byState.filter(el2 => {
                return el2.state === el && el2.date === prevDay
            })
            tempCases = tempCases + Number(test[0].cases)
            tempDeaths = tempDeaths + Number(test[0].deaths)
            tempObj.date = prevDay
            tempObj.state = el;
            tempObj.cases = test[0].cases;
            tempObj.deaths = test[0].deaths;
            tempObj.deathRate = ((test[0].deaths/test[0].cases) * 100).toFixed(2);
            tempStateArray.push(tempObj)
        })
    return [tempStateArray, tempCases, tempDeaths];
}
