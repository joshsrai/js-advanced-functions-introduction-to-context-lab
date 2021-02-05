// Your code here

let createEmployeeRecord = function(arr) {
    return {firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let obj = {type: "TimeIn",
                hour: parseInt(dateStamp.split(" ")[1]),
                date: dateStamp.split(" ")[0]
    }
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(dateStamp){
    let obj = {type: "TimeOut",
                hour: parseInt(dateStamp.split(" ")[1]),
                date: dateStamp.split(" ")[0]
    }
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(record, date) {
    let inTime = record.timeInEvents.find(e => {
      return e.date === date
    }).hour
    let outTime = record.timeOutEvents.find(e => {
      return e.date === date
    }).hour
    return (outTime - inTime) / 100
  }

  function wagesEarnedOnDate(record, date) {
      return record.payPerHour * hoursWorkedOnDate(record,date)
  }

  function allWagesFor(emp) {
      const arr = (total, date) => total + wagesEarnedOnDate(emp, date.date);
      return emp.timeInEvents.reduce(arr, 0)
  }

  function findEmployeeByFirstName(srcArray, firstName) {
      return srcArray.find(emp => emp.firstName === firstName)
  }

  function calculatePayroll(array) {
    const reducer = (total, employee) => total + allWagesFor(employee)
    return array.reduce(reducer, 0)
}