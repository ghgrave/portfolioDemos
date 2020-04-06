

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
        const unique = [...new Set(byState.map(item => item.state))]
        tempStateArray = []
        unique.forEach(el => {
            let [deathCount, cases, tempObj, fips] = [0, 0, {}, 0];
            byState.forEach(el2 => {
                deathCount = (el2.state === el) ? deathCount + Number(el2.deaths) : deathCount + 0;
                cases = (el2.state === el) ? cases + Number(el2.cases) : cases + 0;
            })
            tempObj.state = el;
            // tempObj.fips = 0;
            tempObj.cases = cases;
            tempObj.deaths = deathCount;
            tempObj.deathRate = ((deathCount/cases) * 100).toFixed(2);
            tempStateArray.push(tempObj)
        })
    return byState = tempStateArray;
}
