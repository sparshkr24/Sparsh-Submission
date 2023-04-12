function sumByDay (D) {
    if(Object.keys(D).length==0){
      message = "Provide a valid input dictionary"
      return message
    }
    const ans = {};
  
    // initialize ans with keys for all days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
  
    // iterate over the keys in D and add the values to ans
    for (const dateStr in D) {
      const date = new Date(dateStr);
      const dayOfWeek = daysOfWeek[date.getDay()]
      if(dayOfWeek in ans){
          ans[dayOfWeek] += D[dateStr]
      }else{
          ans[dayOfWeek] = D[dateStr]
      }
    }
  
    let prevValue = 0
    let prev2Value = 0

  //   interpolate missing days using linear interpolation
    for (let i = 0; i < daysOfWeek.length; i++) {
      currDay = daysOfWeek[i]
  
        if (!(currDay in ans)) {
            let j = i-1
            let find1 = true
            let find2 = false
            
            //find values of the (prev day) and (prev of prev day) that exists in ans
            while(j>=0){
                if(find1 && daysOfWeek[j] in ans){
                    prevValue = ans[daysOfWeek[j]]
                    find1 = false
                    find2 = true
                }
                else if(find2 && daysOfWeek[j] in ans){
                    prev2Value = ans[daysOfWeek[j]]
                    break
                }
                j--;
            }
            // now calculate the value of tha current day
            ans[currDay] = 2*prevValue - prev2Value
        }
    }
    
    return ans;
  }
  
  
  // D = {  '2020-01-01':4, '2020-01-02':4, '2020-01-03':6,  '2020-01-04':8,  '2020-01-05':2,  '2020-01-06':-6,  '2020-01-07':2, '2020-01-08':-2  }
// D = {  '2020-01-01':6, '2020-01-04':12,  '2020-01-05':14,  '2020-01-06':2,  '2020-01-07':4 }
  // D = { '2020-01-05':14,  '2020-01-06':2}
  // D = {}

  // console.log(sumByDay(D))
module.exports = sumByDay;