document.getElementById('share').onclick = function() {
  FB.ui({
    method: 'feed',
    link: 'https://joshua1988.github.io/DevCampWAP-SWA/',
    caption: 'My Facebook profile application',
  }, function(response){
    if (response && !response.error_message) {
      console.log('Posting completed.');
    } else {
      console.log('Error while posting.');
    }
  });
};
