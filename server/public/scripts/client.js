$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

$('#submitButton').on('click', submitInputs );

}

function displayResults(response) {
  console.log('in displayResults');
  let el = $('#outputResults');
  el.empty();
  for (let x = 0; x < response.length; x++) {
    for (let y = 0; y < response[x].lenght; y++) {
      $('outputResults').append(makeRow(response[x[y]]));
    }
  }
}

function makeRow(obj){
  let rowHtml = 
    `<td>Guess: ${obj.guess} which is ${obj.result}</td>`
  
  return rowHtml;
}

function getResult() {
  $.ajax({
    method: 'GET',
    url: '/quotes'
  }).then(function(response) {
    console.log('back from server with ', response);
    displayResults(response);
  });
}

function submitInputs(){
  let objectToSend = {arr: [$('#playerOneGuess').val(), $('#playerTwoGuess').val(), $('#playerThreeGuess').val(), $('#playerFourGuess').val()]}
  $.ajax({
    method: 'POST',
    url: '/guess',
    data: objectToSend
  }).then(function(response) {
    console.log('back from server with', response);
  });
  //endofObject
}
//endOfFunction

 

