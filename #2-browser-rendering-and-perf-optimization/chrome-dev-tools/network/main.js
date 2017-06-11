function delaySome(ms) {
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
  console.log("The browser version is : " + navigator.userAgent);
}

delaySome(4000);
