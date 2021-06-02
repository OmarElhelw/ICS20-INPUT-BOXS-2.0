document.getElementById('change-image')
.addEventListener('click', image)

document.getElementById('change-text')
addEventListener('click', text)

document.getElementById('hide').addEventListener
('click', hide)

document.getElementById('show').addEventListener
('click', show)

document.getElementById('bg').addEventListener
('click', background)


function image () {
  document.getElementById('picture').src = 
  "images/Turtle.jfif"
}

function text () {
  document.getElementById('text').innerHTML =
  "Turtle WORLD"
}

function hide () {
  document.getElementById('text').style.display =
  "none"
}

function show () {
  document.getElementById('text').style.display =
  "inline"
}

function background () {
  document.body.style.backgroundColor = "blue"
}