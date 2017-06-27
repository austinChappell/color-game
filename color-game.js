var colors = [];
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var h1 = document.querySelector('h1');
var newColors = document.getElementById('new-colors');

var colorLoad = function(num) {
  for(i=0; i<num; i++) {
    colors[i] = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
  };
  var squares = document.querySelectorAll('.square');
  var pickedColor = colors[Math.floor(Math.random() * num)];
  var colorDisplay = document.getElementById('colorDisplay');
  colorDisplay.textContent = pickedColor;
  var feedback = document.getElementById('feedback');
  var h1 = document.querySelector('h1');
  for(i=0; i<num; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function() {
      if(this.style.background != colorDisplay.textContent) {
        this.style.background = '#232323';
        feedback.innerHTML = 'Wrong!';
      } else if(this.style.background == colorDisplay.textContent) {
        feedback.innerHTML = 'Correct!';
        h1.style.background = colorDisplay.textContent;
        for(i=0; i<squares.length; i++) {
          squares[i].style.background = colorDisplay.textContent;
        };
      };
    });
  };
};

colorLoad(6);

newColors.addEventListener('click', function() {
  feedback.innerHTML = '';
  h1.style.background = '#538AFF';
  if(easy.classList.contains('active')) {
    colorLoad(3);
  } else {
    colorLoad(6);
  };
});

easy.addEventListener('click', function() {
  this.classList.add('active');
  hard.classList.remove('active');
  h1.style.background = '#538AFF';
  feedback.innerHTML = '';
  var squares = document.querySelectorAll('.square');
  for(i=3; i<squares.length; i++) {
    squares[i].style.display = 'none';
  };
  colorLoad(3);
});

hard.addEventListener('click', function() {
  this.classList.add('active');
  easy.classList.remove('active');
  h1.style.background = '#538AFF';
  feedback.innerHTML = '';
  var squares = document.querySelectorAll('.square');
  for(i=3; i<squares.length; i++) {
    squares[i].style.display = 'inline';
  };
  colorLoad(6);
});
