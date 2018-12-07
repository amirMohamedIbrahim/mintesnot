var btn = document.getElementById('btn');
btn.addEventListener('click', (abc) =>  {
  var sentence = document.getElementById('UsentI').value;

  var main = document.querySelector('main');
  var newElement = document.createElement('p');

  abc.preventDefault();
  main.appendChild(newElement);

  newElement.innerHTML = fires(sentence);
});

function fires(sentence) {
  var a;
  var line;
  var largest;
  var currentWord;
  var WordsinLine;

//  Array WordsinLine[];

  console.log("Enter the sentence, so We can find the longest word");
  line = sentence;

  WordsinLine = line.split(" ");
  largest = WordsinLine[0];

  whitlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

  for(a = 0; a < WordsinLine; a++)
  {

    currentWord = WordsinLine[i];
    if(currentWord.length() > largest.length())
    {
      largest = currentWord;
    }
  }

WordsinLine = line.split(" ");
for (a = 0; a < WordsinLine.length; a++)
{
  currentWord = WordsinLine[a];
  if( currentWord.length > largest.length )
  {
    largest = currentWord;
  }
}
return largest;
}

