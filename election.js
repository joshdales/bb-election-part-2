document.addEventListener("DOMContentLoaded", function() {

  var ul = document.querySelector('ul')

  // Imagination!
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET'
  }).done(function(data) {
    data.candidates.forEach(function(candidate) {
      var li = document.createElement('li');
      li.innerText = candidate.name + ' has ' + candidate.votes + ' votes.';

      var form = document.createElement('form');
      var voteButton = document.createElement('input');
      voteButton.type = 'submit'
      voteButton.value = 'Vote for '+candidate.name;
      form.append(voteButton);

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        $.ajax({
          url: 'https://bb-election-api.herokuapp.com/vote',
          method: 'POST',
          data: {'name': candidate.name}
        }).done(function () {
          voteButton.setAttribute('disabled', true);
        })
      })
      li.append(form);
      ul.append(li);
    })
  })

});
