
// urn time < 12 ? (`good morning, ${msg}`) : time < 18 ? (`good afternoon, ${msg}`) : (`good evening, ${msg}`)
// }

// function pushEvent() {
//   div.innerHTML = message(input.value);
// }

//  function formEvent(evt) {
//    evt.stopPropagation();
//    evt.preventDefault();
//    div.innerHTML = message(input.value);
// }var input = document.querySelector('#clientName');
// var div = document.querySelector('#salutation');
// var button = document.querySelector('button');
// // var Reset= document.querySelector('Reset')
// var time = (new Date()).getHours();

// function message(msg){
//  ret

// button.addEventListener('click', pushEvent);

//start_over.addEventListener('click', ResetEvent);

// the Big O
// attach event!
// bubbling and capturing
// bubbling means propogate upward!

// event bubbling!

var spans = document.querySelectorAll('span');
var section = document.querySelectorAll('section');

spans.forEach((value) => {
  value.addEventListener('click', () =>  {
    value.style.color = 'red';
  });
});


section.forEach((value) => {
  value.addEventListener('click', () =>  {
    value.style.color = 'blue';
  });
});


// event capturing
var main = document.querySelector('main');

main.addEventListener('click', (evt) => {
  var elem = evt.target;

  if(elem.tagName.toLowerCase() == 'span') {
    elem.style.color = 'green';
  }
});

// Forms has Event

var form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
    console.log('submitted');
});





