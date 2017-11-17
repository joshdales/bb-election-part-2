document.addEventListener("DOMContentLoaded", function() {

  var ul = document.querySelector('ul')

  // Imagination!
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET'
  }).done(function(data) {
    data.candidates.forEach(function(candidate) {
      var li = document.createElement('li');
      li.innerText = candidate.name + ' has ' + candidate.votes + ' votes.'
      ul.append(li)
    })
  })

});
