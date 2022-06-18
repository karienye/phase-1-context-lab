/* Your Code Here */
let  createEmployeeRecord = function (names, digits){ 
       return { 
           firstName:names[0],
        familyName: names[1],
        titleField: names[2],
        payPerhour: digits[3],
     timeInEvents: [],
    timeOutEvents: [] }
    
    }

const createEmployeeRecords = function (recordsEmployee){
    
return recordsEmployee.map(function(names){
    return createEmployeeRecord(names);
});

}

const createTimeInEvent = function (timeIn){
    let [date, hour] = timeIn.split(' ')

    return timeInEvents.push ({
        type: 'arrival',
        hour: parseInt(hour),
        date:'',
    })
  return this;
}
const createTimeOutEvent = function (timeOut){
    let [date, hour] = timeOut.split(' ')

    return timeOutEvents.push ({
        type: 'arrival',
        hour: parseInt(hour),
        date:'',
    })
  return this;

}

const hoursWorkedOnDate = function (dateIn){
    let workingHours = this.timeInEvents.find(function(e){
        return e.date === dateIn;
    })
    let notWorkingHours = this.timeoutEvents.find(function(e){
        return e.date === dateIn;
    })
    return (notWorkingHours.hour - workingHours.hour) / 100

}

const wagesEarnedOnDate = function (pay){ 
    let wages = hoursWorkedOnDate.call(this, pay)
     this.payPerhour 
     return parseFloat(wages.toString())

}

const findEmployeeByFirstName = function (srcArray, firstName){
    return srcArray.find(function(rec){
        return rec.firstName === firstName
    })
}

const calculatePayroll = function (createEmployeeRecords){
    return createEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    })
}
   // newEmployee.forEach(element => console.log(element));

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable 
}

