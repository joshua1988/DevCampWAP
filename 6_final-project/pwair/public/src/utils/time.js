// Date Format : yymmhh
export function getCurrentDate() {
  var date = new Date();
  return date.toISOString().slice(0,10).replace(/-/g,"");
};

// Date Format : yyyymmdd
export function getYesterday() {
  var date = new Date();
  var yyyy = date.getFullYear();
  var currentMonth = date.getUTCMonth() + 1;
  var mm = currentMonth < 10 ? "0" + currentMonth : currentMonth;
  var dd = '';
  var currentDay = date.getUTCDate();

  dd = (currentDay < 10) ? "0" + currentDay : currentDay;

  return yyyy + mm + dd;
}

export function getLastMonth() {
  var date = new Date();
  var yyyy = date.getFullYear();
  var month = date.getMonth();

  if (month < 10) {
    month = yyyy + "0" + month;
  } else {
    month = yyyy + month;
  }

  return month;
}
