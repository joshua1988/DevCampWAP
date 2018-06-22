// Specify your actual API key here:
var API_KEY = 'AIzaSyCUFbZuFR4dJgV0yAUgMzHhh7DMJLy1LhU';
// var URL_FOR_ANALYSIS = 'https://www.naver.com';
var URL_FOR_ANALYSIS = document.querySelector('input').value;
var API_URL = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?';
var CHART_API_URL = 'http://chart.apis.google.com/chart?';

// Object that will hold the callbacks that process results from the
// PageSpeed Insights API.
var callbacks = {}

// Invokes the PageSpeed Insights API. The response will contain
// JavaScript that invokes our callback with the PageSpeed results.
function runPagespeed(url) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  var query = [
    'url=' + url,
    'callback=runPagespeedCallbacks',
    'key=' + API_KEY,
  ].join('&');
  s.src = API_URL + query;
  document.head.insertBefore(s, null);
}

// Our JSONP callback. Checks for errors, then invokes our callback handlers.
function runPagespeedCallbacks(result) {
  if (result.error) {
    var errors = result.error.errors;
    for (var i = 0, len = errors.length; i < len; ++i) {
      if (errors[i].reason == 'badRequest' && API_KEY == 'yourAPIKey') {
        alert('Please specify your Google API key in the API_KEY variable.');
      } else {
        // NOTE: your real production app should use a better
        // mechanism than alert() to communicate the error to the user.
        alert(errors[i].message);
      }
    }
    return;
  }

  // Dispatch to each function on the callbacks object.
  for (var fn in callbacks) {
    var f = callbacks[fn];
    if (typeof f == 'function') {
      callbacks[fn](result);
    }
  }
}

// Invoke the callback that fetches results. Async here so we're sure
// to discover any callbacks registered below, but this can be
// synchronous in your code.
// setTimeout(runPagespeed, 0);

// display the result score using google chart API
callbacks.displayPageSpeedScore = function(result) {
  var analyzedUrl = result.id;
  var score = result.ruleGroups.SPEED.score;
  // chart construction with the website result score
  var query = [
    'chtt=Page+Speed+score:+' + score,
    'chs=180x100',
    'cht=gom',
    'chd=t:' + score,
    'chxt=x,y',
    'chxl=0:|' + score,
  ].join('&');
  var i = document.createElement('img');
  i.src = CHART_API_URL + query;

  var divs = document.querySelectorAll('div');
  var span = document.querySelector('span');
  span.textContent = analyzedUrl;
  divs[1].insertBefore(i, null);
};

// display the summary of website analysis
callbacks.displayTopPageSpeedSuggestions = function(result) {
  var results = [];
  var ruleResults = result.formattedResults.ruleResults;
  var divs = document.querySelectorAll('div');
  for (var i in ruleResults) {
    var ruleResult = ruleResults[i];
    // Don't display lower-impact suggestions.
    if (ruleResult.ruleImpact < 3.0) continue;
    results.push({name: ruleResult.localizedRuleName,
                  impact: ruleResult.ruleImpact});
  }
  results.sort(sortByImpact);
  var ul = document.createElement('ul');
  for (var i = 0, len = results.length; i < len; ++i) {
    var r = document.createElement('li');
    r.innerHTML = results[i].name;
    ul.insertBefore(r, null);
  }
  if (ul.hasChildNodes()) {
    divs[2].insertBefore(ul, null);
  } else {
    var div = document.createElement('div');
    div.innerHTML = 'No high impact suggestions. Good job!';
    divs[2].insertBefore(div, null);
  }
};
function sortByImpact(a, b) { return b.impact - a.impact; }

// Button Click Event
document.querySelector('button').addEventListener('click', function () {
  var value = document.querySelector('input').value;
  if (value !== "" || value !== null) {
    runPagespeed(value);
    document.querySelector('input').value = "";
  }
  return true;
});
