// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  var result="Happy holidays, "+name
  return result
}

function happyHolidayTo(holiday, name) {
  return "Happy "+holiday+", "+name
}

function holidayCountdown(days, holiday) {
  return eval("It\'s ${days} days until ${holiday}!")
}

holidayCountdown(34, "Halloween")